import React from 'react';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useAutoScroll } from 'common/hooks/auto-scroll.hook';
import { MarkdownViewer } from 'common/markdown-view/markdown-view';
import * as innerClasses from './student.styles';

interface Props {
  room: string;
  log: string;
  className?: string;
}

export const StudentComponent: React.FC<Props> = (props) => {
  const { room, log } = props;

  const { isAutoScrollEnabled, setIsAutoScrollEnabled, doAutoScroll } =
    useAutoScroll();

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
          <MarkdownViewer value={log ?? ''} className={innerClasses.textView} />
        </div>
        <FormControlLabel
          label="Enable AutoScroll"
          control={
            <Checkbox
              checked={isAutoScrollEnabled}
              onChange={(e) => setIsAutoScrollEnabled(e.target.checked)}
              color="primary"
            />
          }
        />
      </main>
    </>
  );
};
