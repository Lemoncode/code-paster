import React from 'react';
import * as classes from './appbar.styles';

export const AppbarComponent: React.FC = () => {
  const { appbarContainer } = classes;
  return (
    <>
      <div className={appbarContainer}></div>
    </>
  );
};
