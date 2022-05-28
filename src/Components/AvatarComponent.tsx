import React, {FC} from 'react';
import style from "./Components.module.scss";

interface IProps {
  avatar: string;
}

const AvatarComponent: FC<IProps> = (props) => {
  return (
      <img
        src={props.avatar}
        className={style.avatar}
      />
  );
};

export default AvatarComponent;