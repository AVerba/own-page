import styles from './SocialBar.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';

export const SocialBar = () => {
  return (
    <ul className={styles.socialList}>
      <li className={styles.socialItem}>
        <GitHubIcon className={styles.icon} />
      </li>
      <li className={styles.socialItem}>
        <LinkedInIcon className={styles.icon} />
      </li>
      <li className={styles.socialItem}>
        <TelegramIcon className={styles.icon} />
      </li>
    </ul>
  );
};
