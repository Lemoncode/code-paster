import * as React from 'react';
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
import { useParams } from 'react-router-dom';

interface Params {
  room: string;
}

export const StudentContainer = () => {
  const { room } = useParams<Params>();
  const { log, appendToLog, setLog } = useLog();

  const handleConnection = () => {
    // Connect to socket
    const socket = createSocket({
      room: room,
      trainertoken: '',
    });

    socket.on(SocketOuputMessageLiteral.MESSAGE, msg => {
      if (msg.type) {
        const { type, payload } = msg;

        switch (type) {
          case SocketReceiveMessageTypes.APPEND_TEXT:
            appendToLog(payload);
            break;
          case SocketReceiveMessageTypes.STUDENT_GET_FULL_CONTENT:
          case SocketReceiveMessageTypes.UPDATE_FULL_CONTENT:
            setLog(payload);
            break;
          default:
            break;
        }
      }
    });
    getPreviousSessionContent(
      socket,
      SocketEmitMessageTypes.STUDENT_REQUEST_FULL_CONTENT
    );
  };

  React.useEffect(() => {
    handleConnection();
  }, []);

  return (
    <>
      <StudentComponent room={room} log={log} />
    </>
  );
};
