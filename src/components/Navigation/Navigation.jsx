import styles from './Navigation.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ContactPageIcon from '@mui/icons-material/ContactPage';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const [active, setActive] = useState('Home');
  const handleSelect = eventKey => setActive(eventKey);

  return (
    <Nav variant="pills" activeKey={active} onSelect={handleSelect}>
      <Nav.Item className={styles.item}>
        <Nav.Link as={NavLink} className={styles.link} eventKey="Home" to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.item}>
        <Nav.Link
          as={NavLink}
          className={styles.link}
          eventKey="Projects"
          to="/projects"
        >
          <TextSnippetIcon className={styles.icon} />
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item className={styles.item}>
        <Nav.Link
          as={NavLink}
          className={styles.link}
          eventKey="Contacts"
          to="/contacts"
        >
          <ContactPageIcon className={styles.icon} />
          Contacts
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
