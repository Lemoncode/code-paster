import React from 'react';
import * as classes from './create-session.styles';
// Material UI ~ components
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

interface Props {
  handleCreateSession: () => void;
}

export const CreateSessionComponent: React.FunctionComponent<Props> = props => {
  const { handleCreateSession } = props;
  const {
    mainContainer,
    buttonContainer,
    descriptionText,
    createSessionBtn,
    arrowIcon,
  } = classes;

  return (
    <>
      <main className={mainContainer}>
        <div className={buttonContainer}>
          <Typography variant="body1" className={descriptionText}>
            The best tool for sharing code with your students!
          </Typography>
          <button
            onClick={() => handleCreateSession()}
            className={createSessionBtn}
          >
            Create Session
            <ArrowRightAltIcon className={arrowIcon} />
          </button>
        </div>
      </main>
    </>
  );
};
