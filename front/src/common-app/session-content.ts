import { SocketOuputMessageLiteral, SocketEmitMessageTypes } from 'core';

export const getPreviousSessionContent = (socketRef: React.MutableRefObject<SocketIO.Socket>, messageType: string) => {
    socketRef.current.emit(SocketOuputMessageLiteral.MESSAGE, {
      type: messageType,
    });
};