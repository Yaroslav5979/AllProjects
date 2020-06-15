import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="app-wrapper-content">
          <Navbar avaImg={props.appState.messagePage.dialogs} />

          <Route
            path="/profile"
            render={() => (
              <Profile
                dispatch={props.dispatch}
                posts={props.appState.profilePost.posts}
                newPostText={props.appState.profilePost.newPostText}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogsName={props.appState.messagePage.dialogs}
                message={props.appState.messagePage}
                dispatch={props.dispatch}
              />
            )}
          />
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
