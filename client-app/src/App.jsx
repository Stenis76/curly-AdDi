import React from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import WelcomePage from "./pages/welcome-page";
import LogInPage from "./pages/log-in-page";
import MainPage from "./pages/main-page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/log-in">
          <LogInPage />
        </Route>
        <Route path="/main">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
