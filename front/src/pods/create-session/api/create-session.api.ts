import Axios from 'axios';

const getRoomUrl = `${process.env.API_URL}/api/create-room`;

interface SessionInfo {
  room: string;
  trainerToken: string;
}

export const createRoom = async (): Promise<SessionInfo> => {
  // TODO Error handling
  const result = await Axios.get(getRoomUrl);

  return result.data;
};
