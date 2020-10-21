import React from 'react';
import { CreateSessionContainer } from 'pods/create-session';

export const CreateSessionScene: React.FC = () => {
  React.useEffect(() => {
    document.title = `Create New Session - Code Paster`;
  }, []);

  return <CreateSessionContainer />;
};
