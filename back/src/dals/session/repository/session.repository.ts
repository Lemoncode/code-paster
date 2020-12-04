import { UserSession, UserSessionContext } from 'dals'

export const addNewUser = async ( newUser: UserSession): Promise<void> => {
  await UserSessionContext.create(newUser);
};

export const getRoomFromConnectionId = async (connectionId: string): Promise<string> => {
  const session: UserSession = await getSessionFromConnectionId(connectionId);
  return session ? session.room : '';
};

export const isTrainerUser = async (connectionId: string): Promise<boolean> => {
  const session: UserSession = await getSessionFromConnectionId(connectionId);
  return session ? session.isTrainer : false;
};

export const isExistingConnection = async (connectionId: string): Promise<boolean> => {
  const session: UserSession = await getSessionFromConnectionId(connectionId);
  return Boolean(session);
}

const getSessionFromConnectionId = async (connectionId: string): Promise<UserSession> => {
  return (await UserSessionContext.findOne({connectionId: connectionId}).lean());
};