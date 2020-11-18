import { css } from 'emotion';
import { theme } from 'core/theme';
import background from 'assets/bg-create-session.png';

const { spacing, breakpoints, palette } = theme;

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
  @media screen and (max-width: 960px) {
    background-image: none;
  }

  @media (max-width: 578px) {
    height: calc(100vh - ${spacing(147)});
    width: 90%;
    margin: 0 auto;
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
  @media (max-width: 960px) {
    margin-left: auto;
  }
`;

export const descriptionText = css`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;

  @media (max-width: 578px) {
    font-size: 1.6rem;
  }
  @media (max-width: 380px) {
    font-size: 1.5rem;
  }
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
  &:hover,
  &:active {
    cursor: pointer;
    background-size: 100% 100%;
    color: white;
    outline: none;
  }
  @media (max-width: 578px) {
    color: white;
    background: none;
    background-color: rgb(255, 87, 51);
    border: none;
    &:hover,
    &:active {
      background-color: ${palette.text.primary};
      outline: none;
    }
  }
  @media (max-width: 380px) {
    padding: ${spacing(20)} ${spacing(24)};
    font-size: 1.2rem;
  }
`;

export const arrowIcon = css`
  margin-left: 0.8rem;
  font-size: 2rem;
  @media (max-width: 380px) {
    font-size: 1.6rem;
  }
`;
