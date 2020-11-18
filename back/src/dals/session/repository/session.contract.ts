import { RoomInfo } from 'dals/room';
import { ConnectSessionInfo } from 'dals/session';

export interface SessionRepository {
  isTrainerUser: (connectionId: string) => Promise<boolean>;
  saveRoomInfo: (newRoomInfo: RoomInfo, action: string)  => Promise<void>;
  isExistingConnection: (connectionId: string) => Promise<boolean>;
  isRoomAvailable: (room: string) => Promise<boolean>;
  addNewUser: (connectionId: string, connectSession: ConnectSessionInfo) => Promise<void>;
  getRoomFromConnectionId: (connectionId: string) => Promise<string>;
  getRoomContent:(room: string) => Promise<string>;
}

