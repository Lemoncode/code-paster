import React from 'react';
import { CreateSessionComponent } from './create-session.component';
import { useHistory } from 'react-router-dom';

export const CreateSessionContainer: React.FunctionComponent = () => {
  const handleCreateSession = (): void => {
    console.log('handle working');
  };

  return (
    <>
      <CreateSessionComponent handleCreateSession={handleCreateSession} />
    </>
  );
};
