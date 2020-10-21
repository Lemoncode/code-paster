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
    case OutputMessageTypes.REPLACE_FULL_TEXT:
      handleReplaceFullText(socketInfo, action.payload);
    case OutputMessageTypes.STUDENT_SEND_FULL_CONTENT:
      handleSingleStudentSendFullContent(socketInfo);
  }
};

const handleSingleStudentSendFullContent = (socketInfo: SocketInfo) => {
  const room = getRoomFromConnectionId(socketInfo.connectionId);
  const content = getRoomContent(room);

  socketInfo.socket.emit(SocketOuputMessageLiteral.MESSAGE, {
    type: responseType.STUDENT_GET_FULL_CONTENT,
    payload: content,
  });
};

// TODO: replace with handleSingleStudentSendFullContent code
// but instead of using socketInfo.socket.emit use
// socketInfo.io.in(room)
const handleReplaceFullText = (socketInfo: SocketInfo, text: string) => {
  const room = getRoomFromConnectionId(socketInfo.connectionId);
  socketInfo.io.in(room).emit(SocketOuputMessageLiteral.MESSAGE, {
    // TODO: remove from const list REPLACE_FULL_TEXT
    type: responseType.REPLACE_FULL_TEXT, //STUDENT_GET_FULL_CONTENT
    payload: text,
  });
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
