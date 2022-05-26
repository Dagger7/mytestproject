import React from 'react';
import style from './Profile.module.scss';


const ProfilePost = () => {
  return (
    <div className={style.profilePostsPlace}>
      <img className={style.profilePostsImg} src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Vanamo_Logo.svg/1200px-Vanamo_Logo.svg.png' alt=""/>
      <span>Hey, why nobody love me?</span>
    </div>
  );
};

export default ProfilePost;