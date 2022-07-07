import styles from './LanguageMenu.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const LanguageMenu = () => {
  const [lng, setLng] = useState('en');
  const { i18n } = useTranslation();
  const changeLanguage = language => {
    i18n.changeLanguage(language);
  };

  const handleSelect = e => {
    switch (e) {
      case 'UA':
        changeLanguage('ua');
        setLng('ua');
        break;
      case 'EN':
        changeLanguage('en');
        setLng('en');
        break;
    }
  };
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title={lng}
      onSelect={handleSelect}
    >
      <Dropdown.Item eventKey="UA">Українська</Dropdown.Item>
      <Dropdown.Item eventKey="EN">English</Dropdown.Item>
    </DropdownButton>
  );
};
