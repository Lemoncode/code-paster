import { css } from 'emotion';

export const mainContainer = css`
  width: 60%;
  margin: 40px auto 0 auto;
`;

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

export const editTextArea = css`
  box-sizing: border-box;
  width: 100%;
  margin-bottom: 10px;
  margin-top: 10px;
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  resize: none;
`;

export const sendBtn = css`
  width: 100%;
`;

export const newTextContainer = css`
  width: 100%;
  margin-bottom: 40px;
`;

export const studentBoard = css`
  box-sizing: border-box;
  width: 100%;
  margin-top: 10px;
  padding: 5px;
  font-family: 'Roboto', sans-serif;
  resize: none;
`;

export const labelTextarea = css`
  font-family: 'Roboto', sans-serif;
`;
