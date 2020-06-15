import React from "react";

import s from "../Dialogs.module.css";
import { NavLink } from "react-router-dom";

//DialogItem-вертає <a href="/dialogs/name">name</a>
const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink
        to={`/dialogs/${props.name.toLowerCase()}`}
        activeClassName={s.active}
      >
        <h3>{props.name}</h3>

        <img className={s.avatar} src={props.avaImg} alt="" />
      </NavLink>
    </div>
  );
};

export default DialogItem;
