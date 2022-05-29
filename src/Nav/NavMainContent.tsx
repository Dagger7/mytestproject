import React from 'react';
import NavItem from "./NavItem";
import style from './Nav.module.scss';

const NavMainContent = () => {

  let navItemsData = [
    {
      link: '/profile',
      title: 'Profile'
    },
    {
      link: '/dialogs',
      title: 'Dialogs'
    },
    {
      link: '/',
      title: 'News'
    },
    {
      link: '/',
      title: 'Music'
    }
  ];

  let navItemComponents = navItemsData.map((el) => <NavItem title={el.title} link={el.link} />)

  return (
    <div className={style.navContentContainer}>
      {navItemComponents}
    </div>
  );
};

export default NavMainContent;