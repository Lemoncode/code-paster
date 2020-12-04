import { UserSession } from 'dals'

let userCollectionSession: UserSession[] = [];

export const addNewUser = async (newUser: UserSession): Promise<void> => {
  const {connectionId, room, trainerToken, isTrainer } = newUser;
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