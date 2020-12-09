import SocketIOClient, { Socket } from 'socket.io';
import { messageSocketEvents } from 'pods/messages';

export const createSocketServer = (app) => {
  const io: SocketIOClient.Socket = require('socket.io')(app);

  io.on('connection', async (socket: Socket) => {
    await messageSocketEvents(socket, io);
  });
};
