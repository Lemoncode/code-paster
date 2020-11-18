import produce from 'immer';
import { InputMessageTypes } from 'messages';

interface ConnectSessionInfo {
  room: string;
  trainerToken: string;
  isTrainer: boolean;
}

interface RoomInfo {
  room: string;
  content: string;
}

interface UserSession extends ConnectSessionInfo {
  connectionId: string;
}

let userCollectionSession: UserSession[] = [];
let roomCollectionSession: RoomInfo[] = [];

export const isRoomAvailable = async (room: string): Promise<boolean> =>
  !userCollectionSession.find((session) => session.room === room);

export const addNewUser = async (connectionId: string, { room, trainerToken, isTrainer }: ConnectSessionInfo): Promise<void> => {
  userCollectionSession = [
    ...userCollectionSession,
    {
      connectionId,
      room,
      trainerToken,
      isTrainer,
    },
  ];
};

export const saveRoomInfo = async (newRoomInfo: RoomInfo, action: string): Promise<void> => {
  const roomIndex: number = await getRoomIndexByName(newRoomInfo);
  const content: string = newRoomInfo.content;
  roomCollectionSession =
    roomIndex === -1
      ? await insertRoom(newRoomInfo)
      : await updateRoomContent(roomIndex, content, action);
};

export const getRoomContent = async (room: string): Promise<string> => {
  const roomInfo = roomCollectionSession.find(
    (roomInfo: RoomInfo) => roomInfo.room === room
  );

  return roomInfo ? roomInfo.content : '';
};

export const isTrainerUser = async (connectionId: string): Promise<boolean> => {
  const session = userCollectionSession.find(
    (session) => session.connectionId === connectionId && session.isTrainer
  );
  return session ? true : false;
};

export const isExistingConnection = async (connectionId: string): Promise<boolean> =>
  userCollectionSession.findIndex(
    (session) => session.connectionId === connectionId
  ) !== -1;

export const getRoomFromConnectionId = async (connectionId: string): Promise<string> => {
  const session = userCollectionSession.find(
    (session) => session.connectionId === connectionId
  );
  return session ? session.room : '';
};

const getRoomIndexByName = async (newRoomInfo: RoomInfo): Promise<number> => {
  return roomCollectionSession.findIndex(
    (roomInfo: RoomInfo) => roomInfo.room === newRoomInfo.room
  );
};

const updateRoomContent = async (index: number, content: string, action:string): Promise<RoomInfo[]> => {
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

const insertRoom = async (newRoomInfo: RoomInfo): Promise<RoomInfo[]> => {
  return produce(roomCollectionSession, (draftState: RoomInfo[]) => {
    draftState.push(newRoomInfo);
  });
};
