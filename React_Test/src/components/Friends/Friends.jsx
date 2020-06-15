import React from "react";
import style from "./Friends.module.css";

const Friends = (props) => {
  return (
    <div className={style.boxFriends}>
      <img className={style.imgFriends} src={props.img} alt="" />
    </div>
  );
};

export default Friends;
