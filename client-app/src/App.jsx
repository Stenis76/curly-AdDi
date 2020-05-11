import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import WelcomePage from "./pages/welcome-page";
import MainPage from "./pages/main-page";

import "./app.css";

function App() {
  // if (userAuth) redirect to /main

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
        <Route path="/welcome">
          <WelcomePage />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
