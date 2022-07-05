import styles from './ThemeSwitch.module.css';
import { Form } from 'react-bootstrap';

export const ThemeSwitch = () => {
  return (
    <Form className={styles.switch}>
      <Form.Label>Theme</Form.Label>
      <Form.Check type="switch" id="custom-switch" />
    </Form>
  );
};
