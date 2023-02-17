import React from 'react';
import LemoncodeLogo from 'assets/lemoncode-logo.svg';
import GithubIcon from 'assets/github-logo.svg';
import * as classes from './footer.styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LanguageIcon from '@mui/icons-material/Language';

export const FooterComponent: React.FC = () => {
  const {
    footerContainer,
    topContainerCenter,
    lemoncodeIcon,
    bottomContainer,
    iconContainer,
    iconListItem,
    icon,
    githubIcon,
    copyright,
  } = classes;
  return (
    <footer className={footerContainer}>
      <div className={topContainerCenter}>
        <LemoncodeLogo className={lemoncodeIcon} />
      </div>
      <div className={bottomContainer}>
        <ul className={iconContainer}>
          <li className={iconListItem}>
            <a href="https://github.com/Lemoncode" target="_blank">
              <GithubIcon className={githubIcon} />
            </a>
          </li>
          <li className={iconListItem}>
            <a href="https://twitter.com/lemoncoders" target="_blank">
              <TwitterIcon className={icon} />
            </a>
          </li>
          <li className={iconListItem}>
            <a href="https://lemoncode.net/" target="_blank">
              <LanguageIcon className={icon} />
            </a>
          </li>
          <li className={iconListItem}>
            <a href="mailto:formacion@lemoncode.net" target="_blank">
              <EmailRoundedIcon className={icon} />
            </a>
          </li>
        </ul>
        <span className={copyright}>© 2020 Lemoncode</span>
      </div>
    </footer>
  );
};
