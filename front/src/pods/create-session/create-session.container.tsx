import React from 'react';
import { useHistory } from 'react-router-dom';
import { routes } from 'core/router';
import { CreateSessionComponent } from './create-session.component';
import { createRoom } from './components/test-runner-trainer.api';

export const CreateSessionContainer: React.FunctionComponent = () => {
  const history = useHistory();

  const handleCreateSession = async (): Promise<void> => {
    const response = await createRoom();
    const trainerUrl = routes.trainer(response.room, response.trainerToken);
    history.push(trainerUrl);
  };

  return (
    <>
      <CreateSessionComponent handleCreateSession={handleCreateSession} />
    </>
  );
};
