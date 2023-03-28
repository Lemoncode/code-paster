import { css } from '@emotion/css';
import { theme } from 'core/theme';

const { palette, spacing, typography, breakpoints } = theme;
const color = palette.customPalette;

// export const root = css`
//   display: grid;
//   grid-row-gap: 1rem;
//   grid-column-gap: 1rem;
//   grid-template-columns: auto 1fr;
//   grid-template-areas:
//     'label label'
//     'textarea textarea'
//     'undo send';
// `;

export const root = css`
  display: flex;
  flex-direction: column;
  
`;

export const label = css`
  grid-area: label;
  display: block;
  font-size: 1.125rem;
  font-family: ${typography.fontFamily};
`;

export const textarea = css`
  grid-area: textarea;
  box-sizing: border-box;
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

export const sendButton = css`
  grid-area: send;
  display: flex;
  align-items: center;
  padding: ${spacing(1.25)} ${spacing(1.875)};
  margin: 10px;
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
  margin: 10px;
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
