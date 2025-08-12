import { css } from '@emotion/css';
import { theme } from 'core/theme';

const { palette, spacing, typography, breakpoints } = theme;
const color = palette.customPalette;

export const root = css`
  display: grid;
  gap: 1rem;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    'label label'
    'textEditor textEditor'
    'undo send'
    'autoScroll autoScroll';
`;

export const label = css`
  grid-area: label;
  font-size: 1.125rem;
  font-family: ${typography.fontFamily};
`;

export const textEditor = css`
  grid-area: textEditor;
  box-sizing: border-box;
  font-family: ${typography.fontFamily};
  font-size: 1rem;
  background-color: ${color.background};
  white-space: pre-wrap;
  resize: none;
  &:focus {
    outline: none;
  }
`;

export const sendButton = css`
  grid-area: send;
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 1.188rem;
  font-weight: 400;
  text-transform: capitalize;
  padding: ${spacing(1.25)} ${spacing(1.875)};
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
  display: none;
  @media (min-width: ${breakpoints.values.xs}px) {
    display: initial;
  }
`;

export const undoButton = css`
  grid-area: undo;
  display: flex;
  align-items: center;
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
  display: none;
  @media (min-width: ${breakpoints.values.xs}px) {
    display: initial;
  }
`;

export const autoScroll = css`
  grid-area: autoScroll;
`;
