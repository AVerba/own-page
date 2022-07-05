import styles from './AppBar.module.css';

import { Container } from '../Container';
import { Navigation } from '../Navigation';
import { LanguageMenu } from '../LanguageMenu/LanguageMenu';
import { ThemeSwitch } from '../UI/ThemeSwitch';
import { UserMenu } from '../UserMenu/UserMenu';

export const AppBar = () => {
  return (
    <Container>
      <header className={styles.header}>
        <Navigation />
        <UserMenu />
      </header>
    </Container>
  );
};
