import { css } from '@emotion/css';
import { theme } from 'core/theme';

const { typography, spacing, palette, breakpoints } = theme;
const color = palette.customPalette;

export const root = css`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  padding: 1rem;

  @media (min-width: ${breakpoints.values.md}px) {
    padding: 2rem;
    grid-template-columns: 1fr 6fr 1fr;
    & > :nth-child(n) {
      grid-column-start: 2;
      grid-column-end: 3;
    }
  }

  @media (min-width: ${breakpoints.values.lg}px) {
    grid-template-columns: 1fr 4fr 1fr;
  }
`;

export const sessionName = css`
  @media (min-width: ${breakpoints.values.md}px) {
    justify-self: start;
  }
  font-size: 1.125rem;
  text-align: center;
  border-bottom: 2px solid ${color.primary};
`;

export const label = css`
  display: block;
  font-family: ${typography.fontFamily};
  font-size: 1.125rem;
`;

export const textView = css`
  width: 100%;
  height: 600px;
  overflow: auto;
  box-sizing: border-box;
  padding: ${spacing(2)};
  font-family: ${typography.fontFamily};
  font-size: 1rem;
  white-space: pre-wrap;
  resize: none;
  background-color: ${color.background};
  border: 2px solid ${color.secondary};
  &:focus {
    outline: none;
  }
`;
