import React from "react";

import MyPosts from "./MyPosts.jsx";
import { connect } from "react-redux";

// const MyPostsContainer = (props) => {
//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch({ type: "ADD-POST" });
//   };

//   let onPostChange = (text) => {
//     props.store.dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });
//   };

//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       addPost={addPost}
//       newPostText={state.profilePost.newPostText}
//     />
//   );
// };

let mapStateToProps = (state) => {
  return {
    newPostText: state.profilePost.newPostText,
    posts: state.profilePost.posts,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch({ type: "ADD-POST" });
    },
    postChange: (text) => {
      dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
