import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, typography, spacing } = theme;

export const headerContainer = css`
  width: 100%;
  margin-bottom: ${spacing(100)};
  margin-top: ${spacing(100)};
`;

export const inputField = css`
  margin-bottom: ${spacing(30)};
`;

export const label = css`
  color: red;
  font-size: 16px;
  margin-bottom: 100px;
  font-family: ${typography.fontFamily};
`;

export const inputIconContainer = css`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
`;

export const textArea = css`
  font-family: ${typography.fontFamily};
  border: 2px solid #999;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  font-size: 16px;
  padding: 18px;
  flex: 1;
`;

export const copyIcon = css`
  font-size: 30px;
  &:hover {
    color: ${palette.primary.dark};
  }
  &:active {
    color: ${palette.secondary.main};
  }
`;

export const copyBtn = css`
  background-color: ${palette.background.default};
  border-right: 2px solid #999;
  border-top: 2px solid #999;
  border-bottom: 2px solid #999;
  border-left: none;
  outline: none;
  height: 59px;
  width: 59px;
  border-top-right-radius: 0.2rem;
  border-bottom-right-radius: 0.2rem;
  &:focus {
    border: 1px solid ${palette.secondary.main};
    border-radius: 0.2rem;
  }
`;
