import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, typography, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const headerContainer = css`
  width: 100%;
  margin-top: ${spacing(7.5)};
  margin-bottom: ${spacing(10)};
`;

export const inputField = css`
  margin-bottom: ${spacing(3.75)};
  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const label = css`
  font-family: ${typography.fontFamily};
  font-size: 1.125rem;
  color: ${palette.text.primary};
`;

export const inputIconContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: ${spacing(1.25)};
`;

export const textArea = css`
  flex: 1;
  min-width: 0;
  margin-right: 0;
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
  @media (max-width: ${breakpoints.values.xs}px) {
    padding: ${spacing(2)};
    font-size: 0.875rem;
  }
`;

export const copyIcon = css`
  font-size: 1.875rem;
  @media (max-width: ${breakpoints.values.xs}px) {
    font-size: 1.625rem;
  }
`;

export const copyBtn = css`
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
