import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, typography, spacing } = theme;

export const newTextContainer = css`
  width: 100%;
  margin-bottom: 40px;
`;

export const labelTextarea = css`
  font-family: ${typography.fontFamily};
`;

export const editTextArea = css`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: ${spacing(10)};
  font-family: ${typography.fontFamily};
  background-color: ${palette.background.paper};
  resize: none;
  border-radius: ${spacing(4)};
  border: 1px solid ${palette.primary.main};
  &:focus {
    outline-color: ${palette.secondary.main};
  }
`;

export const sendBtn = css`
  width: 100%;
`;
