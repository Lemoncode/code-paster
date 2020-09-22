import * as React from 'react';
import * as classes from './trainer.styles';
import { HeaderComponent } from './components/header.component';
import { NewTextComponent } from './components/new-text.component';
import { SessionComponent } from './components/session.component';

interface Props {
  trainerText: string;
  setTrainerText: (text: string) => void;
  handleAppendTrainerText: () => void;
  currentTrainerUrl: string;
  currentStudentUrl: string;
  log: string;
  newTextValue: string;
  setNewTextValue: (text: string) => void;
}

export const TrainerComponent: React.FC<Props> = props => {
  const {
    setTrainerText,
    trainerText,
    handleAppendTrainerText,
    currentTrainerUrl,
    currentStudentUrl,
    log,
    newTextValue,
    setNewTextValue,
  } = props;

  const { mainContainer } = classes;

  return (
    <>
      <main className={mainContainer}>
        <HeaderComponent
          currentTrainerUrl={currentTrainerUrl}
          currentStudentUrl={currentStudentUrl}
        />
        <NewTextComponent
          setTrainerText={setTrainerText}
          trainerText={trainerText}
          handleAppendTrainerText={handleAppendTrainerText}
          newTextValue={newTextValue}
          setNewTextValue={setNewTextValue}
        />
        <SessionComponent log={log} />
      </main>
    </>
  );
};
