import React, {FC} from 'react';
import style from './DialogContacts.module.scss'
import {NavLink} from "react-router-dom";
import AvatarComponent from "../../../Components/AvatarComponent";

interface IProps {
  name: string;
  link: string;
  avatar: string;
}

const DialogContact: FC<IProps> = (props) => {
  return (
    <NavLink
      to={props.link}
      className={({isActive}) => isActive ? style.contactNameActive : style.contactName}
    >
      <AvatarComponent avatar={props.avatar} />
      <span>{props.name}</span>
    </NavLink>
  );
};

export default DialogContact;