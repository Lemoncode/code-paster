import React from 'react';
import { ReactComponent as CodePasterLogo } from 'assets/logo.svg';
import IconButton from '@material-ui/core/IconButton';
import * as classes from './appbar.styles';
import { useHistory } from 'react-router-dom';

export const AppbarComponent: React.FC = () => {
  const { appbarContainer, logo } = classes;
  const history = useHistory();
  const handleClick = () => history.push('/');

  return (
    <div className={appbarContainer}>
      <IconButton onClick={() => handleClick()}>
        <CodePasterLogo className={logo} />
      </IconButton>
    </div>
  );
};
