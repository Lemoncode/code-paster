import { css } from 'emotion';
import { theme } from 'core/theme';

const { typography, spacing, palette, breakpoints } = theme;
const color = palette.customPalette;

export const mainContainer = css`
  width: 60%;
  margin: ${spacing(10)} auto;
  @media (max-width: ${breakpoints.values.lg}px) {
    width: 80%;
  }
`;

export const studentBoard = css`
  box-sizing: border-box;
  font-size: 1rem;
  width: 100%;
  white-space: nowrap;
  margin-bottom: ${spacing(1.25)};
  margin-top: ${spacing(1.25)};
  padding: ${spacing(2)};
  font-family: ${typography.fontFamily};
  background-color: ${color.background};
  resize: none;
  border: 2px solid ${color.secondary};
  &:focus {
    outline: none;
  }
`;

export const labelTextarea = css`
  display: block;
  font-size: 1.125rem;
  font-family: ${typography.fontFamily};
`;

export const sessionName = css`
  font-size: 1.125rem;
  text-align: center;
  margin-bottom: ${spacing(5)};
  padding-bottom: ${spacing(0.625)};
  border-bottom: 2px solid ${color.primary};
  display: inline-block;
`;
