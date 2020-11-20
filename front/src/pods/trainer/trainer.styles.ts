import { css } from 'emotion';
import { theme } from 'core/theme';

const { breakpoints, palette } = theme;
const color = palette.customPalette;

export const mainContainer = css`
  width: 100%;
`;

export const backgroundContainer = css`
  border-bottom: 1px solid ${color.greyMedium};
`;

export const content = css`
  width: 60%;
  margin: 0px auto 0 auto;
  @media (max-width: ${breakpoints.values.md}px) {
    width: 80%;
  }
`;
