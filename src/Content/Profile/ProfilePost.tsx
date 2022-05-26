import React, {FC} from 'react';
import style from './Profile.module.scss';

interface IProps {
  message: string;
}

const ProfilePost: FC<IProps> = (props) => {
  return (
    <div className={style.profilePostsPlace}>
      <img className={style.profilePostsImg} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png' alt=""/>
      <span>{props.message}</span>
    </div>
  );
};

export default ProfilePost;