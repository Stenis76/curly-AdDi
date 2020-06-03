import React, { useState, useEffect } from "react";
import "./styles.scss";

const Sidebar = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/users", { credentials: "include" })
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
        setLoading(false);
      });
  }, []);

  return (
    <div className="sidebar-container">
      <h2>Medlemmar</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
