import React from 'react';
import NavItem from "./NavItem";
import style from './Nav.module.scss';

const NavMainContent = () => {
  return (
    <div className={style.navContentContainer}>
      <NavItem
        link="/profile"
        title="Profile"
      />
      <NavItem
        link="/dialogs"
        title="Dialogs"
      />
      <NavItem
        link="/#"
        title="News"
      />
      <NavItem
        link="/#"
        title="Music"
      />
    </div>
  );
};

export default NavMainContent;