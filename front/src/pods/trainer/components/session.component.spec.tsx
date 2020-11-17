import React from 'react';
import {render, screen} from '@testing-library/react';
import { SessionComponent } from './session.component';
import userEvent from '@testing-library/user-event';

describe('SessionComponent unit tests', () => {
  it('should send the concatenation of the session saved text plus the entered one when clicking the send full content button', () => {
    // Arrange
    const props = {
      log: 'Hello! ',
      handleSendFullContentLog: jest.fn(),
    }
    const expectedSentText = 'Hello! How are you doing?';

    // Act

    render(<SessionComponent {...props} />);

    const textArea = screen.getByRole('textbox');
    const sendFullContentButton = screen.getAllByRole('button')[1];

    userEvent.type(textArea, 'How are you doing?');
    userEvent.click(sendFullContentButton);

    // Assert

    expect(props.handleSendFullContentLog).toHaveBeenCalledTimes(1);
    expect(props.handleSendFullContentLog).toHaveBeenCalledWith(expectedSentText);
  });

  it('should send the concatenation of the previous session text plus the entered one when clicking the send full content button', () => {
    // Arrange
    const props = {
      log: 'Hello! ',
      handleSendFullContentLog: jest.fn(),
    }
    const expectedSentText = 'Hello! How are you doing?';

    // Act

    render(<SessionComponent {...props} />);

    const textArea = screen.getByRole('textbox');
    const sendFullContentButton = screen.getAllByRole('button')[1];

    userEvent.type(textArea, 'How are you doing?');
    userEvent.click(sendFullContentButton);

    // Assert

    expect(props.handleSendFullContentLog).toHaveBeenCalledTimes(1);
    expect(props.handleSendFullContentLog).toHaveBeenCalledWith(expectedSentText);
  });

  it('should reset the session text to the original one when clicking the undo button', () => {
    // Arrange
    const props = {
      log: 'Hello! ',
      handleSendFullContentLog: jest.fn(),
    }
    const expectedSentText = 'Hello! ';

    // Act

    render(<SessionComponent {...props} />);

    const textArea = screen.getByRole('textbox');
    const undoButton = screen.getAllByRole('button')[0];

    userEvent.type(textArea, 'How are you doing?');
    undoButton.click();

    // Assert

    expect(textArea).toHaveValue(expectedSentText);
  });
});
