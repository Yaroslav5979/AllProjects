import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import * as serviceWorker from "./serviceWorker";

import store from "./redux/redux-store.js";

const renderTree = (getState) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        appState={getState}
        store={store}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
///store.getState(){return this._state}
renderTree(store.getState());

//Коли store змінеться
store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
