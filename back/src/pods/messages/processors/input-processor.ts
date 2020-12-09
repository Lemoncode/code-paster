import { InputMessageTypes, OutputMessageTypes } from '../messages.consts';
import { Action, InputEstablishConnectionTrainer, SocketInfo } from '../messages.model';
import {sessionRepository, roomRepository } from 'dals';
const {addNewUser, getRoomFromConnectionId, isExistingConnection, isTrainerUser } = sessionRepository;
const { isRoomAvailable, saveRoomInfo} = roomRepository;

export const processInputMessage = async (socketInfo: SocketInfo, action: Action): Promise<Action[]> => {
  let outputActionCollection: Action[] = [];
  switch (action.type) {
    case InputMessageTypes.ESTABLISH_CONNECTION_TRAINER:
      const payloadECT: InputEstablishConnectionTrainer = action.payload;
      outputActionCollection = await handleEstablishConnectionTrainer(
        socketInfo,
        payloadECT.room,
        payloadECT.trainertoken
      );
      break;
    case InputMessageTypes.ESTABLISH_CONNECTION_STUDENT:
      const payloadECS: InputEstablishConnectionTrainer = action.payload;
      outputActionCollection = await handleEstablishConnectionStudent(
        socketInfo,
        payloadECS.room
      );
      break;
    case InputMessageTypes.TRAINER_APPEND_TEXT:
      outputActionCollection = await handleTrainerSendText(
        socketInfo,
        action.payload,
        InputMessageTypes.TRAINER_APPEND_TEXT
      );
      break;
    case InputMessageTypes.TRAINER_SET_FULL_TEXT:
      outputActionCollection = await handleTrainerSendText(
        socketInfo,
        action.payload,
        InputMessageTypes.TRAINER_SET_FULL_TEXT
      );
      break;
    case InputMessageTypes.STUDENT_REQUEST_FULL_CONTENT:
      outputActionCollection = await handleRequestGetStudentContent(socketInfo);
      break;
    case InputMessageTypes.TRAINER_REQUEST_FULL_CONTENT:
      outputActionCollection = await handleRequestGetTrainerContent(socketInfo);
      break;
    default:
      break;
  }

  return outputActionCollection;
};

const handleRequestGetStudentContent = async (socketInfo: SocketInfo): Promise<Action[]> => {
  return [{ type: OutputMessageTypes.STUDENT_SEND_FULL_CONTENT }];
};

const handleRequestGetTrainerContent = async (socketInfo: SocketInfo): Promise<Action[]> => {
  return [{ type: OutputMessageTypes.TRAINER_SEND_FULL_CONTENT }];
};

const handleTrainerSendText = async (socketInfo: SocketInfo, text: string, action: string): Promise<Action[]> => {
  if (!isTrainerUser(socketInfo.connectionId)) {
    return [];
  }
  const room = await getRoomFromConnectionId(socketInfo.connectionId);
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

const handleEstablishConnectionStudent = async (socketInfo: SocketInfo, room: string): Promise<Action[]> => {
  if (!room) {
    // Ignore
    return [];
  }

  const roomAvailable: boolean = await isRoomAvailable(room);

  if (roomAvailable || !(await isExistingConnection(socketInfo.connectionId))) {
    await addNewUser({connectionId: socketInfo.connectionId, room, trainerToken: '', isTrainer: false});
    socketInfo.socket.join(room);
  }
  return [{ type: OutputMessageTypes.CONNECTION_ESTABLISHED_STUDENT }];
};

const handleEstablishConnectionTrainer = async (socketInfo: SocketInfo, room: string, trainerToken: string): Promise<Action[]> => {
  if (!trainerToken || !room) {
    // Ignore
    return [];
  }

  const roomAvailable: boolean = await isRoomAvailable(room);

  if(roomAvailable) {
    saveRoomInfo({room, content:""}, "");
  }

  if (roomAvailable || !(await isExistingConnection(socketInfo.connectionId))) {
    await addNewUser({ connectionId: socketInfo.connectionId, room, trainerToken, isTrainer: !!trainerToken });
    socketInfo.socket.join(room);
  }
  return [{ type: OutputMessageTypes.CONNECTION_ESTABLISHED_TRAINER }];
};
