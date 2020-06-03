import React, { useState, useEffect } from "react";
import UserContext from "./context";

function UserContextProvider(props) {
  const [user, setUser] = useState(undefined);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // check if user already has an authentication session
  useEffect(() => {
    const options = {
      credentials: "include",
    };

    const fetchUser = async () => {
      try {
        const res = await fetch("http://localhost:8080/api/session", options);
        const data = await res.json();

        if (data.user) {
          setUser(data.user);
          setIsAuthenticated(true);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchUser();
  }, []);

  async function login(username, password) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    };

    const res = await fetch("http://localhost:8080/api/login", options);
    const data = await res.json();
    if (data.user) {
      setUser(data.user);
      setIsAuthenticated(true);
    }

    return data.status;
  }

  function logout() {
    const options = {
      credentials: "include",
    };
    fetch("http://localhost:8080/api/logout", options);
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
