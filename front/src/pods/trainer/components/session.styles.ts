import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, typography, breakpoints } = theme;
const color = palette.customPalette;

export const sessionContainer = css`
  padding-top: ${spacing(7.5)};
  padding-bottom: ${spacing(10)};
`;

export const studentBoard = css`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: ${spacing(1.25)};
  margin-top: ${spacing(1.25)};
  padding: ${spacing(2)};
  font-family: ${typography.fontFamily};
  font-size: 1rem;
  background-color: ${color.background};
  border: 2px solid ${color.secondary};
  white-space: pre-wrap;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const btnContainer = css`
  display: flex;
  margin-top: ${spacing(1.25)};
  padding-bottom: ${spacing(3.125)};
`;

export const sendBtn = css`
  display: flex;
  align-items: center;
  padding: ${spacing(1.25)} ${spacing(1.875)};
  flex: 1;
  font-size: 1.188rem;
  font-weight: 400;
  text-transform: capitalize;
  border-radius: 0;
  color: ${color.successLight};
  background-color: white;
  border: 2px solid ${color.successLight};
  transition: all 0.2s;
  &:hover,
  &:active {
    color: white;
    background-color: ${color.successLight};
    border: 2px solid ${color.successLight};
    outline: none;
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    color: white;
    background-color: ${color.successLight};
    border: none;
    &:hover,
    &:active {
      background-color: ${color.successDark};
      border: none;
    }
  }
`;

export const sendIcon = css`
  margin-left: ${spacing(1.25)};
  font-size: 1.25rem;
  @media (max-width: ${breakpoints.values.xs}px) {
    display: none;
  }
`;

export const undoBtn = css`
  display: flex;
  align-items: center;
  margin-right: ${spacing(1.25)};
  padding: ${spacing(1.25)} ${spacing(1.875)};
  font-size: 1.188rem;
  font-weight: 400;
  text-transform: capitalize;
  color: ${color.alertLight};
  background-color: white;
  border-radius: 0;
  border: 2px solid ${color.alertLight};
  transition: all 0.2s;
  &:hover,
  &:active {
    color: white;
    background-color: ${color.alertLight};
    border: 2px solid ${color.alertLight};
    outline: none;
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    color: white;
    background-color: ${color.alertLight};
    border: none;
    &:hover,
    &:active {
      background-color: ${color.alertDark};
      border: none;
    }
  }
`;

export const undoIcon = css`
  margin-right: ${spacing(1.25)};
  font-size: 1.25rem;
  @media (max-width: ${breakpoints.values.xs}px) {
    display: none;
  }
`;

export const labelTextarea = css`
  display: block;
  font-size: 1.125rem;
  font-family: ${typography.fontFamily};
`;
