import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, typography, spacing } = theme;

export const newTextContainer = css`
  width: 100%;
  margin-top: ${spacing(60)};
  margin-bottom: 40px;
  margin-bottom: ${spacing(80)};
`;

export const labelTextarea = css`
  font-size: 18px;
  font-family: ${typography.fontFamily};
`;

export const editTextArea = css`
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  margin-bottom: ${spacing(20)};
  margin-top: ${spacing(10)};
  padding: ${spacing(16)};
  font-family: ${typography.fontFamily};
  background-color: ${palette.background.paper};
  resize: none;
  border: 2px solid ${palette.text.primary};
  &:focus {
    border: 2px solid ${palette.text.primary};
    outline: none;
  }
`;

export const sendBtn = css`
  background-color: #11ae64;
  color: white;
  text-transform: capitalize;
  font-weight: 400;
  border-radius: 0;
  padding: 10px 0;
  font-size: 19px;
  width: 100%;
  transition: all 0.2s;
  &:hover {
    background-color: #0f834c;
    color: white;
  }
`;

export const sendBtnDisabled = css`
  text-transform: capitalize;
  font-weight: 400;
  font-size: 19px;
  border-radius: 0;
  padding: 10px 0;
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
  font-size: 20px;
  margin-left: 10px;
`;
