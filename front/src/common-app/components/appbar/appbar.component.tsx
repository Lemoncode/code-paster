import React from 'react';
import { ReactComponent as CodePasterLogo } from 'assets/logo.svg';
import * as classes from './appbar.styles';

export const AppbarComponent: React.FC = () => {
  const { appbarContainer, navList, listItem, link, logo } = classes;
  return (
    <>
      <nav className={appbarContainer}>
        <CodePasterLogo className={logo} />
        <ul className={navList}>
          <li className={listItem}>
            <a className={link} href="#">
              About
            </a>
          </li>
          <li className={listItem}>
            <a className={link} href="#">
              Credits
            </a>
          </li>
          <li className={listItem}>
            <a className={link} href="#">
              License
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
