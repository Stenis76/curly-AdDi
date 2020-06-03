import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import UserContext from "../contexts/user-contexts/context";

const ProtectedRoute = ({ component: Component, admin, ...rest }) => {
  const { isAuthenticated } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/welcome" />
        )
      }
    />
  );
};

export default ProtectedRoute;
