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
  width: 100%;
  margin-top: ${spacing(1.25)};
  margin-bottom: ${spacing(1.25)};
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

export const labelTextarea = css`
  display: block;
  font-family: ${typography.fontFamily};
  font-size: 1.125rem;
`;

export const sessionName = css`
  display: inline-block;
  margin-bottom: ${spacing(5)};
  padding-bottom: ${spacing(0.625)};
  font-size: 1.125rem;
  text-align: center;
  border-bottom: 2px solid ${color.primary};
`;
