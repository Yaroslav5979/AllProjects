import React from "react";

import s from "../Dialogs.module.css";

const Message = (props) => {
  return <p className={s.message}>{props.message}</p>;
};

export default Message;
