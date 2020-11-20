import { css } from 'emotion';
import { theme } from 'core/theme';
import background from 'assets/bg-create-session.png';

const { spacing, breakpoints, palette } = theme;
const color = palette.customPalette;

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
  height: calc(100vh - ${spacing(10.75)});
  @media (max-width: ${breakpoints.values.lg}px) {
    background-image: none;
  }
  @media (max-width: ${breakpoints.values.sm}px) {
    height: calc(100vh - ${spacing(18.375)});
    width: 90%;
    margin: 0 auto;
  }
`;

export const buttonContainer = css`
  width: ${spacing(50)};
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15%;
  @media (max-width: ${breakpoints.values.lg}px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

export const descriptionText = css`
  text-align: center;
  font-size: ${spacing(3.6)};
  font-weight: 400;
  @media (max-width: ${breakpoints.values.sm}px) {
    font-size: ${spacing(3.2)};
  }
  @media (max-width: ${breakpoints.values.xs}px) {
    font-size: ${spacing(3)};
  }
`;

export const createSessionBtn = css`
  display: flex;
  align-items: center;
  color: ${color.alertLight};
  padding: ${spacing(2.5)} ${spacing(3.75)};
  text-transform: capitalize;
  margin-top: ${spacing(4)};
  font-size: ${spacing(2.8)};
  font-weight: 400;
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
  font-size: ${spacing(4)};
  @media (max-width: ${breakpoints.values.xs}px) {
    font-size: ${spacing(3.2)};
  }
`;
