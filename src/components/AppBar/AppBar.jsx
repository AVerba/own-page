import styles from './AppBar.module.css';

import { Container } from '../Container';
import { Navigation } from '../Navigation';
import { LanguageMenu } from '../LanguageMenu/LanguageMenu';
import { ThemeSwitch } from '../UI/ThemeSwitch';
import { UserMenu } from '../UserMenu/UserMenu';
import { useTranslation } from 'react-i18next';

export const AppBar = () => {
  // const { i18n } = useTranslation();
  // const changeLanguage = language => {
  //   i18n.changeLanguage(language);
  // };
  return (
    <Container>
      <header className={styles.header}>
        <Navigation />
        <UserMenu />
        {/*<button onClick={() => changeLanguage('en')}>EN</button>*/}
        {/*<button onClick={() => changeLanguage('ua')}>UA</button>*/}
      </header>
    </Container>
  );
};
