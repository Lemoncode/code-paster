import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, typography, spacing } = theme;

export const appbarContainer = css`
  width: 100%;
  height: ${spacing(80)};
  background-image: linear-gradient(60deg, red 19%, yellow 19%, white 80%);
`;
