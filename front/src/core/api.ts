import * as ioClient from 'socket.io-client';
import SocketIOClient, { Socket } from 'socket.io';

export interface ConnectionSetup {
  room: string;
  trainertoken: string;
}

export const createSocket = (connectionSetup: ConnectionSetup): Socket => {
  const { room, trainertoken } = connectionSetup;
  const socketParams = {
    url: process.env.BASE_SOCKET_URL,
    options: {
      query: { room, trainertoken },
      timeout: 60000,
    },
  };

  // TODO Add channel (room)
  return ioClient(process.env.BASE_SOCKET_URL, socketParams.options);
};
