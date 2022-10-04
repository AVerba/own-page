import styles from './UserMenu.module.css';
import { ThemeSwitch } from '../UI/ThemeSwitch';
import { LanguageMenu } from '../LanguageMenu/LanguageMenu';

export const UserMenu = () => {
  return (
    <div className={styles.container}>
      <LanguageMenu />
    </div>
  );
};
