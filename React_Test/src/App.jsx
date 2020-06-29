import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UserContainer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <div className="app-wrapper-content">
          <Navbar />

          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
