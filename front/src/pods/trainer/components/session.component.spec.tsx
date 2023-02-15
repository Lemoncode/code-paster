import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SessionComponent } from './session.component';

describe('SessionComponent unit tests', () => {
  it('should send the concatenation of the session saved text plus the entered one when clicking the send full content button', async () => {
    // Arrange
    const props = {
      log: 'Hello! ',
      handleSendFullContentLog: jest.fn(),
    };
    const expectedSentText = 'Hello! How are you doing?';

    // Act

    render(<SessionComponent {...props} />);

    const textArea = screen.getByRole('log');
    const sendFullContentButton = screen.getAllByRole('button')[1];

    await userEvent.type(textArea, 'How are you doing?');
    await userEvent.click(sendFullContentButton);

    // Assert

    expect(props.handleSendFullContentLog).toHaveBeenCalledTimes(1);
    expect(props.handleSendFullContentLog).toHaveBeenCalledWith(
      expectedSentText
    );
  });

  it('should send the concatenation of the previous session text plus the entered one when clicking the send full content button', async () => {
    // Arrange
    const props = {
      log: 'Hello! ',
      handleSendFullContentLog: jest.fn(),
    };
    const expectedSentText = 'Hello! How are you doing?';

    // Act

    render(<SessionComponent {...props} />);

    const textArea = screen.getByRole('log');
    const sendFullContentButton = screen.getAllByRole('button')[1];

    await userEvent.type(textArea, 'How are you doing?');
    await userEvent.click(sendFullContentButton);

    // Assert

    expect(props.handleSendFullContentLog).toHaveBeenCalledTimes(1);
    expect(props.handleSendFullContentLog).toHaveBeenCalledWith(
      expectedSentText
    );
  });

  it('should reset the session text to the original one when clicking the undo button', async () => {
    // Arrange
    const props = {
      log: 'Hello! ',
      handleSendFullContentLog: jest.fn(),
    };
    const expectedSentText = 'Hello! ';

    // Act

    render(<SessionComponent {...props} />);

    const textArea = screen.getByRole('log');
    const undoButton = screen.getAllByRole('button')[0];

    await userEvent.type(textArea, 'How are you doing?');
    await userEvent.click(undoButton);

    // Assert

    expect(textArea).toHaveValue(expectedSentText);
  });
});
