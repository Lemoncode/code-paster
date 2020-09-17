import { css } from 'emotion';

export const headerContainer = css`
  width: 100%;
  margin-bottom: 60px;
`;

export const inputField = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const label = css`
  font-family: 'Roboto', sans-serif;
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
    color: #ccc;
  }
  &:active {
    color: red;
  }
`;
