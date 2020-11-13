import React from 'react';
import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import { CreateSessionComponent } from './create-session.component';

describe('CreateSessionComponent unit tests', () => {
  it('should create a new session when clicking the create session button', () => {
    // Arrange

    const props = {
      handleCreateSession: jest.fn(),
    };

    // Act

    render(<CreateSessionComponent {...props} />);

    const createSessionButton = screen.getByRole('button');
    useEvent.click(createSessionButton);

    // Assert

    expect(props.handleCreateSession).toHaveBeenCalledTimes(1);
  })
});
