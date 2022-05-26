import React, {FC} from 'react';
import style from './Nav.module.scss';

interface IPrors {
  title: string;
  link: string;
}

const NavItem: FC<IPrors> = (props) => {
  return (
    <div>
      <a
        href={props.link}
        className={style.navItemContent}
      >
        {props.title}
      </a>
    </div>
  );
};

export default NavItem;