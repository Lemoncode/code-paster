import React from 'react';
import { AppLayout } from 'layout';
import { CreateSessionContainer } from 'pods/create-session';

export const CreateSessionScene: React.FC = () => {
  React.useEffect(() => {
    document.title = `Create New Session - Code Paster`;
  }, []);

  return (
    <AppLayout>
      <CreateSessionContainer />
    </AppLayout>
  );
};
