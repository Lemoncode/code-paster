import React from 'react';
import { cx } from '@emotion/css';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Button from '@mui/material/Button';
import * as innerClasses from './new-text.styles';
import { SelectComponent } from './select.component';
import { MarkdownEditor } from 'common/markdown-editor/markdown-editor.component';

interface Props {
  handleAppendTrainerText: (trainerText: string) => void;
  className?: string;
}

export const NewTextComponent: React.FC<Props> = (props) => {
  const [language, setLanguage] = React.useState('');
  const [trainerText, setTrainerText] = React.useState<string>('');

  const applyLanguageSelected = (language: string): string =>
    language === '' ? '' : `\`\`\`${language}\n\n\`\`\``;

  const { handleAppendTrainerText, className } = props;

  const handleAppendTrainerTextInternal = (): void => {
    if (trainerText) {
      handleAppendTrainerText(trainerText);
      setTrainerText(applyLanguageSelected(language));
      setLanguage(language);
    }
  };

  React.useEffect(() => {
    if (language) {
      setTrainerText(applyLanguageSelected(language));
    }
  }, [language]);

  return (
    <form className={cx(innerClasses.root, className)}>
      <label className={innerClasses.label} htmlFor="new-text">
        New text
      </label>
      <SelectComponent value={language} onChange={setLanguage} />
      <MarkdownEditor
        value={trainerText}
        onChange={setTrainerText}
        onAppendTrainerTextInternal={handleAppendTrainerTextInternal}
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
