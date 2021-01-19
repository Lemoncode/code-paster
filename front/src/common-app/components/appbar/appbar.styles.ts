import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const appbarContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${spacing(10.75)};
  background-image: linear-gradient(
    60deg,
    white ${spacing(31.25)},
    ${color.primary} ${spacing(31.25)},
    white 90%
  );
  border-bottom: 2px solid ${color.secondary};
  @media (max-width: ${breakpoints.values.sm}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    min-height: ${spacing(10.75)};
    background-image: linear-gradient(
      60deg,
      ${color.background},
      ${color.background}
    );
  }
`;

export const logo = css`
  height: ${spacing(7.5)};
  margin-top: ${spacing(0.625)};
  margin-left: ${spacing(4.8)};
  fill: ${color.secondary};
  @media (max-width: ${breakpoints.values.sm}px) {
    margin-top: spacing(3);
    margin-left: 0;
  }
`;
