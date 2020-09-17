import React from 'react';
import * as classes from './session.styles';
// Material UI ~ components
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export const SessionComponent: React.FC = () => {
  const { labelTextarea, studentBoard } = classes;

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
      />
    </div>
  );
};
