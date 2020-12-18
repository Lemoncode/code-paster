import { RoomInfo } from 'dals';

export interface RoomRepositoryContract {
  saveRoomInfo: (newRoomInfo: RoomInfo, setFullText: boolean)  => Promise<void>;
  isRoomAvailable: (room: string) => Promise<boolean>;
  getRoomContent:(room: string) => Promise<string>;
}
