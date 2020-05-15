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

    const res = await fetch("http://localhost:3002/api/login", options);
    const data = await res.json();
    if (data.user) {
      setUser(data.user);
      setIsAuthenticated(true);
    }
    console.log(data.status);

    return data.status;
  }

  console.log("user", user);

  function logout() {
    console.log("id", user._id);

    fetch("http://localhost:3002/api/logout/" + user._id);
    setUser(undefined);
    setIsAuthenticated(false);
  }

  return (
    <UserContext.Provider
      {...props}
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        login,
        logout,
      }}
    />
  );
}

export default UserContextProvider;
