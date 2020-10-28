import React from 'react';
import { TrainerContainer } from 'pods/trainer';
import { AppLayout } from 'layout';

export const TrainerScene: React.FC = () => {
  React.useEffect(() => {
    document.title = `Trainer - Code Paster`;
  }, []);

  return (
    <AppLayout>
      <TrainerContainer />
    </AppLayout>
  );
};
