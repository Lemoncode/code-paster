import * as React from 'react';
import { baseApiUrl } from 'core/const';
import * as classes from './trainer.styles';
import { useParams } from 'react-router';

// Material UI ~ components
import TextField from '@material-ui/core/TextField';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface Props {}

interface Params {
  token: string;
  room: string;
}

export const TrainerComponent: React.FC<Props> = props => {
  const { token, room } = useParams<Params>();
  const currentTrainerUrl = `${baseApiUrl}/#/trainer/${room}/${token}`;
  const currentStudentUrl = `${baseApiUrl}/#/student/${room}`;

  const {
    mainContainer,
    headerContainer,
    inputField,
    label,
    inputIconContainer,
    textArea,
    copyIcon,
    editTextArea,
    sendBtn,
    newTextContainer,
    studentBoard,
    labelTextarea,
  } = classes;

  return (
    <>
      <main className={mainContainer}>
        <div className={headerContainer}>
          <div className={inputField}>
            <label className={label} htmlFor="trainer-link">
              Trainer Link
            </label>
            <div className={inputIconContainer}>
              <TextField
                id="trainer-link"
                variant="outlined"
                size="small"
                className={textArea}
                value={currentTrainerUrl}
                disabled
              />
              <FileCopyOutlinedIcon
                className={copyIcon}
                onClick={() => navigator.clipboard.writeText(currentTrainerUrl)}
              />
            </div>
          </div>
          <div className={inputField}>
            <label className={label} htmlFor="student-link">
              Students Link
            </label>
            <div className={inputIconContainer}>
              <TextField
                id="student-link"
                variant="outlined"
                size="small"
                className={textArea}
                value={currentStudentUrl}
                disabled
              />
              <FileCopyOutlinedIcon
                className={copyIcon}
                onClick={() => navigator.clipboard.writeText(currentStudentUrl)}
              />
            </div>
          </div>
        </div>
        <div className={newTextContainer}>
          <label className={labelTextarea} htmlFor="new-text">
            New text
          </label>
          <TextareaAutosize
            id="new-text"
            rowsMax={10}
            rowsMin={10}
            className={editTextArea}
          />
          <Button variant="contained" color="primary" className={sendBtn}>
            Send
          </Button>
        </div>
        <div>
          <label className={labelTextarea} htmlFor="session">
            Session
          </label>
          <TextareaAutosize
            id="session"
            rowsMax={20}
            rowsMin={20}
            className={studentBoard}
          />
        </div>
      </main>
      {/* <h1>Trainer Component</h1>
      <Link to={routes.student('myroom')}>
        Create Session - Navigate to student page
      </Link> */}
    </>
  );
};
