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
  const { headerContainer } = classes;

  return (
    <div className={headerContainer}>
      <CopyFieldComponent
        labelName="Trainer Link"
        inputId="trainer-link"
        urlLink={currentTrainerUrl}
      />
      <CopyFieldComponent
        labelName="Students Link"
        inputId="student-link"
        urlLink={currentStudentUrl}
      />
    </div>
  );
};

// CopyField Component - - - - - - - - - - - - - - -

interface CopyFieldProps {
  labelName: string;
  inputId: string;
  urlLink: string;
}

export const CopyFieldComponent: React.FC<CopyFieldProps> = props => {
  const { labelName, inputId, urlLink } = props;
  const { inputField, label, inputIconContainer, textArea, copyIcon } = classes;
  return (
    <div className={inputField}>
      <label className={label} htmlFor={inputId}>
        {labelName}
      </label>
      <div className={inputIconContainer}>
        <TextField
          id={inputId}
          variant="outlined"
          size="small"
          className={textArea}
          value={urlLink}
          disabled
        />
        <FileCopyOutlinedIcon
          className={copyIcon}
          onClick={() => navigator.clipboard.writeText(urlLink)}
        />
      </div>
    </div>
  );
};
