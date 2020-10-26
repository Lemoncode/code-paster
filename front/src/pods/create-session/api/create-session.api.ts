import Axios from 'axios';
import { baseApiUrl } from 'core';

const getRoomUrl = `${baseApiUrl}/api/create-room`;

interface SessionInfo {
  room: string;
  trainerToken: string;
}

export const createRoom = async (): Promise<SessionInfo> => {
  // TODO Error handling
  const result = await Axios.get(getRoomUrl);

  return result.data;
};
