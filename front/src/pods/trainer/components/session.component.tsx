import React from 'react';
import { cx } from 'emotion';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import UndoIcon from '@material-ui/icons/Undo';
import Button from '@material-ui/core/Button';
import * as innerClasses from './session.styles';

interface Props {
  log: string;
  handleSendFullContentLog: (fullContent: string) => void;
  className?: string;
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
  const { log, handleSendFullContentLog, className } = props;

  React.useEffect(() => {
    handleSetSessionContent(log);
  }, [log]);

  return (
    <div className={cx(innerClasses.sessionContainer, className)}>
      <label className={innerClasses.labelTextarea} htmlFor="session">
        Session
      </label>

      <TextareaAutosize
        id="session"
        rowsMax={20}
        rowsMin={20}
        className={innerClasses.studentBoard}
      />
      <div className={innerClasses.btnContainer}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={innerClasses.undoBtn}
          onClick={() => handleSetSessionContent(log)}
        >
          <UndoIcon className={innerClasses.undoIcon} />
          Undo
        </Button>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          className={innerClasses.sendBtn}
          onClick={() => handleSendFullContentLog(getFullContent(log))}
        >
          Send Full Content
          <ArrowForwardRoundedIcon className={innerClasses.sendIcon} />
        </Button>
      </div>
    </div>
  );
};
