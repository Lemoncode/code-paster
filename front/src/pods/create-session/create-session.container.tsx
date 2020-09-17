import React from 'react';
import { baseApiUrl } from 'core';
import { routes } from 'core/router';
import { CreateSessionComponent } from './create-session.component';

export const CreateSessionContainer: React.FunctionComponent = () => {
  const handleCreateSession = (): void => {
    // Crear contraseñas de las sesiones para trainer y student
    // Navegar hasta la url del trainer
    const trainerUrl = `${baseApiUrl}/#${routes.trainer('token1', 'token2')}`;
    const studentUrl = `${baseApiUrl}/#${routes.student('token1')}`;
    console.log(studentUrl);
  };

  return (
    <>
      <CreateSessionComponent handleCreateSession={handleCreateSession} />
    </>
  );
};
