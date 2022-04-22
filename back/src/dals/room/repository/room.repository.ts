import { RoomInfo, RoomContext } from 'dals';

export const isRoomAvailable = async (room: string): Promise<boolean> => {
  return (await RoomContext.countDocuments({ room: room })) === 0;
};

export const saveRoomInfo = async (
  newRoomInfo: RoomInfo,
  setFullText: boolean
): Promise<void> => {
  (await isRoomAvailable(newRoomInfo.room))
    ? await insertRoom(newRoomInfo)
    : await updateRoomContent(newRoomInfo, setFullText);
};

export const getRoomContent = async (room: string): Promise<string> => {
  const roomInfo: RoomInfo = await getRoomByName(room);
  return roomInfo ? roomInfo.content : '';
};

const getRoomByName = async (room: string): Promise<RoomInfo> => {
  return await RoomContext.findOne({ room: room }).lean();
};

const appendRoomContent = async (newRoomInfo: RoomInfo): Promise<void> => {
  const room: RoomInfo = await getRoomByName(newRoomInfo.room);

  if (room) {
    const newContent = `${room.content}\n${newRoomInfo.content}`;
    await RoomContext.updateOne(
      { room: newRoomInfo.room },
      { content: newContent }
    );
  }
};

const replaceRoomContent = async (newRoomInfo: RoomInfo): Promise<void> => {
  await RoomContext.updateOne(
    { room: newRoomInfo.room },
    { content: newRoomInfo.content }
  );
};

const updateRoomContent = async (
  newRoomInfo: RoomInfo,
  setFullText: boolean
): Promise<void> =>
  setFullText
    ? replaceRoomContent(newRoomInfo)
    : appendRoomContent(newRoomInfo);

const insertRoom = async (newRoomInfo: RoomInfo): Promise<void> => {
  await RoomContext.create(newRoomInfo);
};
