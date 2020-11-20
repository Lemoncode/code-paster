import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const appbarContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${spacing(86)};
  background-image: linear-gradient(
    60deg,
    white 250px,
    ${color.primary} 250px,
    white 90%
  );
  border-bottom: 2px solid ${color.secondary};
  @media (max-width: ${breakpoints.values.sm}px) {
    height: auto;
    min-height: ${spacing(86)};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(60deg, white, white);
  }
`;

export const logo = (showLinks: boolean): string => css`
  margin-top: ${spacing(5)};
  height: ${spacing(60)};
  fill: ${color.secondary};
  margin-left: 2.4rem;
  @media (max-width: ${breakpoints.values.sm}px) {
    margin-left: 0;
    margin-top: ${showLinks ? '1.5rem' : '0'};
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
  margin-right: 1.5rem;
  overflow: hidden;
  &:last-of-type {
    margin-right: 2.4rem;
    @media (max-width: ${breakpoints.values.sm}px) {
      margin-right: 0;
    }
  }
`;

export const link = css`
  font-size: 1.1rem;
  margin-top: 0.2rem;
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: ${color.secondary};
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  &:hover {
    padding-bottom: 3px;
    border-bottom: 2px solid ${color.alertLight};
    color: ${color.alertLight};
  }
`;
