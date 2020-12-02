import { RoomInfo } from 'dals';

export interface RoomRepositoryContract {
  saveRoomInfo: (newRoomInfo: RoomInfo, action: string)  => Promise<void>;
  isRoomAvailable: (room: string) => Promise<boolean>;
  getRoomContent:(room: string) => Promise<string>;
}

