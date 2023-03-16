import React from 'react';
import { cx } from '@emotion/css';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import * as innerClasses from './new-text.styles';
import { SelectComponent } from './select.component';
import { MarkdownEditor } from 'common/markdowneditor/markdowneditor.component';

interface Props {
  handleAppendTrainerText: (trainerText: string) => void;
  className?: string;
}

export const NewTextComponent: React.FC<Props> = (props) => {
  const [language, setLanguage] = React.useState('');

  const languageModify = (language: string): string => language === "" ? "" : `\`\`\`${language}\n\n\`\`\``;

  const { handleAppendTrainerText, className } = props;
  const [trainerText, setTrainerText] = React.useState<string>('');

  const handleAppendTrainerTextInternal = (): void => {
    if (trainerText) {
      handleAppendTrainerText(trainerText);
      setTrainerText('');
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setTrainerText(e.target.value);
  };

  return (
    <form className={cx(innerClasses.root, className)}>
      <label className={innerClasses.label} htmlFor="new-text">
        New text
      </label>
      <SelectComponent value={language} onChange={setLanguage}/>
      <MarkdownEditor value={languageModify(language)} onChange={setTrainerText}/>
      <TextareaAutosize
        maxRows={10}
        minRows={10}
        className={innerClasses.textarea}
        onChange={(e) => handleOnChange(e)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && event.ctrlKey) {
            handleAppendTrainerTextInternal();
          }
        }}
        value={trainerText}
      />
      <Button
        variant="contained"
        color="primary"
        className={innerClasses.button}
        onClick={handleAppendTrainerTextInternal}
        disabled={!trainerText}
        aria-disabled={!trainerText}
        disableRipple={!trainerText}
        disableElevation
      >
        Send
        <ArrowForwardRoundedIcon className={innerClasses.buttonIcon} />
      </Button>
    </form>
  );
};
