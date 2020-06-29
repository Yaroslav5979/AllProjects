import React from "react";

import MyPosts from "./MyPosts.jsx";
import { connect } from "react-redux";

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

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
