import React from "react";

import s from "./Dialogs.module.css";

import DialogItem from "./DialogItem/DialogsItem.jsx";
import Message from "./Message/Message.jsx";
import { connect } from "react-redux";
import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   //////////////Input//////////////////////////

//   // let addText = () => {
//   //   props.dispatch({ type: "SEND-MESSAGE" });
//   // };
//   // let update = (event) => {
//   //   let text = event.target.value;
//   //   props.dispatch({ type: "UPDATE-NEW-MESSAGE", text: text });
//   // };

//   /////////////////////////////////////////////
//   return;
// };

// dialogsName={props.appState.messagePage.dialogs}
// message={props.appState.messagePage}
// dispatch={props.dispatch}
const mapStateToProps = (state) => {
  return {
    dialogs: state.messagePage.dialogs,
    message: state.messagePage.message,
    newMessage: state.messagePage.newMessage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addText: () => {
      dispatch({ type: "SEND-MESSAGE" });
    },
    update: (newMessage) => {
      dispatch({ type: "UPDATE-NEW-MESSAGE", newMessage: newMessage });
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
