import React from 'react';
import { AppbarComponent } from 'common-app';

export const AppLayout: React.FC = props => {
  return (
    <>
      <AppbarComponent />
      {props.children}
    </>
  );
};
