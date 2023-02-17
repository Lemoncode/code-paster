import { css } from '@emotion/css';
import { theme } from 'core/theme';
import background from 'assets/bg-create-session.png';

const { spacing, breakpoints, palette } = theme;
const color = palette.customPalette;

export const mainContainer = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(100vh - ${spacing(10.75)});
  margin: 0;
  padding: 0;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right bottom;
  @media (max-width: ${breakpoints.values.lg}px) {
    background-image: none;
  }
  @media (max-width: ${breakpoints.values.sm}px) {
    width: 90%;
    height: calc(100vh - ${spacing(18.375)});
    margin: 0 auto;
  }
`;

export const buttonContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${spacing(50)};
  margin-left: 15%;
  @media (max-width: ${breakpoints.values.lg}px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const descriptionText = css`
  text-align: center;
  font-size: 1.8rem;
  font-weight: 400;
  @media (max-width: ${breakpoints.values.sm}px) {
    font-size: 1.6rem;
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    font-size: 1.5rem;
  }
`;

export const createSessionBtn = css`
  display: flex;
  align-items: center;
  margin-top: ${spacing(4)};
  padding: ${spacing(2.5)} ${spacing(3.75)};
  text-transform: capitalize;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${color.alertLight};
  background: linear-gradient(
    to right,
    ${color.alertLight},
    ${color.alertLight}
  );
  background-repeat: no-repeat;
  background-size: 0 100%;
  transition: all 0.4s 0s;
  border: 2px solid ${color.alertLight};
  &:hover,
  &:active {
    cursor: pointer;
    background-size: 100% 100%;
    color: white;
    outline: none;
  }
  @media (max-width: ${breakpoints.values.sm}px) {
    color: white;
    background: none;
    background-color: ${color.alertLight};
    border: none;
    &:hover,
    &:active {
      background-color: ${color.secondary};
      outline: none;
    }
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    padding: ${spacing(2.5)} ${spacing(3)};
    font-size: 1.2rem;
  }
`;

export const arrowIcon = css`
  margin-left: ${spacing(1.6)};
  font-size: 2rem;
  @media (max-width: ${breakpoints.values.xs}px) {
    font-size: 1.6rem;
  }
`;
