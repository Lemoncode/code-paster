import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { StudentContainer } from './student.container';

interface Params {
  room: string;
}

describe('StudentComponent tests', () => {
  it('It should render the room name', () => {
    // Arrange
    const room = 'Room I';
    const expectedSessionName = `Session name: ${room}`;

    // Act
    render(<StudentContainer room={room}/>);

    // Assert
    const sessionName = screen.getByRole('heading');

    expect(sessionName).toHaveTextContent(expectedSessionName);
  });
});
