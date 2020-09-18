import * as React from 'react';
import { useParams } from 'react-router-dom';
import {
  createSocket,
  SocketOuputMessageLiteral,
  SocketEmitMessageTypes,
  SocketReceiveMessageTypes,
} from 'core';
import { StudentComponent } from './student.component';

interface Params {
  room: string;
}

const useLog = () => {
  const [log, internalSetLog] = React.useState('');
  const logRef = React.useRef('');

  const appendToLog = (value: string) => {
    const newText = `${logRef.current}\n${value} `;
    internalSetLog(newText);
    logRef.current = newText;
  };

  return { log, appendToLog, logRef };
};

export const PlayerContainer = () => {
  const { room } = useParams<Params>();
  const { log, appendToLog } = useLog();
  const [socket, setSocket] = React.useState<SocketIO.Socket>(null);

  const handleConnection = () => {
    // Connect to socket
    const localSocket = createSocket({
      room: room,
      trainertoken: '',
    });

    setSocket(localSocket);

    localSocket.on(SocketOuputMessageLiteral.MESSAGE, msg => {
      console.log(msg);

      if (msg.type) {
        const { type, payload } = msg;

        switch (type) {
          case SocketReceiveMessageTypes.APPEND_TEXT:
            appendToLog(payload);
            break;
        }
      }
    });
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
