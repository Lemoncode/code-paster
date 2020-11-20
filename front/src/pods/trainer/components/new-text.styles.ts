import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, typography, spacing } = theme;
const color = palette.customPalette;

export const newTextContainer = css`
  width: 100%;
  margin-top: ${spacing(7.5)};
  margin-bottom: ${spacing(5)};
  margin-bottom: ${spacing(10)};
`;

export const labelTextarea = css`
  font-size: 1.125rem;
  font-family: ${typography.fontFamily};
`;

export const editTextArea = css`
  box-sizing: border-box;
  font-size: 1rem;
  white-space: nowrap;
  width: 100%;
  margin-bottom: ${spacing(2.5)};
  margin-top: ${spacing(1.25)};
  padding: ${spacing(2)};
  font-family: ${typography.fontFamily};
  background-color: ${color.background};
  resize: none;
  border: 2px solid ${color.secondary};
  &:focus {
    border: 2px solid ${color.secondary};
    outline: none;
  }
`;

export const sendBtn = css`
  background-color: ${color.successLight};
  color: #fff;
  text-transform: capitalize;
  font-weight: 400;
  border-radius: 0;
  padding: ${spacing(1.25)} 0;
  font-size: 1.188rem;
  width: 100%;
  transition: all 0.2s;
  &:hover {
    background-color: ${color.successDark};
    color: #fff;
  }
`;

export const sendBtnDisabled = css`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.188rem;
  border-radius: 0;
  padding: ${spacing(1.25)} 0;
  color: ${palette.grey[700]};
  background-color: ${palette.grey[300]};
  cursor: default;
  width: 100%;
  opacity: 0.5;
  box-shadow: none;
  &:hover {
    color: ${palette.grey[700]};
    background-color: ${palette.grey[300]};
    box-shadow: none;
  }
  &:active {
    color: ${palette.grey[700]};
    background-color: ${palette.grey[300]};
    box-shadow: none;
  }
`;

export const sendIcon = css`
  font-size: 1.25rem;
  margin-left: ${spacing(1.25)};
`;
