import React from 'react';
import style from './Content.module.scss';
import Profile from "./Profile/Profile";


const Content = () => {
  return (
    <div className={style.contentContainer}>
      <Profile />
    </div>
  );
};

export default Content;