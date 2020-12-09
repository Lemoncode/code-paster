import SocketIOClient, { Socket } from 'socket.io';
import { Action, SocketInfo } from './messages.model';
import { processInputMessage, processOutputMessageCollection } from './processors';
import { InputMessageTypes } from './messages.consts';

export const messageSocketEvents = async (
  socket: Socket,
  io: SocketIOClient.Socket
) => {
  // WATCH OUT !! Reconnect is not implemented
  // In the connection input processing, we should
  // check if connectionId matches with userId and RoomId
  // if not reject, if it's accepted send connection
  // reestablished
  const { room, trainertoken } = socket.handshake.query;
  console.log(`room request: ${room}`);
  console.log(`trainer token: ${trainertoken}`);
  console.log('*** Session ID:', socket.conn.id);

  let outputMessageCollection: Action[] = [];
  const socketInfo: SocketInfo = {
    socket: socket,
    io,
    connectionId: socket.conn.id,
  };

  // TODO encapuslate this to processInputMessage
  if (trainertoken) {
    outputMessageCollection = await processInputMessage(socketInfo, {
      type: InputMessageTypes.ESTABLISH_CONNECTION_TRAINER,
      payload: {
        room,
        trainertoken,
      },
    });
  } else {
    outputMessageCollection = await processInputMessage(socketInfo, {
      type: InputMessageTypes.ESTABLISH_CONNECTION_STUDENT,
      payload: {
        room,
      },
    });
  }

  processOutputMessageCollection(socketInfo, outputMessageCollection);

  socket.on('message', async function (message: any) {
    console.log("socket.on 'message':: " + message);
    if (message && message.type) {
      const outputMessageCollection: Action[] = await processInputMessage(
        socketInfo,
        message
      );

      await processOutputMessageCollection(socketInfo, outputMessageCollection);
    }
  });

};
