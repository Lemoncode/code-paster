import React from 'react';
import { cx } from '@emotion/css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import UndoIcon from '@mui/icons-material/Undo';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import * as innerClasses from './session.styles';
import { useAutoScroll } from 'common/hooks/auto-scroll.hook';
import { MarkdownEditor } from 'common/markdowneditor/markdowneditor.component';

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

export const SessionComponent: React.FC<Props> = (props) => {
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
      <MarkdownEditor value={log} onChange={handleSendFullContentLog} />
      <TextareaAutosize
        role="log"
        ref={textAreaRef}
        id="session"
        maxRows={20}
        minRows={20}
        className={innerClasses.textarea}
      />
      <FormControlLabel
        label="Disable AutoScroll"
        control={
          <Checkbox
            checked={isAutoScrollEnabled}
            onChange={(e) => setIsAutoScrollEnabled(e.target.checked)}
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
