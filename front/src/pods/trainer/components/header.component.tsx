import React from 'react';
import * as classes from './header.styles';

// Material UI ~ components
import TextField from '@material-ui/core/TextField';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';

interface Props {
  currentTrainerUrl: string;
  currentStudentUrl: string;
}

export const HeaderComponent: React.FC<Props> = props => {
  const { currentStudentUrl, currentTrainerUrl } = props;
  const {
    headerContainer,
    inputField,
    label,
    inputIconContainer,
    textArea,
    copyIcon,
  } = classes;
  return (
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
  );
};
