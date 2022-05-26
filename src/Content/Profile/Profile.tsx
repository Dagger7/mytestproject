import React from 'react';
import style from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo";
import ProfilePost from "./ProfilePost";
import ButtonComponent from "../../Components/ButtonComponent";

const Profile = () => {
  return (
    <div className={style.profileContainer}>
      <img className={style.profileHeadImage} src="https://phonoteka.org/uploads/posts/2021-06/1624075303_18-phonoteka_org-p-nochnoi-gorod-oboi-krasivo-20.jpg"/>
      <div className={style.profileInfoContainer}>
        <img className={style.profileImage} src="https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Mona_Thumb.png"/>
        <div className={style.profileContentContainer}>
          <span className={style.profileName}>Dmitry S.</span>
          <ProfileInfo />
          <ProfileInfo />
          <ProfileInfo />
          <ProfileInfo />
        </div>
      </div>
      <div className={style.profilePostsContainer}>
        <span className={style.profilePostsHeader}>My posts</span>
        <div className={style.profilePostsHolder}>
          <input
            className={style.profilePostsInput}
            placeholder="your news..."
            type="text"
          />
          <div className={style.profilePostsButtonContainer}>
            <ButtonComponent />
          </div>
        </div>
        <div className={style.profilePostsPlaceContainer}>
          <ProfilePost />
          <ProfilePost />
        </div>
      </div>
    </div>
  );
};

export default Profile;