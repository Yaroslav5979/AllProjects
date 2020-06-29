import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

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
