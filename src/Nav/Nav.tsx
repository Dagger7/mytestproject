import React from 'react';
import styles from './Nav.module.scss';
import NavMainContent from "./NavMainContent";
import NavAdditionalContent from "./NavAdditionalContent";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <NavMainContent />
      <NavAdditionalContent />
    </div>
  );
};

export default Nav;