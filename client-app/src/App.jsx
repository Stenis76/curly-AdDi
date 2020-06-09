import React, { useContext } from "react";
import UserContext from "./contexts/user-contexts/context";

import { Switch, Route, Redirect } from "react-router-dom";

import MainPage from "./pages/main-page";
import LogInPage from "./pages/log-in-page";
import ProtectedRoute from "./router/protected-route";

import "./app.css";

function App() {
  const { isAuthenticated } = useContext(UserContext);

  console.log("isAuth", isAuthenticated);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/main" />} />
        <Route path="/login">
          <LogInPage />
        </Route>
        <Route path="/main">
          <MainPage />;
        </Route>
        />
      </Switch>
    </div>
  );
}

export default App;
