import React from 'react';
import style from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo";
import ProfilePost from "./ProfilePost";
import ButtonComponent from "../../Components/ButtonComponent";

const Profile = () => {

  let profileInfoData = [
    {
      designation: 'Date of Birth',
      result: '18 december 2000'
    },
    {
      designation: 'City',
      result: 'Berezniki'
    },
    {
      designation: 'Education',
      result: 'БФ ПНИПУ\'22'
    },
    {
      designation: 'Resume',
      result: 'hh.ru/resume/2a9d4b95ff09f158e90039ed1f34597a6d5a71'
    },
  ];

  let profileInfoComponents = profileInfoData.map((el) => <ProfileInfo designation={el.designation} result={el.result} />)

  let profilePostData = [
    {message:'Why doesn\'t anyone love me?'},
    {message:'I took a course from IT-KAMASUTRA'},
    {message:'Why does everyone love me?'}
  ];

  let profilePostComponents = profilePostData.map((el) => <ProfilePost message={el.message} />)

  return (
    <div className={style.profileContainer}>
      <img className={style.profileHeadImage} src="https://phonoteka.org/uploads/posts/2021-06/1624075303_18-phonoteka_org-p-nochnoi-gorod-oboi-krasivo-20.jpg"/>
      <div className={style.profileInfoContainer}>
        <img className={style.profileImage} src="https://static.wikia.nocookie.net/gensin-impact/images/a/a0/Character_Mona_Thumb.png"/>
        <div className={style.profileContentContainer}>
          <span className={style.profileName}>Dmitry S.</span>
          {profileInfoComponents}
        </div>
      </div>
      <div className={style.profilePostsContainer}>
        <span className={style.profilePostsHeader}>My posts</span>
        <div className={style.profilePostsHolder}>
          <textarea
            className={style.profilePostsInput}
            placeholder="your news..."
          />
          <div className={style.profilePostsButtonContainer}>
            <ButtonComponent />
          </div>
        </div>
        <div className={style.profilePostsPlaceContainer}>
          {profilePostComponents}
        </div>
      </div>
    </div>
  );
};

export default Profile;