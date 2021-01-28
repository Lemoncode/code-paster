import React from 'react';
import * as classes from './student.styles';
// Material UI ~ components
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {
  room: string;
  log: string;
}

export const StudentComponent: React.FC<Props> = props => {
  const { room, log } = props;
  const { mainContainer, sessionName, studentBoard, labelTextarea } = classes;

  const [autoScroll, setAutoScroll] = React.useState(false);

  const textAreaRef = React.useRef(null);

  React.useEffect(() => {
    if (!autoScroll)
      textAreaRef.current.scrollTop = textAreaRef.current.scrollHeight;
  }, [log]);

  return (
    <>
      <main className={mainContainer}>
        <Typography className={sessionName} variant="body1" role="heading">
          Session name: {room ?? ''}
        </Typography>
        <label className={labelTextarea} htmlFor="session">
          Content
        </label>
        <TextareaAutosize
          ref={textAreaRef}
          id="session"
          rowsMax={30}
          rowsMin={30}
          className={studentBoard}
          value={log ?? ''}
        />
        <FormControlLabel
          label="Disable AutoScroll"
          control={
            <Checkbox
              checked={autoScroll}
              onChange={e => setAutoScroll(e.target.checked)}
              color="primary"
            />
          }
        />
      </main>
    </>
  );
};
