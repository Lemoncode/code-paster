import * as React from 'react';
import { useParams } from 'react-router';
import { baseApiUrl } from 'core/const';
import { routes } from 'core/router/routes';
import {
  createSocket,
  SocketOuputMessageLiteral,
  SocketEmitMessageTypes,
  SocketReceiveMessageTypes,
} from 'core';
import { useLog } from 'core';
import { TrainerComponent } from './trainer.component';

interface Params {
  token: string;
  room: string;
}

export const TrainerContainer = () => {
  const { token, room } = useParams<Params>();
  const { log, appendToLog } = useLog();
  const [trainerText, setTrainerText] = React.useState<string>('');
  const [socket, setSocket] = React.useState<SocketIO.Socket>(null);
  const currentTrainerUrl = `${baseApiUrl}/#${routes.trainer(room, token)}`;
  const currentStudentUrl = `${baseApiUrl}/#${routes.student(room)}`;

  const handleConnection = () => {
    // Connect to socket
    const localSocket = createSocket({
      room: room,
      trainertoken: token,
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

  const handleAppendTrainerText = (): void => {
    socket.emit(SocketOuputMessageLiteral.MESSAGE, {
      type: SocketEmitMessageTypes.TRAINER_APPEND_TEXT,
      payload: trainerText,
    });
  };

  return (
    <TrainerComponent
      trainerText={trainerText}
      setTrainerText={setTrainerText}
      handleAppendTrainerText={handleAppendTrainerText}
      currentTrainerUrl={currentTrainerUrl}
      currentStudentUrl={currentStudentUrl}
      log={log}
    />
  );
};
