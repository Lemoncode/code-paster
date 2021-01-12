import { sessionRepository, roomRepository, RoomInfo } from 'dals';
import { InputMessageTypes, OutputMessageTypes } from '../messages.consts';
import {
  Action,
  InputEstablishConnectionTrainer,
  SocketInfo,
} from '../messages.model';

export const processInputMessage = async (
  socketInfo: SocketInfo,
  action: Action
): Promise<Action[]> => {
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
    default:
      break;
  }

  return outputActionCollection;
};

const handleEstablishConnectionTrainer = async (
  socketInfo: SocketInfo,
  room: string,
  trainerToken: string
): Promise<Action[]> => {
  if (!trainerToken || !room) {
    // Ignore
    return [];
  }

  const roomAvailable: boolean = await roomRepository.isRoomAvailable(room);

  if (roomAvailable) {
    roomRepository.saveRoomInfo({ room, content: '' }, false);
  }

  if (
    roomAvailable ||
    !(await sessionRepository.isExistingConnection(socketInfo.connectionId))
  ) {
    await sessionRepository.addNewUser({
      connectionId: socketInfo.connectionId,
      room,
      trainerToken,
      isTrainer: !!trainerToken,
    });
    socketInfo.socket.join(room);
  }
  return [{ type: OutputMessageTypes.CONNECTION_ESTABLISHED_TRAINER }];
};

const handleEstablishConnectionStudent = async (
  socketInfo: SocketInfo,
  room: string
): Promise<Action[]> => {
  if (!room) {
    // Ignore
    return [];
  }

  const roomAvailable: boolean = await roomRepository.isRoomAvailable(room);

  if (
    roomAvailable ||
    !(await sessionRepository.isExistingConnection(socketInfo.connectionId))
  ) {
    await sessionRepository.addNewUser({
      connectionId: socketInfo.connectionId,
      room,
      trainerToken: '',
      isTrainer: false,
    });
    socketInfo.socket.join(room);
  }
  return [{ type: OutputMessageTypes.CONNECTION_ESTABLISHED_STUDENT }];
};

const handleTrainerSendText = async (
  socketInfo: SocketInfo,
  text: string,
  action: string
): Promise<Action[]> => {
  if (!sessionRepository.isTrainerUser(socketInfo.connectionId)) {
    return [];
  }
  const room = await sessionRepository.getRoomFromConnectionId(
    socketInfo.connectionId
  );
  const roomInfo: RoomInfo = { room, content: text };

  switch (action) {
    case InputMessageTypes.TRAINER_APPEND_TEXT:
      await roomRepository.saveRoomInfo(roomInfo, false);
      return [{ type: OutputMessageTypes.APPEND_TEXT, payload: text }];
    case InputMessageTypes.TRAINER_SET_FULL_TEXT:
      await roomRepository.saveRoomInfo(roomInfo, true);
      return [{ type: OutputMessageTypes.UPDATE_FULL_CONTENT }];
    default:
      return [];
  }
};
