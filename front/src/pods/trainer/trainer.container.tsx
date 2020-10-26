import * as React from 'react';
import { useParams } from 'react-router';
import { lineSeparator } from 'core/const';
import { routes } from 'core/router/routes';
import {
  createSocket,
  SocketOuputMessageLiteral,
  SocketEmitMessageTypes,
  SocketReceiveMessageTypes,
} from 'core';
import { useLog } from 'core';
import { TrainerComponent } from './trainer.component';
import { useWithRef, getHostBaseUrl } from 'common';
import { getPreviousSessionContent } from 'common-app';

interface Params {
  token: string;
  room: string;
}

export const TrainerContainer = () => {
  const { token, room } = useParams<Params>();
  const { log, appendToLog, setLog } = useLog();
  const socketDetails = { room: room, trainertoken: token };
  const [socket, setSocket, socketRef] = useWithRef<SocketIO.Socket>(createSocket(socketDetails));

  const [currentTrainerUrl, setCurrentTrainerUrl] = React.useState<string>('');
  const [currentStudentUrl, setCurrentStudentUrl] = React.useState<string>('');

  const handleConnection = () => {
    socket.on(SocketOuputMessageLiteral.MESSAGE, msg => {
      if (msg.type) {
        const { type, payload } = msg;

        switch (type) {
          case SocketReceiveMessageTypes.APPEND_TEXT:
            appendToLog(payload);
            break;
          case SocketReceiveMessageTypes.TRAINER_GET_FULL_CONTENT:
            setLog(payload);
            break;
          default:
            break;
        }
      }
    });
  };

  React.useEffect(() => {
    setCurrentTrainerUrl(`${getHostBaseUrl()}#${routes.trainer(room, token)}`);
    setCurrentStudentUrl(`${getHostBaseUrl()}#${routes.student(room)}`);
    handleConnection();
    getPreviousSessionContent(socketRef, SocketEmitMessageTypes.TRAINER_REQUEST_FULL_CONTENT);
  }, []);

  const appendLineSeparator = (text: string): string =>
    `${text}${lineSeparator}`;

  const sendTrainerTextToServer = (text: string): void => {
    socketRef.current.emit(SocketOuputMessageLiteral.MESSAGE, {
      type: SocketEmitMessageTypes.TRAINER_APPEND_TEXT,
      payload: text,
    });
  };

  const handleAppendTrainerText = (trainerText: string): void => {
    const finalText = appendLineSeparator(trainerText);
    sendTrainerTextToServer(finalText);
  };

  return (
    <TrainerComponent
      handleAppendTrainerText={handleAppendTrainerText}
      currentTrainerUrl={currentTrainerUrl}
      currentStudentUrl={currentStudentUrl}
      log={log}
    />
  );
};
