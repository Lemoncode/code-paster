import { css } from 'emotion';
import { theme } from 'core/theme';
const { typography, spacing, palette } = theme;

export const mainContainer = css`
  width: 60%;
  margin: ${spacing(80)} auto;
`;

export const studentBoard = css`
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  margin-bottom: ${spacing(10)};
  margin-top: ${spacing(10)};
  padding: ${spacing(16)};
  font-family: ${typography.fontFamily};
  background-color: ${palette.background.paper};
  resize: none;
  border: 2px solid ${palette.text.primary};
  &:focus {
    outline: none;
  }
`;

export const labelTextarea = css`
  display: block;
  font-size: 18px;
  font-family: ${typography.fontFamily};
`;

export const sessionName = css`
  font-size: 18px;
  margin-bottom: ${spacing(40)};
  padding-bottom: 5px;
  border-bottom: 2px solid #d9d900;
  display: inline-block;
`;
