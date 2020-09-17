import * as React from 'react';
import { useContext } from 'core/context';
import { TrainerComponent } from './trainer.component';

export const TrainerContainer = () => {
  const { currentStudentUrl, currentTrainerUrl } = useContext();

  return (
    <TrainerComponent
      currentStudentUrl={currentStudentUrl}
      currentTrainerUrl={currentTrainerUrl}
    />
  );
};
