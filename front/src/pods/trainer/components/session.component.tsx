import React from 'react';
import { cx } from 'emotion';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import UndoIcon from '@material-ui/icons/Undo';
import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

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

  const [autoScroll, setAutoScroll] = React.useState(false);

  const textAreaRef = React.useRef(null);

  React.useEffect(() => {
    handleSetSessionContent(log);
    if (!autoScroll)
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
  }, [log]);

  return (
    <form className={cx(innerClasses.root, className)}>
      <label className={innerClasses.label} htmlFor="session">
        Session
      </label>

      <TextareaAutosize
        ref={textAreaRef}
        id="session"
        rowsMax={20}
        rowsMin={20}
        className={innerClasses.textarea}
      />
      <FormControlLabel
        label="Disable AutoScroll"
        control={
          <Checkbox
            checked={autoScroll}
            onChange={e => setAutoScroll(e.target.checked)}
            color="primary"
          />
        }
      />
      <Button
        variant="contained"
        color="secondary"
        disableElevation
        className={innerClasses.undoButton}
        onClick={() => handleSetSessionContent(log)}
      >
        <UndoIcon className={innerClasses.undoIcon} />
        Undo
      </Button>
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={innerClasses.sendButton}
        onClick={() => handleSendFullContentLog(getFullContent(log))}
      >
        Send Full Content
        <ArrowForwardRoundedIcon className={innerClasses.sendIcon} />
      </Button>
    </form>
  );
};
