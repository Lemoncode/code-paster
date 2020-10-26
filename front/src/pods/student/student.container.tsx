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
import { getPreviousSessionContent } from 'common-app';

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

  React.useEffect(() => {
    handleConnection();
    getPreviousSessionContent(socketRef, SocketEmitMessageTypes.STUDENT_REQUEST_FULL_CONTENT);
  }, []);

  return (
    <>
      <StudentComponent room={room} log={log} />
    </>
  );
};
