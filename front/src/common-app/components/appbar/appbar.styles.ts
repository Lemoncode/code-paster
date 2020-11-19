import { css } from 'emotion';
import { theme } from 'core/theme';
const { palette, typography, spacing } = theme;

export const appbarContainer = css`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${spacing(86)};
  background-image: linear-gradient(
    60deg,
    white 250px,
    #d9d900 250px,
    white 90%
  );
  border-bottom: 2px solid ${palette.text.primary};

  @media (max-width: 578px) {
    height: auto;
    min-height: ${spacing(86)};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(60deg, white, white);
  }
`;

export const logo = (showLinks: boolean): string => css`
  margin-top: ${spacing(5)};
  height: ${spacing(60)};
  fill: ${palette.text.primary};
  margin-left: 2.4rem;

  @media (max-width: 578px) {
    margin-left: 0;
    margin-top: ${showLinks ? '1.5rem' : '0'};
  }
`;

export const navContainer = css`
  margin-left: auto;

  @media (max-width: 578px) {
    margin-left: 0;
  }
`;

export const navList = css`
  display: flex;
  list-style: none;

  @media (max-width: 578px) {
    padding: 0;
  }
`;

export const listItem = css`
  margin-right: 1.5rem;
  overflow: hidden;

  &:last-of-type {
    margin-right: 2.4rem;

    @media (max-width: 578px) {
      margin-right: 0;
    }
  }
`;

export const link = css`
  font-size: 1.1rem;
  margin-top: 0.2rem;
  position: relative;
  display: inline-block;
  text-decoration: none;
  color: ${palette.text.primary};
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
  &:hover {
    padding-bottom: 3px;
    border-bottom: 2px solid rgb(255, 87, 51);
    color: rgb(255, 87, 51);
  }
`;
