import styles from './Navigation.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import HomeIcon from '@mui/icons-material/Home';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const [active, setActive] = useState('Home');
  const handleSelect = eventKey => setActive(eventKey);

  return (
    <Nav variant="pills" activeKey={active} onSelect={handleSelect}>
      <Nav.Item className={styles.NavItem}>
        <NavLink className={styles.item} eventKey="Home" to="/">
          <HomeIcon className={styles.icon} />
          Home
        </NavLink>
      </Nav.Item>
      <Nav.Item className={styles.NavItem}>
        <NavLink className={styles.item} eventKey="Contacts" to="/contacts">
          <ContactPageIcon className={styles.icon} />
          About me
        </NavLink>
      </Nav.Item>
      <Nav.Item className={styles.NavItem}>
        <NavLink className={styles.item} eventKey="Projects" to="/projects">
          <TextSnippetIcon className={styles.icon} />
          Projects
        </NavLink>
      </Nav.Item>
    </Nav>
  );
};
