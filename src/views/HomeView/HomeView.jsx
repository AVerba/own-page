import styles from './HomeView.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from '../../components/Container';
import { UserAvatar } from '../../components/UserAvatar';
import { useTranslation } from 'react-i18next';
import Nav from 'react-bootstrap/Nav';

import { NavLink } from 'react-router-dom';

const HomeView = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.info}>
          <h1 className={styles.nameTitle}>{t('name')}</h1>
          <h2 className={styles.mainTitle}>
            Engineer + Junior Full Stack Developer
          </h2>
        </div>
      </Container>
    </div>
  );
};

export default HomeView;
