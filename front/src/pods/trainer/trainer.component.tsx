import * as React from 'react';
import { baseApiUrl } from 'core/const';
import * as classes from './trainer.styles';

// Material UI ~ components
import TextField from '@material-ui/core/TextField';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface Props {
  currentTrainerUrl: string;
  currentStudentUrl: string;
}

export const TrainerComponent: React.FC<Props> = props => {
  const { currentStudentUrl, currentTrainerUrl } = props;

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
                value={`${baseApiUrl}/#${currentTrainerUrl}`}
                disabled
              />
              <FileCopyOutlinedIcon className={copyIcon} />
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
                value={`${baseApiUrl}/#${currentStudentUrl}`}
                disabled
              />
              <FileCopyOutlinedIcon className={copyIcon} />
            </div>
          </div>
        </div>
        <div className="newTextContainer">
          <TextareaAutosize
            rowsMax={10}
            rowsMin={10}
            className={editTextArea}
          />
          <Button variant="contained" color="primary" className={sendBtn}>
            Send
          </Button>
        </div>
      </main>
      {/* <h1>Trainer Component</h1>
      <Link to={routes.student('myroom')}>
        Create Session - Navigate to student page
      </Link> */}
    </>
  );
};
