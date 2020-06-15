import React from "react";

import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogsItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsName.map((di) => {
    return <DialogItem name={di.name} avaImg={di.avaImg} />;
  });
  let messagesElements = props.message.message.map((mes) => {
    return <Message message={mes.message} />;
  });

  //////////////Input//////////////////////////

  let addText = () => {
    props.dispatch({ type: "SEND-MESSAGE" });
  };
  let update = (event) => {
    let text = event.target.value;
    props.dispatch({ type: "UPDATE-NEW-MESSAGE", text: text });
  };

  /////////////////////////////////////////////
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
        <div>
          <input
            type="text"
            onChange={update}
            value={props.message.newMessage}
          />
          <button onClick={addText}>Add text</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
