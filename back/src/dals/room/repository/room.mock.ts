import produce from 'immer';
import { RoomInfo, UserSession } from 'dals'

let userCollectionSession: UserSession[] = [];
let roomCollectionSession: RoomInfo[] = [];

export const isRoomAvailable = async (room: string): Promise<boolean> =>
  !userCollectionSession.find((session) => session.room === room);

export const saveRoomInfo = async (newRoomInfo: RoomInfo, setFullText: boolean): Promise<void> => {
  const roomIndex: number = await getRoomIndexByName(newRoomInfo);
  const content: string = newRoomInfo.content;
  roomCollectionSession = 
    roomIndex === -1
      ? await insertRoom(newRoomInfo)
      : await updateRoomContent(roomIndex, content, setFullText);
};

export const getRoomContent = async (room: string): Promise<string> => {
  const roomInfo = roomCollectionSession.find(
    (roomInfo: RoomInfo) => roomInfo.room === room
  );

  return roomInfo ? roomInfo.content : '';
};

const getRoomIndexByName = async (newRoomInfo: RoomInfo): Promise<number> => {
  return roomCollectionSession.findIndex(
    (roomInfo: RoomInfo) => roomInfo.room === newRoomInfo.room
  );
};

const updateRoomContent = async (index: number, content: string, setFullText:boolean): Promise<RoomInfo[]> => {
  if (!Boolean(content))
    return roomCollectionSession;

  const newRoomCollectionSession = produce(roomCollectionSession, (draftState: RoomInfo[]) => {
  	const someCurrentContent: boolean = Boolean(draftState[index].content);
  	if (someCurrentContent && !setFullText) {
      draftState[index].content += '\n';
    }
    draftState[index].content = setFullText ? content : (draftState[index].content + content);
  });

  return newRoomCollectionSession;
};

const insertRoom = async (newRoomInfo: RoomInfo): Promise<RoomInfo[]> => {
  return produce(roomCollectionSession, (draftState: RoomInfo[]) => {
    draftState.push(newRoomInfo);
  });
};