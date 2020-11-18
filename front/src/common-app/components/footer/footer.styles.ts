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

  @media (max-width: 728px) {
    padding: ${spacing(20)} ${spacing(40)} ${spacing(30)} ${spacing(40)};
  }

  @media (max-width: 380px) {
    height: ${spacing(350)};
  }
`;

export const topContainer = css`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  height: ${spacing(195)};
  align-items: center;

  @media (max-width: 380px) {
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
  @media (max-width: 380px) {
    text-align: center;
    margin-top: 1.2rem;
  }
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

  @media (max-width: 380px) {
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
  @media (max-width: 380px) {
    margin-top: 0.4rem;
  }
`;
