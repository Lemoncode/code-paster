import * as React from 'react';
import { PlayerContainer } from 'pods/student';

export const StudentScene = () => {
  React.useEffect(() => {
    document.title = `Student - Code Paster`;
  }, []);

  return <PlayerContainer />;
};
