import { css } from '@emotion/css';
import { theme } from 'core/theme';

const { palette, typography, spacing } = theme;
const color = palette.customPalette;

export const root = css`
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;

export const label = css`
  font-family: ${typography.fontFamily};
  font-size: 1.125rem;
`;

export const textarea = css`
  box-sizing: border-box;
  padding: ${spacing(2)};
  font-family: ${typography.fontFamily};
  font-size: 1rem;
  background-color: ${color.background};
  border: 2px solid ${color.secondary};
  white-space: nowrap;
  resize: none;
  &:focus {
    border: 2px solid ${color.secondary};
    outline: none;
  }
`;

export const button = css`
  padding: ${spacing(1.25)} 0;
  font-size: 1.188rem;
  font-weight: 400;
  text-transform: capitalize;
  color: #fff;
  background-color: ${color.successLight};
  border-radius: 0;
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  &:hover {
    color: #fff;
    background-color: ${color.successDark};
  }
`;

export const buttonIcon = css`
  margin-left: ${spacing(1.25)};
  font-size: 1.25rem;
`;
