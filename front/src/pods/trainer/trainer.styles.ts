import { css } from 'emotion';

export const mainContainer = css`
  width: 100%;
`;

export const backgroundContainer = css`
  border-bottom: 1px solid #ccc;
`;

export const content = css`
  width: 60%;
  margin: 0px auto 0 auto;

  @media (max-width: 728px) {
    width: 80%;
  }
`;
