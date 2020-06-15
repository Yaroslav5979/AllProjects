import React from "react";

import Post from "./MyPosts/Posts/Post";
import c from "./MyPosts/Posts/Post.module.css";

import MyPosts from "./ProfileInfo/MyPosts";

const Profile = (props) => {
  let messageItems = props.posts.map((mes) => {
    return (
      <Post
        name={mes.name}
        messageData={mes.message}
        likeCount={mes.likeCount}
        avaImg={mes.avaImg}
      />
    );
  });

  return (
    <div className={c.content}>
      <MyPosts dispatch={props.dispatch} newPostText={props.newPostText} />
      <div className={c.box}>{messageItems}</div>
    </div>
  );
};

export default Profile;
