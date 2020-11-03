import { css } from 'emotion';
import { theme } from 'core/theme';
import background from 'assets/bg-create-session.png';
const { spacing, breakpoints } = theme;

export const mainContainer = css`
  position: relative;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right bottom;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: calc(100vh - ${spacing(86)});
  @media screen and (max-width: ${breakpoints.values.md}px) {
    background-image: none;
  }
`;

export const buttonContainer = css`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15%;
  @media screen and (max-width: ${breakpoints.values.md}px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const descriptionText = css`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
`;

export const createSessionBtn = css`
  display: flex;
  align-items: center;
  color: rgb(255, 87, 51);
  padding: ${spacing(20)} ${spacing(30)};
  text-transform: capitalize;
  margin-top: 2rem;
  font-size: 1.4rem;
  font-weight: 400;
  background: linear-gradient(to right, rgb(255, 87, 51), rgb(255, 87, 51));
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: all 0.4s 0s;
  border: 2px solid rgb(255, 87, 51);

  &:hover {
    cursor: pointer;
    background-size: 100% 100%;
    color: white;
  }
`;

export const arrowIcon = css`
  margin-left: 0.8rem;
  font-size: 2rem;
`;
