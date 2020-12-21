import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, typography, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const root = css`
  display: grid;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
`;

export const label = css`
  font-family: ${typography.fontFamily};
  font-size: 1.125rem;
  color: ${palette.text.primary};
`;

export const inputContainer = css`
  display: flex;
  flex-direction: row;
`;

export const input = css`
  flex: 1;
  padding: ${spacing(2.25)};
  font-family: ${typography.fontFamily};
  font-size: 1rem;
  color: ${color.secondary};
  border: 2px solid ${color.greyMedium};
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  &:hover,
  &:active,
  &:focus {
    border: 2px solid ${color.greyMedium};
    outline: none;
  }
  &::selection {
    background: ${color.greyMedium};
  }
`;

export const icon = css`
  font-size: 1.875rem;
`;

export const button = css`
  width: ${spacing(7.375)};
  height: ${spacing(7.375)};
  background-color: ${color.background};
  border-right: 2px solid ${color.greyMedium};
  border-top: 2px solid ${color.greyMedium};
  border-bottom: 2px solid ${color.greyMedium};
  border-left: none;
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  outline: none;
  &:hover {
    cursor: pointer;
    background-color: ${color.greyMedium};
  }
  &:active {
    background-color: ${color.background};
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    width: ${spacing(6.5)};
    height: ${spacing(6.5)};
  }
`;
