import * as React from 'react';
import * as classes from './trainer.styles';
import { HeaderComponent } from './components/header.component';
import { NewTextComponent } from './components/new-text.component';
import { SessionComponent } from './components/session.component';

interface Props {
  handleAppendTrainerText: (trainerText: string) => void;
  currentTrainerUrl: string;
  currentStudentUrl: string;
  log: string;
}

export const TrainerComponent: React.FC<Props> = props => {
  const {
    handleAppendTrainerText,
    currentTrainerUrl,
    currentStudentUrl,
    log,
  } = props;

  const { mainContainer } = classes;

  return (
    <>
      <main className={mainContainer}>
        <HeaderComponent
          currentTrainerUrl={currentTrainerUrl}
          currentStudentUrl={currentStudentUrl}
        />
        <NewTextComponent handleAppendTrainerText={handleAppendTrainerText} />
        <SessionComponent log={log} />
      </main>
    </>
  );
};
