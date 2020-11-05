import produce from 'immer';
import { InputMessageTypes } from '../../../messages';
import { ConnectSessionInfo, RoomInfo, UserSession} from 'dals'

let userCollectionSession: UserSession[] = [];
let roomCollectionSession: RoomInfo[] = [];

export const isRoomAvailable = (room: string): boolean =>
  !userCollectionSession.find((session) => session.room === room);

export const addNewUser = (
  connectionId: string,
  { room, trainerToken, isTrainer }: ConnectSessionInfo
) => {
  const currentUsers = userCollectionSession.length;
  userCollectionSession = [
    ...userCollectionSession,
    {
      connectionId,
      room,
      trainerToken,
      isTrainer,
    },
  ];
  return userCollectionSession.length > currentUsers;
};

export const saveRoomInfo = (newRoomInfo: RoomInfo, action: string) => {
  const roomIndex: number = getRoomIndexByName(newRoomInfo);
  const content: string = newRoomInfo.content;
  roomCollectionSession =
    roomIndex === -1
      ? insertRoom(newRoomInfo)
      : updateRoomContent(roomIndex, content, action);
};

export const getRoomContent = (room: string) => {
  const roomInfo = roomCollectionSession.find(
    (roomInfo: RoomInfo) => roomInfo.room === room
  );

  return roomInfo ? roomInfo.content : '';
};

export const isTrainerUser = (connectionId: string) => {
  !userCollectionSession.find((session) => session.connectionId === connectionId && session.isTrainer);
};

export const isExistingConnection = (connectionId: string) =>
  userCollectionSession.findIndex(
    (session) => session.connectionId === connectionId
  ) !== -1;

export const getRoomFromConnectionId = (connectionId: string) => {
  const session = userCollectionSession.find(
    (session) => session.connectionId === connectionId
  );
  return session ? session.room : '';
};

export const getRoomIndexByName = (newRoomInfo: RoomInfo): number => {
  return roomCollectionSession.findIndex(
    (roomInfo: RoomInfo) => roomInfo.room === newRoomInfo.room
  );
};

export const updateRoomContent = (index: number, content: string, action:string) => {
  return produce(roomCollectionSession, (draftState: RoomInfo[]) => {
    switch (action) {
      case InputMessageTypes.TRAINER_APPEND_TEXT:
        draftState[index].content += '\n' + content;
        break;
      case InputMessageTypes.TRAINER_SET_FULL_TEXT:
        draftState[index].content = content;
        break;
    };
  });
};

export const insertRoom = (newRoomInfo: RoomInfo) => {
  return produce(roomCollectionSession, (draftState: RoomInfo[]) => {
    draftState.push(newRoomInfo);
  });
};
