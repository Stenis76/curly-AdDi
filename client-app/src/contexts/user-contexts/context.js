import React from "react";

export default React.createContext({
  isAuthenticated: false,
  user: undefined,
  login: () => {},
  logout: () => {},
});
