import styles from './LanguageMenu.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export const LanguageMenu = () => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Language">
      <Dropdown.Item href="#/action-1">Українська</Dropdown.Item>
      <Dropdown.Item href="#/action-2">English</Dropdown.Item>
    </DropdownButton>
  );
};
