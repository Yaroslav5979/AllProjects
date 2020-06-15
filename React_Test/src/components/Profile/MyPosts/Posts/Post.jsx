import React from "react";
import c from "./Post.module.css";

const LikeImg = (props) => {
  return <img className={c.like} src={props.img} alt="" />;
};

const Post = (props) => {
  return (
    <div className={c.item}>
      <h3>{props.name}</h3>
      <p>
        <img className={c.avatar} src={props.avaImg} />
        {props.messageData}
      </p>

      <div>
        <LikeImg img="https://t3.ftcdn.net/jpg/00/40/57/52/240_F_40575290_TZUlhYVs4W9bWHRGckFnIa9UBg52TaAn.jpg" />
        <span> {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;
