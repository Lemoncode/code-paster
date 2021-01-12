import { sessionRepository, roomRepository } from 'dals';
import {
  OutputMessageTypes,
  SocketOuputMessageLiteral,
} from '../messages.consts';
import { Action, SocketInfo } from '../messages.model';
import { ResponseBase, responseType } from './response';

export const processOutputMessageCollection = async (
  socketInfo: SocketInfo,
  actionCollection: Action[]
): Promise<void> => {
  if (actionCollection) {
    // TODO: Error handling
    for (const action of actionCollection) {
      await processOuputMessage(socketInfo, action);
    }
  }
};

export const processOuputMessage = async (
  socketInfo: SocketInfo,
  action: Action
) => {
  switch (action.type) {
    case OutputMessageTypes.CONNECTION_ESTABLISHED_TRAINER:
      await handleNotifyConnectionEstablishedTrainer(socketInfo);
      break;
    case OutputMessageTypes.CONNECTION_ESTABLISHED_STUDENT:
      await handleNotifyConnectionEstablishedStudent(socketInfo);
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

const handleNotifyConnectionEstablishedTrainer = async (
  socketInfo: SocketInfo
) => {
  const room = await sessionRepository.getRoomFromConnectionId(
    socketInfo.connectionId
  );
  const response: ResponseBase = { type: responseType.CONNECTION_ACK };
  socketInfo.socket.in(room).emit(SocketOuputMessageLiteral.MESSAGE, response);
};

const handleNotifyConnectionEstablishedStudent = async (
  socketInfo: SocketInfo
) => {
  const room = await sessionRepository.getRoomFromConnectionId(
    socketInfo.connectionId
  );
  const response: ResponseBase = {
    type: responseType.CONNECTION_ACK,
  };
  socketInfo.socket.in(room).emit(SocketOuputMessageLiteral.MESSAGE, response);
};

const handleAppendText = async (socketInfo: SocketInfo, text: string) => {
  const room = await sessionRepository.getRoomFromConnectionId(
    socketInfo.connectionId
  );
  socketInfo.io.in(room).emit(SocketOuputMessageLiteral.MESSAGE, {
    type: responseType.APPEND_TEXT,
    payload: text,
  });
};

const handleUpdateFullContent = async (socketInfo: SocketInfo) => {
  await handleSendFullContent(
    socketInfo,
    responseType.UPDATE_FULL_CONTENT,
    true
  );
};

const handleSingleStudentSendFullContent = async (socketInfo: SocketInfo) => {
  await handleSendFullContent(
    socketInfo,
    responseType.STUDENT_GET_FULL_CONTENT,
    false
  );
};

const handleTrainerSendFullContent = async (socketInfo: SocketInfo) => {
  await handleSendFullContent(
    socketInfo,
    responseType.TRAINER_GET_FULL_CONTENT,
    false
  );
};

const handleSendFullContent = async (
  socketInfo: SocketInfo,
  responseType: string,
  sendToAll: boolean
) => {
  const room = await sessionRepository.getRoomFromConnectionId(
    socketInfo.connectionId
  );
  const content = await roomRepository.getRoomContent(room);
  const msg = { type: responseType, payload: content };
  sendToAll
    ? socketInfo.io.in(room).emit(SocketOuputMessageLiteral.MESSAGE, msg)
    : socketInfo.socket.emit(SocketOuputMessageLiteral.MESSAGE, msg);
};
