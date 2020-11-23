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
  font-family: ${typography.fontFamily};
  font-size: 1.125rem;
`;

export const editTextArea = css`
  box-sizing: border-box;
  width: 100%;
  margin-top: ${spacing(1.25)};
  margin-bottom: ${spacing(2.5)};
  padding: ${spacing(2)};
  font-family: ${typography.fontFamily};
  font-size: 1rem;
  background-color: ${color.background};
  border: 2px solid ${color.secondary};
  white-space: nowrap;
  resize: none;
  &:focus {
    border: 2px solid ${color.secondary};
    outline: none;
  }
`;

export const sendBtn = css`
  width: 100%;
  padding: ${spacing(1.25)} 0;
  font-size: 1.188rem;
  font-weight: 400;
  text-transform: capitalize;
  color: #fff;
  background-color: ${color.successLight};
  border-radius: 0;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  &:hover {
    color: #fff;
    background-color: ${color.successDark};
  }
`;

export const sendBtnDisabled = css`
  width: 100%;
  padding: ${spacing(1.25)} 0;
  font-size: 1.188rem;
  font-weight: 400;
  text-transform: capitalize;
  border-radius: 0;
  color: ${palette.grey[700]};
  background-color: ${palette.grey[300]};
  cursor: default;
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
  margin-left: ${spacing(1.25)};
  font-size: 1.25rem;
`;
