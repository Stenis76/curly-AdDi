import React, { useState } from "react";
import UserContext from "./context";

function UserContextProvider(props) {
  const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  async function login(username, password) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    const res = await fetch("http://localhost:3002/api/log-in", options);
    const data = await res.json();
    if (data.user) {
      setUser(data.user);
      setIsAuthenticated(true);
    }

    return data.status;
  }
  function logout() {
    setUser(undefined);
    setIsAuthenticated(false);
  }

  return (
    <UserContext.Provider
      {...props}
      value={{
        isAuthenticated,
        user,
        login,
        logout,
      }}
    />
  );
}

export default UserContextProvider;
