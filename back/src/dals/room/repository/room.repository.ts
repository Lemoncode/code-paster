import { RoomInfo, RoomContext } from 'dals'

export const isRoomAvailable = async (room: string): Promise<boolean> => {
  const roomAvailable = !(await RoomContext.exists({ room }));
  return roomAvailable;
}
  
export const saveRoomInfo = async (newRoomInfo: RoomInfo, setFullText: boolean): Promise<void> => {
    await isRoomAvailable(newRoomInfo.room) ? await insertRoom(newRoomInfo) : await updateRoomContent(newRoomInfo, setFullText);
};

export const getRoomContent = async (room: string): Promise<string> => {
  const roomInfo: RoomInfo = await getRoomByName(room);
  return roomInfo ? roomInfo.content : '';
};

const getRoomByName = async (room: string): Promise<RoomInfo> => {
  return (await RoomContext.findOne({room: room}).lean());
};

const updateRoomContent = async (newRoomInfo: RoomInfo, setFullText:boolean): Promise<void> => {
  const room: RoomInfo = await getRoomByName(newRoomInfo.room);
  let newContent = "";
  if(room && Boolean(room.content) && !setFullText) {
    newContent = room.content + '\n';
  }
  newContent = setFullText ? newRoomInfo.content : (newContent + newRoomInfo.content);
  await RoomContext.updateOne({room: newRoomInfo.room}, {content: newContent});
};
  
const insertRoom = async (newRoomInfo: RoomInfo): Promise<void> => {
  await RoomContext.create(newRoomInfo);
};
