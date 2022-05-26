import React, {FC} from 'react';
import style from './Nav.module.scss';

interface IPrors {
  title: string;
}

const NavItem: FC<IPrors> = (props) => {
  return (
    <div>
      <span className={style.navItemContent}>{props.title}</span>
    </div>
  );
};

export default NavItem;