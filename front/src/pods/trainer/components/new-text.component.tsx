import React from 'react';
import * as classes from './new-text.styles';
// Material UI ~ components
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface Props {
  handleAppendTrainerText: (trainerText: string) => void;
}

export const NewTextComponent: React.FC<Props> = props => {
  const { handleAppendTrainerText } = props;
  const [trainerText, setTrainerText] = React.useState<string>('');
  const { newTextContainer, labelTextarea, editTextArea, sendBtn } = classes;

  const handleAppendTrainerTextInternal = (): void => {
    handleAppendTrainerText(trainerText);
    setTrainerText('');
  };

  return (
    <div className={newTextContainer}>
      <label className={labelTextarea} htmlFor="new-text">
        New text
      </label>
      <TextareaAutosize
        rowsMax={10}
        rowsMin={10}
        className={editTextArea}
        onChange={e => setTrainerText(e.target.value)}
        value={trainerText}
      />
      <Button
        variant="contained"
        color="primary"
        className={sendBtn}
        onClick={() => handleAppendTrainerTextInternal()}
      >
        Send
      </Button>
    </div>
  );
};
