import React from 'react';
import * as classes from './student.styles';
// Material UI ~ components
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
// Code Editor
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-monokai';

interface Props {
  room: string;
  log: string;
}

export const StudentComponent: React.FC<Props> = props => {
  const { room, log } = props;
  const { mainContainer, sessionName, studentBoard, labelTextarea } = classes;

  return (
    <>
      <main className={mainContainer}>
        <Typography className={sessionName} variant="body1">
          Session name: {room}
        </Typography>
        <label className={labelTextarea} htmlFor="session">
          Content
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
      </main>
    </>
  );
};
