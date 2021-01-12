import { SocketOuputMessageLiteral, SocketEmitMessageTypes } from 'core';

export const getPreviousSessionContent = (socket:SocketIO.Socket, messageType: string) => {
    socket.emit(SocketOuputMessageLiteral.MESSAGE, {
      type: messageType,
    });
};
