import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';

import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import * as innerClasses from './student.styles';
import { useAutoScroll } from 'common/hooks/auto-scroll.hook';

import { MarkdownView } from 'common/markdownview/markdownView';

interface Props {
  room: string;
  log: string;
}

export const StudentComponent: React.FC<Props> = props => {
  const { room, log } = props;

  const {
    isAutoScrollEnabled,
    setIsAutoScrollEnabled,
    textAreaRef,
    doAutoScroll,
  } = useAutoScroll();

  React.useEffect(() => {
    doAutoScroll();
  }, [log]);

  return (
    <>
      <main className={innerClasses.root}>
        <Typography
          className={innerClasses.sessionName}
          variant="body1"
          role="heading"
        >
          Session name: {room ?? ''}
        </Typography>
        <label className={innerClasses.label} htmlFor="session">
          Content
        </label>
        <div role="log" className={innerClasses.textarea} >
          <MarkdownView value={log ?? ''} />
          {/* <TextareaAutosize
            ref={textAreaRef}
            data-testid="session"
            id="session"
            maxRows={30}
            minRows={30}
            className={innerClasses.textarea}
            value={log ?? ''}
            readOnly={true}
          /> */}
        </div>
        <FormControlLabel
          label="Disable AutoScroll"
          control={
            <Checkbox
              checked={isAutoScrollEnabled}
              onChange={e => setIsAutoScrollEnabled(e.target.checked)}
              color="primary"
            />
          }
        />
      </main>
    </>
  );
};
