import * as ioClient from 'socket.io-client';
import { Socket } from 'socket.io';
import { baseSocketUrl } from './const';

export interface ConnectionSetup {
  room: string;
  trainertoken: string;
}

export const createSocket = (connectionSetup: ConnectionSetup): Socket => {
  const { room, trainertoken } = connectionSetup;
  const socketParams = {
    url: baseSocketUrl,
    options: {
      query: { room, trainertoken },
      timeout: 60000,
    },
  };

  // TODO Add channel (room)
  return ioClient(socketParams.url, socketParams.options);
};
