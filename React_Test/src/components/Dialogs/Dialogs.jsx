import React from "react";

import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogsItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
  ////////////////////////////////////////////////
  let dialogsElements = props.dialogs.map((di) => {
    return <DialogItem key={di.id} name={di.name} avaImg={di.avaImg} />;
  });
  let messagesElements = props.message.map((mes) => {
    return <Message key={mes.id} message={mes.message} />;
  });

  //////////////Input//////////////////////////

  let newAddText = () => {
    props.addText();
  };
  let newUpdate = (event) => {
    let text = event.target.value;

    props.update(text);
  };

  /////////////////////////////////////////////
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
        <div>
          <input type="text" onChange={newUpdate} value={props.newMessage} />
          <button onClick={newAddText}>Add text</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
