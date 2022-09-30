import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as innerClasses from './student.styles';
import { useAutoScroll } from 'common/hooks/auto-scroll.hook';

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
        <div role="log">
          <TextareaAutosize
            ref={textAreaRef}
            data-testid="session"
            id="session"
            rowsMax={30}
            rowsMin={30}
            className={innerClasses.textarea}
            value={log ?? ''}
            readOnly={true}
          />
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
