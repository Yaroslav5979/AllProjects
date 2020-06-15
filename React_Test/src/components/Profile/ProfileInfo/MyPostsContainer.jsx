import React from "react";

import MyPosts from "./MyPosts.jsx";

const MyPostsContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    props.store.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = (text) => {
    props.store.dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.profilePost.posts}
      newPostText={state.profilePost.newPostText}
    />
  );
};

export default MyPostsContainer;
