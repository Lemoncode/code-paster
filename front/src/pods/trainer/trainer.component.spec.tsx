import React from 'react';
import {render, screen } from '@testing-library/react';
import { TrainerComponent } from './trainer.component';

describe('TrainerComponent tests', () => {
  it('should render all the expected sub components', () => {
    // Arrange
    const props = {
      handleAppendTrainerText: (trainerText: string) => {},
      handleSendFullContentLog: (fullContent: string) => {},
      currentTrainerUrl: 'http://current.trainer.url',
      currentStudentUrl: 'http://current.student.url',
      log: 'This is the log',
    };

    // Act
    render(<TrainerComponent {...props} />);

    const trainerLink = screen.getByRole('textbox', {name: 'Trainer Link'});
    const sendButton = screen.getByRole('button', {name: 'Send'});
    const sendFullContentButton = screen.getByRole('button', {name: 'Send Full Content'});

    // Assert

    // <HeaderComponent> rendered
    expect(trainerLink).toBeInTheDocument();

    // <NewTextComponent> rendered
    expect(sendButton).toBeInTheDocument();

    // <SessionComponent> rendered
    expect(sendFullContentButton).toBeInTheDocument();
  });
});
