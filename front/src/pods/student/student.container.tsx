import * as React from 'react';
import { useParams } from 'react-router-dom';
import { StudentComponent } from './student.component';

interface Params {
  room: string;
}

export const PlayerContainer = () => {
  const { room } = useParams<Params>();

  return (
    <>
      <StudentComponent room={room} />
    </>
  );
};
