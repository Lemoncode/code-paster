import React from 'react';
import { cx } from 'emotion';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ArrowForwardRoundedIcon from '@material-ui/icons/ArrowForwardRounded';
import UndoIcon from '@material-ui/icons/Undo';
import Button from '@material-ui/core/Button';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import * as innerClasses from './session.styles';
import { useAutoScroll } from 'common/hooks/auto-scroll.hook';
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

const handleDownSessionContent = (sessionContent: string) => {
  const element = document.createElement('a');
  const file = new Blob([sessionContent], {
    type: 'text/plain;charset=utf-8',
  });
  const dateNow = new Date(Date.now()).toString().slice(4, 21);
  element.href = URL.createObjectURL(file);
  element.download = `Codepaster_Session_${dateNow}.txt`;
  element.click();
};

const getFullContent = (currenSessionContent: string) => {
  const sessionTextArea: HTMLInputElement = getTextArea('session');
  return sessionTextArea && sessionTextArea.value != currenSessionContent
    ? sessionTextArea.value
    : undefined;
};

export const SessionComponent: React.FC<Props> = props => {
  const { log, handleSendFullContentLog, className } = props;

  const {
    isAutoScrollEnabled,
    setIsAutoScrollEnabled,
    textAreaRef,
    doAutoScroll,
  } = useAutoScroll();

  React.useEffect(() => {
    handleSetSessionContent(log);
    doAutoScroll();
  }, [log]);

  return (
    <form className={cx(innerClasses.root, className)}>
      <label className={innerClasses.label} htmlFor="session">
        Session
      </label>
      <Button
        variant="contained"
        color="secondary"
        disableElevation
        className={innerClasses.downIcon}
        onClick={() => handleDownSessionContent(log)}
      >
        Download Txt
      </Button>
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
            checked={isAutoScrollEnabled}
            onChange={e => setIsAutoScrollEnabled(e.target.checked)}
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
