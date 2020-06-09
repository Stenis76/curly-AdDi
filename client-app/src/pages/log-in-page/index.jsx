import React from "react";
import { Switch, Route } from "react-router-dom";

import SignUp from "../../components/sign_up/sign_up";
import SignIn from "../../components/sign_in/sign_in";

import "./styles.scss";

const MainPage = () => {
  return (
    <div className="welcome-page">
      <div className="greeter">
        <h1>Båtforum</h1>
      </div>

      <Switch>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route path="/login/register">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default MainPage;
