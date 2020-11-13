import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeaderComponent } from './header.component';

describe('HeaderComponent unit tests', () => {
  it('should show the trainer and the students links when passing valid values', () => {
    // Arrange
    const props = {
      currentTrainerUrl: 'http://current.trainer.url',
      currentStudentUrl: 'http://current.student.url',
    };

    // Act
    render(<HeaderComponent {...props} />);
    const linkCopyInputs = screen.getAllByRole('textbox');
    const linkCopyButtons = screen.getAllByRole('button');

    // Assert

    expect(linkCopyInputs.length).toBe(2);
    expect(linkCopyButtons.length).toBe(2);
    linkCopyInputs.forEach(input => expect(input).toHaveAttribute('readonly'));
    expect(linkCopyInputs[0]).toHaveValue(props.currentTrainerUrl);
    expect(linkCopyInputs[1]).toHaveValue(props.currentStudentUrl);
  });

  it('should show empty trainer and the students link when passing undefined values', () => {
    // Arrange
    const props = {
      currentTrainerUrl: undefined,
      currentStudentUrl: undefined,
    };

    // Act
    render(<HeaderComponent {...props} />);
    const linkCopyInputs = screen.getAllByRole('textbox');

    // Assert

    expect(linkCopyInputs[0]).toBeEmpty();
    expect(linkCopyInputs[1]).toBeEmpty();
  });

  it('should show empty trainer and the students link when passing null values', () => {
    // Arrange
    const props = {
      currentTrainerUrl: null,
      currentStudentUrl: null,
    };

    // Act
    render(<HeaderComponent {...props} />);
    const linkCopyInputs = screen.getAllByRole('textbox');

    // Assert

    expect(linkCopyInputs[0]).toBeEmpty();
    expect(linkCopyInputs[1]).toBeEmpty();
  });
});
