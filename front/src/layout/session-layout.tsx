import React from 'react';
import { AppbarComponent, FooterComponent } from 'common-app';

export const SessionLayout: React.FC = props => {
  const [showLinks, setShowLinks] = React.useState<boolean>(false);
  return (
    <>
      <AppbarComponent showLinks={showLinks} />
      {props.children}
      <FooterComponent showLinks={showLinks} />
    </>
  );
};
