import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewTextComponent } from './new-text.component';

describe('NewTextComponent unit tests', () => {
  it('should handle the entered text when clicking on the send button', async () => {
    // Arrange
    const handleAppendTrainerText = jest.fn();

    // Act
    render(
      <NewTextComponent handleAppendTrainerText={handleAppendTrainerText} />
    );

    const inputText = screen.getByRole('textbox');
    const sendButton = screen.getByRole('button');

    await userEvent.type(inputText, 'Test text');
    await userEvent.click(sendButton);

    // Assert
    expect(handleAppendTrainerText).toHaveBeenCalledTimes(1);
  });

  it('should handle the entered text when pressing Ctrl + enter', async () => {
    // Arrange
    const handleAppendTrainerText = jest.fn();

    // Act
    render(
      <NewTextComponent handleAppendTrainerText={handleAppendTrainerText} />
    );

    const inputText = screen.getByRole('textbox');

    await userEvent.type(inputText, 'Test text{Control>}{Enter}{/Control}');

    // Assert
    expect(handleAppendTrainerText).toHaveBeenCalledTimes(1);
  });

  it('should not handle any text when there is not entered text and clicking on the send button', async () => {
    // Arrange
    const handleAppendTrainerText = jest.fn();

    // Act
    render(
      <NewTextComponent handleAppendTrainerText={handleAppendTrainerText} />
    );

    const sendButton = screen.getByRole('button');

    await expect(() => userEvent.click(sendButton)).rejects.toThrow(
      /pointer-events: none/
    );
  });

  it('should not handle any text when there is not entered text and pressing Ctrl + enter', async () => {
    // Arrange
    const handleAppendTrainerText = jest.fn();

    // Act
    render(
      <NewTextComponent handleAppendTrainerText={handleAppendTrainerText} />
    );

    const inputText = screen.getByRole('textbox');

    await userEvent.type(inputText, '{Control>}{Enter}{/Control}');

    // Assert
    expect(handleAppendTrainerText).not.toHaveBeenCalled();
  });
});
