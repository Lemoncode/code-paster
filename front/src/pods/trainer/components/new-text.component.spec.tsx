import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewTextComponent } from './new-text.component';
import { act } from 'react-dom/test-utils';

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

  it('should handle the entered text when pressing ctrl + enter', async () => {
    // Arrange
    const handleAppendTrainerText = jest.fn();

    // Act
    render(
      <NewTextComponent handleAppendTrainerText={handleAppendTrainerText} />
    );

    const inputText = screen.getByRole('textbox');

    await act(async () => userEvent.type(inputText, 'Test text{ctrl}{enter}{/ctrl}'));

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
