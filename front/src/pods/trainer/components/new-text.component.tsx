import React from 'react';
import * as classes from './new-text.styles';
// Material UI ~ components
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface Props {
  handleAppendTrainerText: (trainerText: string,) => void;
}

export const NewTextComponent: React.FC<Props> = props => {
  const { handleAppendTrainerText } = props;
  const [trainerText, setTrainerText] = React.useState<string>('');
  const {
    newTextContainer,
    labelTextarea,
    editTextArea,
    sendBtn,
    sendBtnDisabled,
  } = classes;

  const trainerTextRef = React.useRef<string>(trainerText);

  const handleAppendTrainerTextInternal = (): void => {
    handleAppendTrainerText(trainerTextRef.current);
    setTrainerText('');
    trainerTextRef.current = '';
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    trainerTextRef.current = e.target.value;
    setTrainerText(e.target.value);
  };

  React.useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && e.ctrlKey && Boolean(trainerTextRef.current)) {
        handleAppendTrainerTextInternal();
      }
    };
    window.addEventListener('keypress', listener);
    return () => window.removeEventListener('keypress', listener);
  }, []);

  return (
    <div className={newTextContainer}>
      <label className={labelTextarea} htmlFor="new-text">
        New text
      </label>
      <TextareaAutosize
        rowsMax={10}
        rowsMin={10}
        className={editTextArea}
        onChange={e => handleOnChange(e)}
        value={trainerText}
      />
      <Button
        variant="contained"
        color="primary"
        className={trainerText ? sendBtn : sendBtnDisabled}
        onClick={() => trainerText && handleAppendTrainerTextInternal()}
        aria-disabled={!trainerText}
        disableRipple={!trainerText}
      >
        Send
      </Button>
    </div>
  );
};
