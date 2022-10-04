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
        {/*<div className={styles.content}>*/}
        {/*  <div className={styles.avatarToumb}>*/}
        {/*    <UserAvatar/>*/}
        {/*    <h4 className={styles.name}>{t('name')}</h4>*/}
        {/*  </div>*/}
        {/*  <ul className={styles.info}>*/}
        {/*    <li className={styles.infoItem}>*/}
        {/*      <h4 className={styles.about}>About me:</h4>*/}
        {/*    </li>*/}
        {/*    <li className={styles.infoItem}>*/}
        {/*      <h4 className={styles.education}>Education:</h4>*/}
        {/*    </li>*/}
        {/*    <li className={styles.infoItem}>*/}
        {/*      <h4 className={styles.education}>Expiriance:</h4>*/}
        {/*    </li>*/}
        {/*    <li className={styles.infoItem}>*/}
        {/*      <h4 className={styles.stack}>My stack:</h4>*/}
        {/*    </li>*/}
        {/*    <li className={styles.infoItem}>*/}
        {/*      <Nav.Item className={styles.item}>*/}
        {/*        <Nav.Link*/}
        {/*          as={NavLink}*/}
        {/*          className={styles.link}*/}
        {/*          eventKey="Home"*/}
        {/*          to="/projects"*/}
        {/*        >*/}
        {/*          My projects*/}
        {/*        </Nav.Link>*/}
        {/*      </Nav.Item>*/}
        {/*      <Nav.Item className={styles.item}>*/}
        {/*        <Nav.Link*/}
        {/*          as={NavLink}*/}
        {/*          className={styles.link}*/}
        {/*          eventKey="Home"*/}
        {/*          to="/contacts"*/}
        {/*        >*/}
        {/*          How to rich me*/}
        {/*        </Nav.Link>*/}
        {/*      </Nav.Item>*/}
        {/*    </li>*/}
        {/*  </ul>*/}
        {/*</div>*/}
      </Container>
    </div>
  );
};

export default HomeView;
