import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, typography, spacing } = theme;

export const footerContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${spacing(300)};
  padding: ${spacing(20)} ${spacing(100)};
  background-color: ${palette.text.primary};
`;

export const topContainer = css`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  height: ${spacing(195)};
  align-items: center;
`;

export const linkList = css`
  padding: 0;
  margin: 0;
  list-style: none;
`;

export const link = css`
  font-size: 1.1rem;
  color: #eee;
  text-decoration: none;
  &:hover {
    color: #d9d900;
  }
`;

export const bottomContainer = css`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #d9d900;
  padding-top: 1rem;
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
  color: #eee;
  font-size: 1.5rem;
  &:hover {
    cursor: pointer;
    color: #d9d900;
  }
`;

export const githubIcon = css`
  height: 22px;
  fill: #eee;
  &:hover {
    cursor: pointer;
    fill: #d9d900;
  }
`;

export const copyright = css`
  color: #eee;
`;
