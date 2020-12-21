import * as React from 'react';
import { HeaderComponent } from './components/header.component';
import { NewTextComponent } from './components/new-text.component';
import { SessionComponent } from './components/session.component';
import * as innerClasses from './trainer.styles';

interface Props {
  handleAppendTrainerText: (trainerText: string) => void;
  handleSendFullContentLog: (fullContent: string) => void;
  currentTrainerUrl: string;
  currentStudentUrl: string;
  log: string;
}

export const TrainerComponent: React.FC<Props> = props => {
  const {
    handleAppendTrainerText,
    handleSendFullContentLog,
    currentTrainerUrl,
    currentStudentUrl,
    log,
  } = props;

  return (
    <>
      <main className={innerClasses.root}>
        <HeaderComponent
          currentTrainerUrl={currentTrainerUrl}
          currentStudentUrl={currentStudentUrl}
        />
        <div className={innerClasses.divider} />
        <NewTextComponent handleAppendTrainerText={handleAppendTrainerText} />
        <div className={innerClasses.divider} />
        <SessionComponent
          log={log}
          handleSendFullContentLog={handleSendFullContentLog}
        />
      </main>
    </>
  );
};
