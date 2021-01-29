import React from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as innerClasses from './student.styles';

interface Props {
  room: string;
  log: string;
}

export const StudentComponent: React.FC<Props> = props => {
  const { room, log } = props;

  const [isAutoScrollEnabled, setAutoScrollEnabled] = React.useState(true);

  const textAreaRef = React.useRef(null);

  React.useEffect(() => {
    if (isAutoScrollEnabled && textAreaRef.current) {
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
    }
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
        <TextareaAutosize
          ref={textAreaRef}
          id="session"
          rowsMax={30}
          rowsMin={30}
          className={innerClasses.textarea}
          value={log ?? ''}
        />
        <FormControlLabel
          label="Disable AutoScroll"
          control={
            <Checkbox
              checked={isAutoScrollEnabled}
              onChange={e => setAutoScrollEnabled(e.target.checked)}
              color="primary"
            />
          }
        />
      </main>
    </>
  );
};
