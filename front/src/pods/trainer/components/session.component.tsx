import React from 'react';
import { cx } from '@emotion/css';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import UndoIcon from '@mui/icons-material/Undo';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useAutoScroll } from 'common/hooks/auto-scroll.hook';
import { MarkdownEditor } from 'common/markdown-editor/markdown-editor.component';
import * as innerClasses from './session.styles';

interface Props {
  log: string;
  handleSendFullContentLog: (fullContent: string) => void;
  className?: string;
}
// TODO dont work undo button
const getTextArea = (elementId: string): HTMLInputElement =>
  document.getElementById('session') as HTMLInputElement;

const handleSetSessionContent = (sessionContent: string) => {
  const sessionTextArea: HTMLInputElement = getTextArea('session');
  sessionTextArea ? (sessionTextArea.value = sessionContent) : undefined;
};

export const SessionComponent: React.FC<Props> = (props) => {
  const { log, handleSendFullContentLog, className } = props;

  const { isAutoScrollEnabled, setIsAutoScrollEnabled, doAutoScroll } =
    useAutoScroll();

  React.useEffect(() => {
    handleSetSessionContent(log);
    doAutoScroll();
  }, [log]);

  return (
    <form className={cx(innerClasses.root, className)}>
      <label className={innerClasses.label} htmlFor="session">
        Session
      </label>
      <MarkdownEditor
        value={log}
        onChange={handleSendFullContentLog}
        className={innerClasses.textEditor}
      />
      <Button
        variant="contained"
        color="primary"
        disableElevation
        className={innerClasses.sendButton}
        onClick={() => handleSendFullContentLog(log)}
      >
        Send Full Content
        <ArrowForwardRoundedIcon className={innerClasses.sendIcon} />
      </Button>
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
      <FormControlLabel
        className={innerClasses.autoScroll}
        label="Enable AutoScroll"
        control={
          <Checkbox
            checked={isAutoScrollEnabled}
            onChange={(e) => setIsAutoScrollEnabled(e.target.checked)}
            color="primary"
          />
        }
      />
    </form>
  );
};
