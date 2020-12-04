import {OutputMessageTypes, SocketOuputMessageLiteral} from './messages.consts';
import { Action, SocketInfo } from './messages.model';
import { sessionRepository, roomRepository } from 'dals';
const { isTrainerUser, getRoomFromConnectionId } = sessionRepository;
const { getRoomContent } = roomRepository;

import { ResponseBase, responseType } from './response';

export const processOutputMessageCollection = async (socketInfo: SocketInfo, actionCollection: Action[]): Promise<void> => {
  if (actionCollection) {
    // TODO: Error handling
    await actionCollection.forEach((action) =>
       processOuputMessage(socketInfo, action)
    );
  }
};

export const processOuputMessage = async (socketInfo: SocketInfo, action: Action) => {
  const { connectionId, io, socket } = socketInfo;
  const isMaster = await isTrainerUser(connectionId);
  const room = await getRoomFromConnectionId(connectionId);

  switch (action.type) {
    case OutputMessageTypes.CONNECTION_ESTABLISHED_TRAINER:
      await handleNotifyConnectionEstablishedTrainer(socketInfo, connectionId);
      break;
    case OutputMessageTypes.CONNECTION_ESTABLISHED_STUDENT:
      await handleNotifyConnectionEstablishedStudent(socketInfo, connectionId);
      break;
    case OutputMessageTypes.APPEND_TEXT:
      await handleAppendText(socketInfo, action.payload);
      break;
    case OutputMessageTypes.UPDATE_FULL_CONTENT:
      await handleUpdateFullContent(socketInfo);
      break;
    case OutputMessageTypes.STUDENT_SEND_FULL_CONTENT:
      await handleSingleStudentSendFullContent(socketInfo);
      break;
    case OutputMessageTypes.TRAINER_SEND_FULL_CONTENT:
      await handleTrainerSendFullContent(socketInfo);
      break;
    default:
      break;
  }
};

const handleSingleStudentSendFullContent = async (socketInfo: SocketInfo) => {
  await handleSendFullContent(socketInfo, responseType.STUDENT_GET_FULL_CONTENT, false);
}

const handleTrainerSendFullContent = async (socketInfo: SocketInfo) => {
  await handleSendFullContent(socketInfo, responseType.TRAINER_GET_FULL_CONTENT, false);
}

const handleUpdateFullContent = async (socketInfo: SocketInfo) => {
  await handleSendFullContent(socketInfo, responseType.UPDATE_FULL_CONTENT, true);
}

const handleSendFullContent = async (socketInfo: SocketInfo, responseType: string, sendToAll: boolean) => {
  const room = await getRoomFromConnectionId(socketInfo.connectionId);
  const content = await getRoomContent(room);
  const msg = {type: responseType, payload: content};
  sendToAll ? socketInfo.io.in(room).emit(SocketOuputMessageLiteral.MESSAGE, msg) : 
              socketInfo.socket.emit(SocketOuputMessageLiteral.MESSAGE, msg);
};

const handleAppendText = async (socketInfo: SocketInfo, text: string) => {
  const room = await getRoomFromConnectionId(socketInfo.connectionId);
  socketInfo.io.in(room).emit(SocketOuputMessageLiteral.MESSAGE, {
    type: responseType.APPEND_TEXT,
    payload: text,
  });
};

const handleNotifyConnectionEstablishedTrainer = async (socketInfo: SocketInfo, connectionId: string) => {
  const room = await getRoomFromConnectionId(socketInfo.connectionId);
  const response: ResponseBase = { type: responseType.CONNECTION_ACK };
  socketInfo.socket.in(room).emit(SocketOuputMessageLiteral.MESSAGE, response);
};

const handleNotifyConnectionEstablishedStudent = async (socketInfo: SocketInfo, connectionId: string) => {
  const room = await getRoomFromConnectionId(socketInfo.connectionId);
  const response: ResponseBase = {
    type: responseType.CONNECTION_ACK,
  };
  socketInfo.socket.in(room).emit(SocketOuputMessageLiteral.MESSAGE, response);
};
