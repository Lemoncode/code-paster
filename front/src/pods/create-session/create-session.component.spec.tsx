import React from 'react';
import { render, screen } from '@testing-library/react';
import useEvent from '@testing-library/user-event';
import { CreateSessionComponent } from './create-session.component';

describe('CreateSessionComponent unit tests', () => {
  it('should show the elements with the expected roles', () => {
    // Arrange

    const props = {
      handleCreateSession: jest.fn(),
    };

    // Act

    render(<CreateSessionComponent {...props} />);

    const main = screen.getByRole('main');
    const button = screen.getByRole('button');
    const description = screen.getByText('The best tool for sharing code with your students!');

    // Assert

    expect(main).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Create Session');
    expect(description).toBeInTheDocument();
  });

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
  });
});
