import React from 'react';
import { ReactComponent as LemoncodeLogo } from 'assets/lemoncode-logo.svg';
import { ReactComponent as GithubIcon } from 'assets/github-logo.svg';
import * as classes from './footer.styles';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import LanguageIcon from '@material-ui/icons/Language';

interface Props {
  showLinks: boolean;
}

export const FooterComponent: React.FC<Props> = ({ showLinks }) => {
  const {
    footerContainer,
    topContainer,
    topContainerCenter,
    linkList,
    link,
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
      <div className={showLinks ? topContainer : topContainerCenter}>
        {showLinks && (
          <nav>
            <ul className={linkList}>
              <li>
                <a className={link} href="#">
                  About
                </a>
              </li>
              <li>
                <a className={link} href="#">
                  Credits
                </a>
              </li>
              <li>
                <a className={link} href="#">
                  License
                </a>
              </li>
            </ul>
          </nav>
        )}
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
