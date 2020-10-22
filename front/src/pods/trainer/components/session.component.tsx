import React from 'react';
import * as classes from './session.styles';
// Material UI ~ components
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';

interface Props {
  log: string;
}

const handleSetSessionContent = (sessionContent: string) => {
  const sessionTextArea: HTMLInputElement = document.getElementById("session") as HTMLInputElement;
  sessionTextArea ? sessionTextArea.value=sessionContent : undefined;
}

export const SessionComponent: React.FC<Props> = props => {
  const { log } = props;
  const { labelTextarea, studentBoard, sendBtn, undoBtn } = classes;
  
  React.useEffect(()=>{
    handleSetSessionContent(log);
  }, [log]);

  return (
    <div>
      <label className={labelTextarea} htmlFor="session">
        Session
      </label>
      <TextareaAutosize
        id="session"
        rowsMax={20}
        rowsMin={20}
        className={studentBoard}
        disabled={false}
        // onChange={(e)=>modifyLog="adiso"}
      />
      <Button
        variant="contained"
        color="secondary"
        className={undoBtn}
        onClick={() => handleSetSessionContent(log)}
        // disabled={!trainerText}
      >
        Undo
      </Button>
      <Button
        variant="contained"
        color="primary"
        className={sendBtn}
        // onClick={() => handleAppendTrainerTextInternal()}
        // disabled={!trainerText}
      >
        Send
      </Button>
    </div>
  );
};
