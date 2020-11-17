import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewTextComponent } from './new-text.component';

describe('NewTextComponent unit tests', () => {
  it('should handle the entered text when clicking on the send button', () => {
    // Arrange
    const handleAppendTrainerText = jest.fn();

    // Act
    render(
      <NewTextComponent handleAppendTrainerText={handleAppendTrainerText} />
    );

    const inputText = screen.getByRole('textbox');
    const sendButton = screen.getByRole('button');

    userEvent.type(inputText, 'Test text');
    userEvent.click(sendButton);

    // Assert
    expect(handleAppendTrainerText).toHaveBeenCalledTimes(1);
  });

  it('should not handle any text when there is not entered text and clicking on the send button', () => {
    // Arrange
    const handleAppendTrainerText = jest.fn();

    // Act
    render(
      <NewTextComponent handleAppendTrainerText={handleAppendTrainerText} />
    );

    const sendButton = screen.getByRole('button');

    userEvent.click(sendButton);

    // Assert
    expect(handleAppendTrainerText).not.toHaveBeenCalled();
  });
});
