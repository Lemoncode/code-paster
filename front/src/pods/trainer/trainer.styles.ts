import { css } from 'emotion';
import { theme } from 'core/theme';

const { breakpoints, palette } = theme;
const color = palette.customPalette;

export const root = css`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  & > :nth-child(n) {
    padding: 1rem;
  }

  & > :last-child {
    padding-bottom: 2rem;
  }

  @media (min-width: ${breakpoints.values.md}px) {
    grid-template-columns: 1fr 6fr 1fr;
    & > :nth-child(n) {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }

  @media (min-width: ${breakpoints.values.lg}px) {
    grid-template-columns: 1fr 5fr 1fr;
  }
`;

export const divider = css`
  && {
    padding: 0;
    @media (min-width: ${breakpoints.values.md}px) {
      grid-column-start: 1;
      grid-column-end: 4;
    }
    border-top: 1px solid ${color.greyMedium};
  }
`;
