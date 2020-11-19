import React from 'react';
import { ReactComponent as CodePasterLogo } from 'assets/logo.svg';
import * as classes from './appbar.styles';

interface Props {
  showLinks: boolean;
}

export const AppbarComponent: React.FC<Props> = ({ showLinks }) => {
  const {
    appbarContainer,
    navContainer,
    navList,
    listItem,
    link,
    logo,
  } = classes;

  return (
    <div className={appbarContainer}>
      <CodePasterLogo className={logo(showLinks)} />
      {showLinks && (
        <nav className={navContainer}>
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
      )}
    </div>
  );
};
