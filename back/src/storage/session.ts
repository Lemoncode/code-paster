import produce from 'immer';

// This is just a demo approach, storing in memory session Info
// Another way to identify users: https://stackoverflow.com/questions/6979992/how-to-get-session-id-of-socket-io-client-in-client

interface RoomSesionInfo {
  room: string;
  content: string;
}

interface ConnectSessionInfo {
  room: string;
  trainerToken: string;
  isTrainer: boolean;
}

interface UserSession extends ConnectSessionInfo {
  connectionId: string;
}

let roomCollectionSession: RoomSesionInfo[] = [];
let userCollectionSession: UserSession[] = [];

// TODO: createFunction
// Immer: https://gist.github.com/brauliodiez/756b839f21e658e8d39ceb1906613fdd
// AppendToRoomContent = (room: string, content : string)
// try to find in roomCollectionSession, an item
// that contains that room, if that's the case
// append the text to content
// roomCollectionSession = produce(roomCollectionSession, draft => {
//   // const roomIndex = hacer un find para sacar el index de la room
//   // draft[roomIndex].content = room[index].content + content;
//})
//
// if it doesn't exists create a new entry
//

// TODO create funcion
// getRoomContent = (roomId : string) : string =>
// find the room index
// if it doesn't exists return ''
// if it exsits return room[roomIndex].content

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
