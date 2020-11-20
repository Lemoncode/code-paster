import { css } from 'emotion';
import { theme } from 'core/theme';

const { palette, spacing, breakpoints } = theme;
const color = palette.customPalette;

export const footerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${spacing(300)};
  padding: ${spacing(20)} ${spacing(100)};
  background-color: ${color.secondary};
  @media (max-width: ${breakpoints.values.md}px) {
    padding: ${spacing(20)} ${spacing(40)} ${spacing(30)} ${spacing(40)};
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    height: ${spacing(350)};
  }
`;

export const topContainer = css`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  height: ${spacing(195)};
  align-items: center;
  @media (max-width: ${breakpoints.values.xs}px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    height: ${spacing(220)};
  }
`;

export const topContainerCenter = css`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${spacing(195)};
`;

export const linkList = css`
  padding: 0;
  margin: 0;
  list-style: none;
  @media (max-width: ${breakpoints.values.xs}px) {
    text-align: center;
    margin-top: 1.2rem;
  }
`;

export const link = css`
  font-size: 1.1rem;
  color: #eee;
  text-decoration: none;
  &:hover {
    color: ${color.primary};
  }
`;

export const bottomContainer = css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${color.primary};
  padding-top: 1rem;
  @media (max-width: ${breakpoints.values.xs}px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const lemoncodeIcon = css`
  height: 100px;
`;

export const iconContainer = css`
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const iconListItem = css`
  margin-right: 0.5rem;
  &:first-of-type {
    margin-right: 0.7rem;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const icon = css`
  color: ${color.greyLight};
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    color: ${color.primary};
  }
`;

export const githubIcon = css`
  height: 22px;
  fill: ${color.greyLight};
  &:hover {
    cursor: pointer;
    fill: ${color.primary};
  }
`;

export const copyright = css`
  color: ${color.greyLight};
  @media (max-width: ${breakpoints.values.xs}px) {
    margin-top: 0.4rem;
  }
`;
