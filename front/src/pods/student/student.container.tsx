import * as React from 'react';
import { useParams } from 'react-router-dom';
import {
  createSocket,
  SocketOuputMessageLiteral,
  SocketReceiveMessageTypes,
  SocketEmitMessageTypes,
} from 'core';
import { useLog } from 'core';
import { StudentComponent } from './student.component';
import { useWithRef } from 'common';

interface Params {
  room: string;
}

export const PlayerContainer = () => {
  const { room } = useParams<Params>();
  const { log, appendToLog, setLog } = useLog();
  const [socket, setSocket, socketRef] = useWithRef<SocketIO.Socket>(null);

  const handleConnection = () => {
    // Connect to socket
    const localSocket = createSocket({
      room: room,
      trainertoken: '',
    });

    setSocket(localSocket);

    localSocket.on(SocketOuputMessageLiteral.MESSAGE, msg => {
      if (msg.type) {
        const { type, payload } = msg;

        switch (type) {
          case SocketReceiveMessageTypes.APPEND_TEXT:
            appendToLog(payload);
            break;
          case SocketReceiveMessageTypes.STUDENT_GET_FULL_CONTENT:
            setLog(payload);
            break;
        }
      }
    });
  };

  const getPreviousSessionContent = () => {
    socketRef.current.emit(SocketOuputMessageLiteral.MESSAGE, {
      type: SocketEmitMessageTypes.STUDENT_REQUEST_FULL_CONTENT,
    });
  };

  React.useEffect(() => {
    handleConnection();
    getPreviousSessionContent();
  }, []);

  return (
    <>
      <StudentComponent room={room} log={log} />
    </>
  );
};
