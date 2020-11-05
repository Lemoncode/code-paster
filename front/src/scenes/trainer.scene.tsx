import React from 'react';
import { SessionLayout } from 'layout';
import { TrainerContainer } from 'pods/trainer';

export const TrainerScene: React.FC = () => {
  React.useEffect(() => {
    document.title = `Trainer - Code Paster`;
  }, []);

  return (
    <SessionLayout>
      <TrainerContainer />
    </SessionLayout>
  );
};
