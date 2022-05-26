import React from 'react';
import NavItem from "./NavItem";
import style from './Nav.module.scss';

const NavMainContent = () => {
  return (
    <div className={style.navContentContainer}>
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
      <NavItem />
    </div>
  );
};

export default NavMainContent;