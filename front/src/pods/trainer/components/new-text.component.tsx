import React from 'react';
import * as classes from './new-text.styles';
// Material UI ~ components
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
// Code Editor
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-typescript';
import 'ace-builds/src-noconflict/theme-monokai';

interface Props {
  handleAppendTrainerText: (trainerText: string) => void;
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

  const handleOnChange = (
    value: string,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    trainerTextRef.current = value;
    setTrainerText(value);
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
      <form>
        <label className={labelTextarea} htmlFor="new-text">
          New text
        </label>
        <AceEditor
          placeholder=""
          mode="typescript"
          theme="monokai"
          name="blah2"
          onChange={(value, e) => handleOnChange(value, e)}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={trainerText}
          setOptions={{
            enableBasicAutocompletion: false,
            enableLiveAutocompletion: true,
            enableSnippets: false,
            showLineNumbers: true,
            tabSize: 2,
            showPrintMargin: false,
          }}
          className={editTextArea}
          width="auto"
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
      </form>
    </div>
  );
};
