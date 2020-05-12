import React, { useContext } from "react";
import UserContext from "./contexts/user-contexts/context";

import { Switch, Route, Redirect } from "react-router-dom";

import WelcomePage from "./pages/welcome-page";
import MainPage from "./pages/main-page";

import "./app.css";

function App() {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
        <Route path="/welcome">
          <WelcomePage />
        </Route>
        <Route
          path="/main"
          render={() => {
            if (!isAuthenticated) {
              return <Redirect to="/welcome" />;
            } else return <MainPage />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
