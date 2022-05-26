import React from 'react';
import style from './Nav.module.scss';

const NavItem = () => {
  return (
    <div>
      <span className={style.navItemContent}>Profile</span>
    </div>
  );
};

export default NavItem;