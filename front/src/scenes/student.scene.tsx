import * as React from 'react';
import { SessionLayout } from 'layout';
import { PlayerContainer } from 'pods/student';

export const StudentScene = () => {
  React.useEffect(() => {
    document.title = `Student - Code Paster`;
  }, []);

  return (
    <SessionLayout>
      <PlayerContainer />
    </SessionLayout>
  );
};
