import React from "react";

import c from "./MyPosts/Posts/Post.module.css";

import MyPostsContainer from "./ProfileInfo/MyPostsContainer";

const Profile = () => {
  return (
    <div className={c.content}>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
