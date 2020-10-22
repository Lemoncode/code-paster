import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, typography, spacing } = theme;

export const headerContainer = css`
  width: 100%;
  margin-bottom: ${spacing(60)};
`;

export const inputField = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${spacing(20)};
`;

export const label = css`
  font-family: ${typography.fontFamily};
`;

export const inputIconContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

export const textArea = css`
  width: 90%;
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
  border: none;
  outline: none;
  &:focus {
    border: 1px solid ${palette.secondary.main};
    border-radius: 0.2rem;
  }
`;
