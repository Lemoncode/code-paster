import { InputMessageTypes } from 'messages';
import {ConnectSessionInfo, RoomInfo, UserSession, UserSessionContext, RoomContext} from 'dals'

export const isRoomAvailable = async (room: string): Promise<boolean> => {
  const roomAvailable = !(await RoomContext.exists({ room }));
  return roomAvailable;
}
  
export const saveRoomInfo = async (newRoomInfo: RoomInfo, action: string): Promise<void> => {
    await isRoomAvailable(newRoomInfo.room) ? await insertRoom(newRoomInfo) : await updateRoomContent(newRoomInfo, action);
};

export const getRoomContent = async (room: string): Promise<string> => {
  const roomInfo: RoomInfo = await getRoomByName(room);
  return roomInfo ? roomInfo.content : '';
};

const getRoomByName = async (room: string): Promise<RoomInfo> => {
  return (await RoomContext.findOne({room: room}).lean());
};

const updateRoomContent = async (newRoomInfo: RoomInfo, action:string): Promise<void> => {
  const room: RoomInfo = await getRoomByName(newRoomInfo.room);
  
  let newContent = "";
  
  if(room) {
    newContent = room.content;
  }
  
  switch (action) {
    case InputMessageTypes.TRAINER_APPEND_TEXT:
      newContent += '\n' + newRoomInfo.content;
      break;
    case InputMessageTypes.TRAINER_SET_FULL_TEXT:
      newContent = newRoomInfo.content;
      break;
  };

  await RoomContext.updateOne({room: newRoomInfo.room}, {content: newContent});

};
  
const insertRoom = async (newRoomInfo: RoomInfo): Promise<void> => {
  await RoomContext.create(newRoomInfo);
};

const getRoomCollection = async (): Promise<RoomInfo[]> => {
  return (await RoomContext.find().lean());
} 

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
  return session ? true : false;
}

const getSessionFromConnectionId = async (connectionId: string): Promise<UserSession> => {
  return (await UserSessionContext.findOne({connectionId: connectionId}));
};

