import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { StudentComponent } from './student.component';

describe('StudentComponent tests', () => {
  it('It should show the session name and the text when passing valid parameters', () => {
    // Arrange
    const props = {
      room: 'Room I',
      log: 'This is test',
    };

    const expectedSessionNameText = `Session name: ${props.room}`;

    // Act
    render(<StudentComponent {...props} />);

    // Assert
    const sessionName = screen.getByRole('heading');
    const textArea = screen.getByRole('textbox');

    expect(sessionName).toHaveTextContent(expectedSessionNameText);
    expect(textArea).toHaveValue(props.log);
  });

  it('It should show an empty session name when passing an undefined room value', () => {
    // Arrange
    const props = {
      room: undefined,
      log: 'This is test',
    };

    const expectedSessionNameText = `Session name:`;

    // Act
    render(<StudentComponent {...props} />);

    // Assert
    const sessionName = screen.getByRole('heading');
    expect(sessionName).toHaveTextContent(expectedSessionNameText);
  });

  it('It should show an empty session name when passing a null room value', () => {
    // Arrange
    const props = {
      room: null,
      log: 'This is test',
    };

    const expectedSessionNameText = `Session name:`;

    // Act
    render(<StudentComponent {...props} />);

    // Assert
    const sessionName = screen.getByRole('heading');

    expect(sessionName).toHaveTextContent(expectedSessionNameText);
  });

  it('It should show an empty text when passing an undefined log value', () => {
    // Arrange
    const props = {
      room: 'Room I',
      log: undefined,
    };

    // Act
    render(<StudentComponent {...props} />);

    // Assert
    const textArea = screen.getByRole('textbox');
    expect(textArea).toHaveTextContent('');
  });

  it('It should show an empty text when passing a null log value', () => {
    // Arrange
    const props = {
      room: 'Room I',
      log: null,
    };

    // Act
    render(<StudentComponent {...props} />);

    // Assert
    const textArea = screen.getByRole('textbox');
    expect(textArea).toHaveTextContent('');
  });
});
