import React from 'react';
import { AppbarComponent, FooterComponent } from 'common-app';

interface Props {
  children: React.ReactNode;
}

export const SessionLayout: React.FC<Props> = (props) => {
  return (
    <>
      <AppbarComponent />
      {props.children}
      <FooterComponent />
    </>
  );
};
