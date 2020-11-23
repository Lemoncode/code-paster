import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const appbarContainer = css`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${spacing(10.75)};
  background-image: linear-gradient(
    60deg,
    white ${spacing(31.25)},
    ${color.primary} ${spacing(31.25)},
    white 90%
  );
  border-bottom: 2px solid ${color.secondary};
  @media (max-width: ${breakpoints.values.sm}px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: auto;
    min-height: ${spacing(10.75)};
    background-image: linear-gradient(
      60deg,
      ${color.background},
      ${color.background}
    );
  }
`;

export const logo = (showLinks: boolean): string => css`
  height: ${spacing(7.5)};
  margin-top: ${spacing(0.625)};
  margin-left: ${spacing(4.8)};
  fill: ${color.secondary};
  @media (max-width: ${breakpoints.values.sm}px) {
    margin-top: ${showLinks ? spacing(3) : 0};
    margin-left: 0;
  }
`;

export const navContainer = css`
  margin-left: auto;
  @media (max-width: ${breakpoints.values.sm}px) {
    margin-left: 0;
  }
`;

export const navList = css`
  display: flex;
  list-style: none;
  @media (max-width: ${breakpoints.values.sm}px) {
    padding: 0;
  }
`;

export const listItem = css`
  margin-right: ${spacing(3)};
  overflow: hidden;
  &:last-of-type {
    margin-right: ${spacing(4.8)};
    @media (max-width: ${breakpoints.values.sm}px) {
      margin-right: 0;
    }
  }
`;

export const link = css`
  position: relative;
  display: inline-block;
  margin-top: ${spacing(0.4)};
  padding-bottom: ${spacing(0.4)};
  font-size: 1.1rem;
  text-decoration: none;
  color: ${color.secondary};
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  &:hover {
    padding-bottom: ${spacing(0.375)};
    border-bottom: 2px solid ${color.alertLight};
    color: ${color.alertLight};
  }
`;
