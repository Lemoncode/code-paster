import { css } from 'emotion';
import { theme } from 'core/theme';

const { typography, spacing, palette, breakpoints } = theme;
const color = palette.customPalette;

export const downloadButton = css`
  grid-area: span;
  display: flex;
  align-items: center;
  padding: ${spacing(1.25)} ${spacing(1.875)};
  font-size: 1.188rem;
  font-weight: 400;
  text-transform: capitalize;
  color: ${color.primary};
  background-color: white;
  border-radius: 0;
  border: 2px solid ${color.primary};
  transition: all 0.2s;
  &:hover,
  &:active {
    color: white;
    background-color: ${color.primary};
    border: 2px solid ${color.primary};
    outline: none;
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    color: white;
    background-color: ${color.primary};
    border: none;
    &:hover,
    &:active {
      background-color: ${color.primary};
      border: none;
    }
  }
`;

export const downloadIcon = css`
  margin-right: ${spacing(1.25)};
  font-size: 1.25rem;
  display: none;
  @media (min-width: ${breakpoints.values.xs}px) {
    display: initial;
  }
`;
