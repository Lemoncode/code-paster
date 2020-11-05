import { UserSession, ConnectSessionInfo } from 'dals/session';

export interface SessionRepository {
  isRoomAvailable: (room: string) => Promise<boolean>;
  addNewUser: (connectionId: string, connectSession: ConnectSessionInfo) => Promise<boolean>;
  saveRoomInfo:
  getRoomContent:
  isTrainerUser: (connectionId: string) => Promise<boolean>;
  isExistingConnection:
  getRoomFromConnectionId: (connectionId: string) => Promise<string>;
  getRoomIndexByName:
  updateRoomContent:
  insertRoom:
}
