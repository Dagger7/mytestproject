import React from 'react';
import NavItem from "./NavItem";
import style from './Nav.module.scss';

const NavMainContent = () => {
  return (
    <div className={style.navContentContainer}>
      <NavItem title="Profile" />
      <NavItem title="Messages" />
      <NavItem title="News" />
      <NavItem title="Music" />
    </div>
  );
};

export default NavMainContent;