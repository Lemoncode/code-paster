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

interface Params {
  token: string;
  room: string;
}

export const TrainerContainer = () => {
  const { token, room } = useParams<Params>();
  const { log, appendToLog, setLog } = useLog();
  const [_, setSocket, socketRef] = useWithRef<SocketIO.Socket>(null);

  const [currentTrainerUrl, setCurrentTrainerUrl] = React.useState<string>('');
  const [currentStudentUrl, setCurrentStudentUrl] = React.useState<string>('');

  const handleConnection = () => {
    const socket = createSocket({ room: room, trainertoken: token });
    setSocket(socket);
    socket.on(SocketOuputMessageLiteral.MESSAGE, msg => {
      if (msg.type) {
        const { type, payload } = msg;

        switch (type) {
          case SocketReceiveMessageTypes.APPEND_TEXT:
            appendToLog(payload);
            break;
          case SocketReceiveMessageTypes.TRAINER_GET_FULL_CONTENT:
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
    setCurrentTrainerUrl(`${getHostBaseUrl()}#${routes.trainer(room, token)}`);
    setCurrentStudentUrl(`${getHostBaseUrl()}#${routes.student(room)}`);
    handleConnection();
  }, []);

  const appendLineSeparator = (text: string): string =>
    `${text}${lineSeparator}`;

  const sendTrainerTextToServer = (text: string, action: string): void => {
    socketRef.current.emit(SocketOuputMessageLiteral.MESSAGE, {
      type: action,
      payload: text,
    });
  };

  const handleAppendTrainerText = (trainerText: string): void => {
    const finalText = appendLineSeparator(trainerText);
    sendTrainerTextToServer(
      finalText,
      SocketEmitMessageTypes.TRAINER_APPEND_TEXT
    );
  };

  const handleSendFullContentLog = (fullContent: string): void => {
    fullContent &&
      sendTrainerTextToServer(
        fullContent,
        SocketEmitMessageTypes.TRAINER_SET_FULL_TEXT
      );
  };

  return (
    <TrainerComponent
      handleAppendTrainerText={handleAppendTrainerText}
      handleSendFullContentLog={handleSendFullContentLog}
      currentTrainerUrl={currentTrainerUrl}
      currentStudentUrl={currentStudentUrl}
      log={log}
    />
  );
};
