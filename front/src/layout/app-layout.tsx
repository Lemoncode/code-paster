import React from 'react';
import { AppbarComponent, FooterComponent } from 'common-app';

export const AppLayout: React.FC = props => {
  return (
    <>
      <AppbarComponent showLinks={true} />
      {props.children}
      <FooterComponent showLinks={true} />
    </>
  );
};
