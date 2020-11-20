import { css } from 'emotion';
import { theme } from 'core/theme';

const { typography, spacing, palette, breakpoints } = theme;
const color = palette.customPalette;

export const mainContainer = css`
  width: 60%;
  margin: ${spacing(80)} auto;
  @media (max-width: ${breakpoints.values.lg}px) {
    width: 80%;
  }
`;

export const studentBoard = css`
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  white-space: nowrap;
  margin-bottom: ${spacing(10)};
  margin-top: ${spacing(10)};
  padding: ${spacing(16)};
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
  font-size: 18px;
  font-family: ${typography.fontFamily};
`;

export const sessionName = css`
  font-size: 18px;
  text-align: center;
  margin-bottom: ${spacing(40)};
  padding-bottom: 5px;
  border-bottom: 2px solid ${color.primary};
  display: inline-block;
`;
