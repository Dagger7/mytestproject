import React from 'react';
import NavItem from "./NavItem";
import style from './Nav.module.scss';


const NavAdditionalContent = () => {
  return (
    <div className={style.navContentContainer}>
      <NavItem />
    </div>
  );
};

export default NavAdditionalContent;