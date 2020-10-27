import * as React from 'react';
import { AppLayout } from 'layout';
import { PlayerContainer } from 'pods/student';

export const StudentScene = () => {
  React.useEffect(() => {
    document.title = `Student - Code Paster`;
  }, []);

  return (
    <AppLayout>
      <PlayerContainer />
    </AppLayout>
  );
};
