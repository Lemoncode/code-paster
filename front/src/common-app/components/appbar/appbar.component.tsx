import React from 'react';
import CodePasterLogo from 'assets/logo.svg';
import * as classes from './appbar.styles';

export const AppbarComponent: React.FC = () => {
  const { appbarContainer, logo } = classes;

  return (
    <div className={appbarContainer}>
      <CodePasterLogo className={logo} />
    </div>
  );
};
