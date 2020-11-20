import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, typography, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const headerContainer = css`
  width: 100%;
  margin-bottom: ${spacing(10)};
  margin-top: ${spacing(7.5)};
`;

export const inputField = css`
  margin-bottom: ${spacing(3.75)};
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const label = css`
  color: ${palette.text.primary};
  font-size: 1.125rem;
  font-family: ${typography.fontFamily};
`;

export const inputIconContainer = css`
  margin-top: ${spacing(1.25)};
  display: flex;
  align-items: center;
  width: 100%;
`;

export const textArea = css`
  font-family: ${typography.fontFamily};
  min-width: 0;
  color: ${color.secondary};
  margin-right: 0;
  border: 2px solid ${color.greyMedium};
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  font-size: 1rem;
  padding: ${spacing(2.25)};
  flex: 1;
  &:hover,
  &:active,
  &:focus {
    border: 2px solid ${color.greyMedium};
    outline: none;
  }
  &::selection {
    background: ${color.greyMedium};
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    font-size: 0.875rem;
    padding: ${spacing(2)};
  }
`;

export const copyIcon = css`
  font-size: 1.875rem;
  @media (max-width: ${breakpoints.values.xs}px) {
    font-size: 1.625rem;
  }
`;

export const copyBtn = css`
  background-color: ${color.background};
  border-right: 2px solid ${color.greyMedium};
  border-top: 2px solid ${color.greyMedium};
  border-bottom: 2px solid ${color.greyMedium};
  border-left: none;
  outline: none;
  height: ${spacing(7.375)};
  width: ${spacing(7.375)};
  border-top-right-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;
  &:hover {
    cursor: pointer;
    background-color: ${color.greyMedium};
  }
  &:active {
    background-color: ${color.background};
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    height: ${spacing(6.5)};
    width: ${spacing(6.5)};
  }
`;
