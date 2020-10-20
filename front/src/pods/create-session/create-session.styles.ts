import { css } from 'emotion';
import { theme } from 'core/theme';
const { spacing } = theme;

export const mainContainer = css`
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: calc(100vh - ${spacing(16)});
`;

export const createSessionBtn = css`
  padding: ${spacing(20)} ${spacing(30)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
