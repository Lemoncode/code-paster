import React from 'react';
import * as classes from './create-session.styles';
// import { Link } from 'react-router-dom';
// import { routes } from 'core/router';
// import { TestRunnerTrainerComponent } from './components/test-runner-trainer.component';
// import { TestRunnerStudentComponent } from './components/test-runner-student.component';

// Material UI ~ components
import Button from '@material-ui/core/Button';

interface Props {
  handleCreateSession: () => void;
}

export const CreateSessionComponent: React.FunctionComponent<Props> = props => {
  const { handleCreateSession } = props;
  const { mainContainer, createSessionBtn } = classes;

  return (
    <>
      <main className={mainContainer}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleCreateSession()}
          className={createSessionBtn}
        >
          Create Session
        </Button>
      </main>
      {/* <h1>Create Session component</h1>
      <Link to={routes.trainer('myroom', 'mytrainertoken')}>
        Create Session - Navigate to trainer page
      </Link>

      <TestRunnerTrainerComponent />
      <TestRunnerStudentComponent /> */}
    </>
  );
};
