import React, {FC} from 'react';
import style from './Nav.module.scss';
import {NavLink} from "react-router-dom";

interface IPrors {
  title: string;
  link: string;
}

const NavItem: FC<IPrors> = (props) => {
  return (
    <div>
      <NavLink
        to={props.link}
        className={({ isActive }) => !isActive ?
          style.navItemContent : style.navItemContentActive}
      >
        {props.title}
      </NavLink>
    </div>
  );
};

export default NavItem;