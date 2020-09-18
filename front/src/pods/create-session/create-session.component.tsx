import React from 'react';
import * as classes from './create-session.styles';
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
    </>
  );
};
