import React from "react";

import c from "./MyPosts/Posts/Post.module.css";

import MyPostsContainer from "./ProfileInfo/MyPostsContainer";
import Preloader from "../Preloader/Preloader.js";

const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div className={c.content}>
      <img
        className={c.headImg}
        src="https://i.artfile.ru/2560x1440_1049251_[www.ArtFile.ru].jpg"
      />
      <div>
        <h1>{props.profile.fullName}</h1>
        <img src={props.profile.photos.large} alt="" />
      </div>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
