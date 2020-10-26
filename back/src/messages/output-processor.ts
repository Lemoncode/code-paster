import {
  OutputMessageTypes,
  ErrorCodes,
  SocketMessageTypes,
  SocketOuputMessageLiteral,
} from './consts';
import { Action, SocketInfo } from './model';
import {
  isTrainerUser,
  getRoomFromConnectionId,
  getRoomContent,
} from '../storage';
import * as SocketIOClient from 'socket.io';
import { ResponseBase, responseType } from './response';

export const processOutputMessageCollection = (
  socketInfo: SocketInfo,
  actionCollection: Action[]
) => {
  if (actionCollection) {
    // TODO: Error handling
    actionCollection.forEach((action) =>
      processOuputMessage(socketInfo, action)
    );
  }
};

export const processOuputMessage = (socketInfo: SocketInfo, action: Action) => {
  const { connectionId, io, socket } = socketInfo;
  const isMaster = isTrainerUser(connectionId);
  const room = getRoomFromConnectionId(connectionId);

  switch (action.type) {
    case OutputMessageTypes.CONNECTION_ESTABLISHED_TRAINER:
      handleNotifyConnectionEstablishedTrainer(socketInfo, connectionId);
      break;
    case OutputMessageTypes.CONNECTION_ESTABLISHED_STUDENT:
      handleNotifyConnectionEstablishedStudent(socketInfo, connectionId);
      break;
    case OutputMessageTypes.APPEND_TEXT:
      handleAppendText(socketInfo, action.payload);
      break;
    case OutputMessageTypes.UPDATE_FULL_CONTENT:
      handleUpdateFullContent(socketInfo);
      break;
    case OutputMessageTypes.STUDENT_SEND_FULL_CONTENT:
      handleSingleStudentSendFullContent(socketInfo);
      break;
    case OutputMessageTypes.TRAINER_SEND_FULL_CONTENT:
      handleTrainerSendFullContent(socketInfo);
      break;
    default:
      break;
  }
};

const handleSingleStudentSendFullContent = (socketInfo: SocketInfo) => {
  handleSendFullContent(socketInfo, responseType.STUDENT_GET_FULL_CONTENT, false);
}

const handleTrainerSendFullContent = (socketInfo: SocketInfo) => {
  handleSendFullContent(socketInfo, responseType.TRAINER_GET_FULL_CONTENT, false);
}

const handleUpdateFullContent = (socketInfo: SocketInfo) => {
  handleSendFullContent(socketInfo, responseType.UPDATE_FULL_CONTENT, true);
}

const handleSendFullContent = (socketInfo: SocketInfo, responseType: string, sendToAll: boolean) => {
  const room = getRoomFromConnectionId(socketInfo.connectionId);
  const content = getRoomContent(room);
  const msg = {type: responseType, payload: content};
  sendToAll ? socketInfo.io.in(room).emit(SocketOuputMessageLiteral.MESSAGE, msg) : 
              socketInfo.socket.emit(SocketOuputMessageLiteral.MESSAGE, msg);
};

const handleAppendText = (socketInfo: SocketInfo, text: string) => {
  const room = getRoomFromConnectionId(socketInfo.connectionId);
  socketInfo.io.in(room).emit(SocketOuputMessageLiteral.MESSAGE, {
    type: responseType.APPEND_TEXT,
    payload: text,
  });
};

const handleNotifyConnectionEstablishedTrainer = (
  socketInfo: SocketInfo,
  connectionId: string
) => {
  const room = getRoomFromConnectionId(socketInfo.connectionId);
  const response: ResponseBase = { type: responseType.CONNECTION_ACK };
  socketInfo.socket.in(room).emit(SocketOuputMessageLiteral.MESSAGE, response);
};

const handleNotifyConnectionEstablishedStudent = (
  socketInfo: SocketInfo,
  connectionId: string
) => {
  const room = getRoomFromConnectionId(socketInfo.connectionId);
  const response: ResponseBase = {
    type: responseType.CONNECTION_ACK,
  };
  socketInfo.socket.in(room).emit(SocketOuputMessageLiteral.MESSAGE, response);
};
