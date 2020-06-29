import React from "react";
import c from "./MyPosts.module.css";

import Post from "../MyPosts/Posts/Post";

const MyPosts = (props) => {
  let messageItems = props.posts.map((mes) => {
    return (
      <Post
        key={mes.id}
        name={mes.name}
        messageData={mes.message}
        likeCount={mes.likeCount}
        avaImg={mes.avaImg}
      />
    );
  });
  let textPost = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };
  let onPostChange = () => {
    let text = textPost.current.value;

    props.postChange(text);
  };

  return (
    <div>
      <input
        type="text"
        onChange={onPostChange}
        value={props.newPostText}
        ref={textPost}
      />
      <button onClick={onAddPost}>Add post</button>

      <div className={c.box}>{messageItems}</div>
    </div>
  );
};

export default MyPosts;
