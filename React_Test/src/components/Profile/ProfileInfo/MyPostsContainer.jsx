import React from "react";
import c from "./MyPosts.module.css";
import MyPosts from "./MyPosts";

const MyPosts = (props) => {
  let textPost = React.createRef();

  let addPost = () => {
    props.addPost();
    //props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = (text) => {
    props.updateNewPostText(text);
    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });
  };

  return <MyPosts updateNewPostText={(onPostChange) => {}} />;
};

export default MyPosts;
