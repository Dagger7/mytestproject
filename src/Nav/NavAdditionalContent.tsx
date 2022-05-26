import React from 'react';
import NavItem from "./NavItem";
import style from './Nav.module.scss';


const NavAdditionalContent = () => {
  return (
    <div className={style.navContentContainer}>
      <NavItem title="Settings" />
    </div>
  );
};

export default NavAdditionalContent;