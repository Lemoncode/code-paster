import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, spacing, typography } = theme;

export const sessionContainer = css`
  padding-top: ${spacing(60)};
  padding-bottom: ${spacing(80)};
`;

export const studentBoard = css`
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  white-space: nowrap;
  margin-bottom: ${spacing(10)};
  margin-top: ${spacing(10)};
  padding: ${spacing(16)};
  font-family: ${typography.fontFamily};
  background-color: ${palette.background.paper};
  resize: none;
  border: 2px solid ${palette.text.primary};
  &:focus {
    outline: none;
  }
`;

export const btnContainer = css`
  margin-top: 10px;
  display: flex;
  padding-bottom: 25px;
  border-bottom: 2px solid #ccc;
`;

export const sendBtn = css`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 400;
  flex: 1;
  border-radius: 0;
  padding: 10px 15px;
  font-size: 19px;
  background-color: white;
  border: 2px solid #11ae64;
  color: #11ae64;
  transition: all 0.2s;
  &:hover,
  &:active {
    background-color: #11ae64;
    border: 2px solid #11ae64;
    color: white;
    outline: none;
  }
  @media (max-width: 380px) {
    background-color: #11ae64;
    color: white;
    border: none;
  }
  &:hover,
  &:active {
    background-color: #0f834c;
    border: none;
  }
`;

export const sendIcon = css`
  font-size: 20px;
  margin-left: 10px;
  @media (max-width: 380px) {
    display: none;
  }
`;

export const undoBtn = css`
  display: flex;
  align-items: center;
  text-transform: capitalize;
  font-weight: 400;
  font-size: 19px;
  border-radius: 0;
  padding: 10px 15px;
  margin-right: 10px;
  background-color: white;
  border: 2px solid rgb(255, 87, 51);
  color: rgb(255, 87, 51);
  transition: all 0.2s;
  &:hover,
  &:active {
    background-color: rgb(255, 87, 51);
    border: 2px solid rgb(255, 87, 51);
    color: white;
    outline: none;
  }
  @media (max-width: 380px) {
    background-color: rgb(255, 87, 51);
    color: white;
    border: none;
  }
  &:hover,
  &:active {
    background-color: rgb(207, 70, 41);
    border: none;
  }
`;

export const undoIcon = css`
  font-size: 20px;
  margin-right: 10px;
  @media (max-width: 380px) {
    display: none;
  }
`;

export const labelTextarea = css`
  display: block;
  font-size: 18px;
  font-family: ${typography.fontFamily};
`;
