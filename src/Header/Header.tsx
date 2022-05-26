import React from 'react';
import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png' alt=''/>
    </header>
  );
};

export default Header;