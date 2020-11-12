import * as React from 'react';
import { SessionLayout } from 'layout';
import { StudentContainer } from 'pods/student';
import { useParams } from 'react-router-dom';

interface Params {
  room: string;
}

export const StudentScene = () => {
  React.useEffect(() => {
    document.title = `Student - Code Paster`;
  }, []);
  const { room } = useParams<Params>();
  return (
    <SessionLayout>
      <StudentContainer room={room}/>
    </SessionLayout>
  );
};
