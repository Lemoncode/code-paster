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

interface Props {
  room: string;
}

export const StudentContainer: React.FC<Props> = ({ room }) => {
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
          case SocketReceiveMessageTypes.UPDATE_FULL_CONTENT:
            setLog(payload);
            break;
          default:
            break;
        }
      }
    });
  };

  React.useEffect(() => {
    handleConnection();
    getPreviousSessionContent(
      socketRef,
      SocketEmitMessageTypes.STUDENT_REQUEST_FULL_CONTENT
    );
  }, []);

  return (
    <>
      <StudentComponent room={room} log={log} />
    </>
  );
};
