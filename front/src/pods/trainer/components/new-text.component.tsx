import React from 'react';
import * as classes from './new-text.styles';
// Material UI ~ components
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export const NewTextComponent: React.FC = () => {
  const { newTextContainer, labelTextarea, editTextArea, sendBtn } = classes;

  return (
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
  );
};
