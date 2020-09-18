import React from 'react';
import * as classes from './session.styles';
// Material UI ~ components
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface Props {
  log: string;
}

export const SessionComponent: React.FC<Props> = props => {
  const { log } = props;
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
        value={log}
      />
    </div>
  );
};
