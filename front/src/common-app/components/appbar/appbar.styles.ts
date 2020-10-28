import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, typography, spacing } = theme;

export const appbarContainer = css`
  width: 100%;
  height: ${spacing(80)};
  background-image: linear-gradient(60deg, #2098d1 19%, #d9d900 19%, #eee 80%);
`;
