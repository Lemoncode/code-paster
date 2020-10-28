import { InputMessageTypes, OutputMessageTypes } from './consts';
import {
  Action,
  InputEstablishConnectionMaster,
  InputEstablishConnectionPlayer,
  SocketInfo,
} from './model';
import {
  isTrainerUser,
  saveRoomInfo,
  isExistingConnection,
  isRoomAvailable,
  addNewUser,
  getRoomFromConnectionId,
} from '../storage';
import { processOuputMessage } from './output-processor';

export const processInputMessage = (socketInfo: SocketInfo, action: Action): Action[] => {
  let outputActionCollection: Action[] = [];
  switch (action.type) {
    case InputMessageTypes.ESTABLISH_CONNECTION_TRAINER:
      const payloadECT: InputEstablishConnectionMaster = action.payload;
      outputActionCollection = handleEstablishConnectionTrainer(
        socketInfo,
        payloadECT.room,
        payloadECT.trainertoken
      );
      break;
    case InputMessageTypes.ESTABLISH_CONNECTION_STUDENT:
      const payloadECS: InputEstablishConnectionMaster = action.payload;
      outputActionCollection = handleEstablishConnectionStudent(
        socketInfo,
        payloadECS.room
      );
      break;
    case InputMessageTypes.TRAINER_APPEND_TEXT:
      outputActionCollection = handleTrainerSendText(
        socketInfo,
        action.payload,
        InputMessageTypes.TRAINER_APPEND_TEXT
      );
      break;
    case InputMessageTypes.TRAINER_SET_FULL_TEXT:
      outputActionCollection = handleTrainerSendText(
        socketInfo,
        action.payload,
        InputMessageTypes.TRAINER_SET_FULL_TEXT
      );
      break;
    case InputMessageTypes.STUDENT_REQUEST_FULL_CONTENT:
      outputActionCollection = handleRequestGetStudentContent(socketInfo);
      break;
    case InputMessageTypes.TRAINER_REQUEST_FULL_CONTENT:
      outputActionCollection = handleRequestGetTrainerContent(socketInfo);
      break;
    default:
      break;
  }

  return outputActionCollection;
};

const handleRequestGetStudentContent = (socketInfo: SocketInfo) => {
  return [{ type: OutputMessageTypes.STUDENT_SEND_FULL_CONTENT }];
};

const handleRequestGetTrainerContent = (socketInfo: SocketInfo) => {
  return [{ type: OutputMessageTypes.TRAINER_SEND_FULL_CONTENT }];
};

const handleTrainerSendText = (socketInfo: SocketInfo, text: string, action: string) => {
  if (!isTrainerUser(socketInfo.connectionId)) {
    return [];
  }
  const room = getRoomFromConnectionId(socketInfo.connectionId);
  const roomInfo = { room, content: text };
  saveRoomInfo(roomInfo, action);
  switch(action){
    case InputMessageTypes.TRAINER_APPEND_TEXT:
      return [{ type: OutputMessageTypes.APPEND_TEXT, payload: text }];
    case InputMessageTypes.TRAINER_SET_FULL_TEXT:
      return [{ type: OutputMessageTypes.UPDATE_FULL_CONTENT}];
    default:
      return [];
  };
};

const handleEstablishConnectionStudent = (
  socketInfo: SocketInfo,
  room: string
) => {
  if (!room) {
    // Ignore
    return [];
  }

  if (isRoomAvailable(room) || !isExistingConnection(socketInfo.connectionId)) {
    addNewUser(socketInfo.connectionId, {
      room,
      trainerToken: '',
      isTrainer: false,
    });
    socketInfo.socket.join(room);
  }
  return [{ type: OutputMessageTypes.CONNECTION_ESTABLISHED_STUDENT }];
};

const handleEstablishConnectionTrainer = (
  socketInfo: SocketInfo,
  room: string,
  trainerToken: string
): Action[] => {
  if (!trainerToken || !room) {
    // Ignore
    return [];
  }

  if (isRoomAvailable(room) || !isExistingConnection(socketInfo.connectionId)) {
    addNewUser(socketInfo.connectionId, {
      room,
      trainerToken,
      isTrainer: !!trainerToken,
    });
    socketInfo.socket.join(room);
  }
  return [{ type: OutputMessageTypes.CONNECTION_ESTABLISHED_TRAINER }];
};
