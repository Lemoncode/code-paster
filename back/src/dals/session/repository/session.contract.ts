import { UserSession } from 'dals';

export interface SessionRepositoryContract {
  isTrainerUser: (connectionId: string) => Promise<boolean>;
  isExistingConnection: (connectionId: string) => Promise<boolean>;
  addNewUser: (userSession: UserSession) => Promise<void>;
  getRoomFromConnectionId: (connectionId: string) => Promise<string>;
}