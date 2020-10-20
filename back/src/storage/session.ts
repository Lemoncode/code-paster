// This is just a demo approach, storing in memory session Info
// Another way to identify users: https://stackoverflow.com/questions/6979992/how-to-get-session-id-of-socket-io-client-in-client
import produce from 'immer';

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

export const isRoomAvailable = (room: string) =>
  !userCollectionSession.find((session) => session.room === room);

export const addNewUser = (
  connectionId: string,
  { room, trainerToken, isTrainer }: ConnectSessionInfo
) => {
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

export const saveRoomInfo = (newRoomInfo: RoomInfo) => {
  const roomIndex: number = getRoomIndexByName(newRoomInfo);
  const content: string = newRoomInfo.content;

  roomCollectionSession =
    roomIndex === -1
      ? insertRoom(newRoomInfo)
      : updateRoomContent(roomIndex, content);
};

export const getRoomContent = (room: string) => {
  const roomInfo = roomCollectionSession.find(
    (roomInfo: RoomInfo) => roomInfo.room === room
  );

  return roomInfo ? roomInfo.content : '';
};

export const isTrainerUser = (connectionId: string) => {
  const session = userCollectionSession.find(
    (session) => session.connectionId === connectionId && session.isTrainer
  );
  return session;
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

export const updateRoomContent = (index: number, content: string) => {
  return produce(roomCollectionSession, (draftState: RoomInfo[]) => {
    draftState[index].content += '\n' + content;
  });
};

export const insertRoom = (newRoomInfo: RoomInfo) => {
  return produce(roomCollectionSession, (draftState: RoomInfo[]) => {
    draftState.push(newRoomInfo);
  });
};
