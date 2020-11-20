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

export const btnContainer = css`
  margin-top: ${spacing(1.25)};
  display: flex;
  padding-bottom: ${spacing(3.125)};
  border-bottom: 2px solid ${color.greyMedium};
`;

export const sendBtn = css`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 400;
  flex: 1;
  border-radius: 0;
  padding: ${spacing(1.25)} ${spacing(1.875)};
  font-size: 1.188rem;
  background-color: white;
  border: 2px solid ${color.successLight};
  color: ${color.successLight};
  transition: all 0.2s;
  &:hover,
  &:active {
    background-color: ${color.successLight};
    border: 2px solid ${color.successLight};
    color: white;
    outline: none;
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    background-color: ${color.successLight};
    color: white;
    border: none;
    &:hover,
    &:active {
      background-color: ${color.successDark};
      border: none;
    }
  }
`;

export const sendIcon = css`
  font-size: 1.25rem;
  margin-left: ${spacing(1.25)};
  @media (max-width: ${breakpoints.values.xs}px) {
    display: none;
  }
`;

export const undoBtn = css`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.188rem;
  border-radius: 0;
  padding: ${spacing(1.25)} ${spacing(1.875)};
  margin-right: ${spacing(1.25)};
  background-color: white;
  border: 2px solid ${color.alertLight};
  color: ${color.alertLight};
  transition: all 0.2s;
  &:hover,
  &:active {
    background-color: ${color.alertLight};
    border: 2px solid ${color.alertLight};
    color: white;
    outline: none;
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    background-color: ${color.alertLight};
    color: white;
    border: none;
    &:hover,
    &:active {
      background-color: ${color.alertDark};
      border: none;
    }
  }
`;

export const undoIcon = css`
  font-size: 1.25rem;
  margin-right: ${spacing(1.25)};
  @media (max-width: ${breakpoints.values.xs}px) {
    display: none;
  }
`;

export const labelTextarea = css`
  display: block;
  font-size: 1.125rem;
  font-family: ${typography.fontFamily};
`;
