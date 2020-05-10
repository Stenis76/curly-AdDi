import React, { useState } from "react";

import "./styles.scss";

const LogIn = () => {
  const [name, setName] = useState("");

  return (
    <div className="log-in-form">
      <h3>Logga in eller registrera dig för att ta del av forumet</h3>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <button>Log-on</button>

      <button>Sign-up</button>
    </div>
  );
};

export default LogIn;
