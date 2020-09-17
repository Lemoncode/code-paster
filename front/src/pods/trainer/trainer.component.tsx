import * as React from 'react';
import { useParams } from 'react-router';
import { baseApiUrl } from 'core/const';
import { routes } from 'core/router/routes';
import * as classes from './trainer.styles';
import { HeaderComponent } from './components/header.component';
import { NewTextComponent } from './components/new-text.component';
import { SessionComponent } from './components/session.component';

interface Params {
  token: string;
  room: string;
}

export const TrainerComponent: React.FC = props => {
  const { token, room } = useParams<Params>();
  const currentTrainerUrl = `${baseApiUrl}/#${routes.trainer(room, token)}`;
  const currentStudentUrl = `${baseApiUrl}/#${routes.student(room)}`;

  const { mainContainer } = classes;

  return (
    <>
      <main className={mainContainer}>
        <HeaderComponent
          currentTrainerUrl={currentTrainerUrl}
          currentStudentUrl={currentStudentUrl}
        />
        <NewTextComponent />
        <SessionComponent />
      </main>
      {/* <h1>Trainer Component</h1>
      <Link to={routes.student('myroom')}>
        Create Session - Navigate to student page
      </Link> */}
    </>
  );
};
