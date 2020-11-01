import React from 'react';
import * as classes from './session.styles';
// Material UI ~ components
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
// Code Editor
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-monokai';

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
  const { labelTextarea, studentBoard, sendBtn, undoBtn } = classes;

  React.useEffect(() => {
    handleSetSessionContent(log);
  }, [log]);

  return (
    <div>
      <label className={labelTextarea} htmlFor="session">
        Session
      </label>
      <AceEditor
        //id="session"
        placeholder=""
        mode="typescript"
        theme="monokai"
        name="blah2"
        //onChange={(value, e) => handleOnChange(value, e)}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: true,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
          showPrintMargin: false,
          wrap: true,
        }}
        className={studentBoard}
        width="auto"
        value={log}
        readOnly={true}
      />
      <Button
        variant="contained"
        color="secondary"
        className={undoBtn}
        onClick={() => handleSetSessionContent(log)}
      >
        Undo
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={sendBtn}
        onClick={() => handleSendFullContentLog(getFullContent(log))}
      >
        Send Full Content
      </Button>
    </div>
  );
};
