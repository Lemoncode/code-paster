import React from 'react';
import { AppbarComponent, FooterComponent } from 'common-app';

export const SessionLayout: React.FC = props => {
  return (
    <>
      <AppbarComponent />
      {props.children}
      <FooterComponent />
    </>
  );
};
