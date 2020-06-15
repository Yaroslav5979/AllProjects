import React from "react";
import c from "./MyPosts.module.css";

const MyPosts = (props) => {
  let textPost = React.createRef();

  let addPost = () => {
    props.dispatch({ type: "ADD-POST" });
  };

  let onPostChange = () => {
    let text = textPost.current.value;

    props.dispatch({ type: "UPDATE-NEW-POST-TEXT", text: text });
  };

  return (
    <div>
      <img
        className={c.headImg}
        src="https://i.artfile.ru/2560x1440_1049251_[www.ArtFile.ru].jpg"
      />

      <input
        type="text"
        onChange={onPostChange}
        value={props.newPostText}
        ref={textPost}
      />
      <button onClick={addPost}>Add post</button>
      <div>Avatar + Discription</div>
    </div>
  );
};

export default MyPosts;
