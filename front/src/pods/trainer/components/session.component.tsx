import React from 'react';
import * as classes from './session.styles';
// Material UI ~ components
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';

import UndoIcon from '@material-ui/icons/Undo';
import Button from '@material-ui/core/Button';

interface Props {
  log: string;
  handleSendFullContentLog: (fullContent: string) => void;
}

const getTextArea = (elementId: string): HTMLInputElement =>
  document.getElementById('session') as HTMLInputElement;

const handleSetSessionContent = (sessionContent: string) => {
  const sessionTextArea: HTMLInputElement = getTextArea('session');
  sessionTextArea ? (sessionTextArea.value = sessionContent) : undefined;
};

const getFullContent = (currenSessionContent: string) => {
  const sessionTextArea: HTMLInputElement = getTextArea('session');
  return sessionTextArea && sessionTextArea.value != currenSessionContent
    ? sessionTextArea.value
    : undefined;
};

export const SessionComponent: React.FC<Props> = props => {
  const { log, handleSendFullContentLog } = props;
  const {
    sessionContainer,
    btnContainer,
    sendIcon,
    undoIcon,
    labelTextarea,
    studentBoard,
    sendBtn,
    undoBtn,
  } = classes;

  React.useEffect(() => {
    handleSetSessionContent(log);
  }, [log]);

  return (
    <div className={sessionContainer}>
      <label className={labelTextarea} htmlFor="session">
        Session
      </label>

      <TextareaAutosize
        id="session"
        rowsMax={20}
        rowsMin={20}
        className={studentBoard}
      />
      <div className={btnContainer}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={undoBtn}
          onClick={() => handleSetSessionContent(log)}
        >
          <UndoIcon className={undoIcon} />
          Undo
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={sendBtn}
          onClick={() => handleSendFullContentLog(getFullContent(log))}
        >
          Send Full Content
          <ArrowForwardRoundedIcon className={sendIcon} />
        </Button>
      </div>
    </div>
  );
};
