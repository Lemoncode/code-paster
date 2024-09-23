import React from 'react';
import { useNavigate } from 'react-router-dom';
import { routes } from 'core/router';
import { CreateSessionComponent } from './create-session.component';
import { createRoom } from './api/create-session.api';

export const CreateSessionContainer: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const handleCreateSession = async (): Promise<void> => {
    const response = await createRoom();
    const trainerUrl = routes.trainer(response.room, response.trainerToken);
    navigate(trainerUrl);
  };

  return (
    <>
      <CreateSessionComponent handleCreateSession={handleCreateSession} />
    </>
  );
};
