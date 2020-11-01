import { css } from 'emotion';
import { theme } from 'core/theme';
const { typography, spacing, palette } = theme;

export const mainContainer = css`
  width: 60%;
  margin: ${spacing(40)} auto 0 auto;
`;

export const studentBoard = css`
  box-sizing: border-box;
  width: 100%;
  margin-top: ${spacing(10)};
  margin-bottom: ${spacing(10)};
  padding: ${spacing(10)};
  //font-family: ${typography.fontFamily};
  //background-color: ${palette.background.paper};
  resize: none;
  border-radius: ${spacing(4)};
  border: 1px solid ${palette.primary.main};
  &:focus {
    outline-color: ${palette.secondary.main};
  }
`;

export const labelTextarea = css`
  font-family: ${typography.fontFamily};
`;

export const sessionName = css`
  margin-bottom: ${spacing(20)};
`;
