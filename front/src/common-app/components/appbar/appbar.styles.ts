import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const appbarContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${spacing(10.75)};
  background-image: linear-gradient(
    60deg,
    white ${spacing(31.25)},
    ${color.primary} ${spacing(31.25)},
    white 90%
  );
  border-bottom: 2px solid ${color.secondary};
  @media (max-width: ${breakpoints.values.sm}px) {
    height: auto;
    min-height: ${spacing(10.75)};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(
      60deg,
      ${color.background},
      ${color.background}
    );
  }
`;

export const logo = (showLinks: boolean): string => css`
  margin-top: ${spacing(0.625)};
  height: ${spacing(7.5)};
  fill: ${color.secondary};
  margin-left: ${spacing(4.8)};
  @media (max-width: ${breakpoints.values.sm}px) {
    margin-left: 0;
    margin-top: ${showLinks ? spacing(3) : 0};
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
  font-size: ${spacing(2.2)};
  margin-top: ${spacing(0.4)};
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: ${color.secondary};
  padding-bottom: ${spacing(0.4)};
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  &:hover {
    padding-bottom: ${spacing(0.375)};
    border-bottom: 2px solid ${color.alertLight};
    color: ${color.alertLight};
  }
`;
