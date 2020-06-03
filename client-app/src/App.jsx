import React, { useContext } from "react";
import UserContext from "./contexts/user-contexts/context";

import { Switch, Route, Redirect } from "react-router-dom";

import WelcomePage from "./pages/welcome-page";
import MainPage from "./pages/main-page";
import ProtectedRoute from "./router/protected-route";

import "./app.css";

function App() {
  const { isAuthenticated } = useContext(UserContext);

  console.log("isAuth", isAuthenticated);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
        <Route
          path="/welcome"
          render={() =>
            isAuthenticated ? <Redirect to="/main" /> : <WelcomePage />
          }
        />
        <ProtectedRoute exact path="/main" component={MainPage} />
      </Switch>
    </div>
  );
}

export default App;
