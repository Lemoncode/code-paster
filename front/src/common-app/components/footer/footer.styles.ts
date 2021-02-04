import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const footerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${color.secondary};
`;

export const logoContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const bottomContainer = css`
  display: flex;
  justify-content: space-between;
  padding: ${spacing(3)};
  border-top: 1px solid ${color.primary};
  @media (max-width: ${breakpoints.values.xs}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const lemoncodeIcon = css`
  max-width: 100px;
  padding: ${spacing(3)} 0;
`;

export const iconContainer = css`
  display: flex;
  justify-content: space-between;
  width: 50%;
  margin: 0;
  padding: 0 0 ${spacing(1)};
  list-style: none;
  @media (min-width: ${breakpoints.values.sm}px) {
    width: 20%;
  }
  @media (min-width: ${breakpoints.values.lg}px) {
    width: 10%;
  }
`;

export const icon = css`
  font-size: 1.5rem;
  color: ${color.greyLight};
  &:hover {
    cursor: pointer;
    color: ${color.primary};
  }
`;

export const githubIcon = css`
  height: ${spacing(2.75)};
  fill: ${color.greyLight};
  &:hover {
    cursor: pointer;
    fill: ${color.primary};
  }
`;

export const copyright = css`
  color: ${color.greyLight};
  @media (max-width: ${breakpoints.values.xs}px) {
    margin-top: ${spacing(0.8)};
  }
`;
