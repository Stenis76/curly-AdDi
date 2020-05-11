import React, { useState } from "react";

import FormInput from "../form_input/form_input";
import CustomButton from "../custom_button/custom_button";

import "./sign_in.styles.scss";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const loginUser = {
        username: username,
        password: password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginUser),
      };

      const res = await fetch("http://localhost:3002/api/log-in", options);
      const data = res.json();

      console.log("sign in data", data);
    } catch (error) {
      console.log("Error while loggin in", error.message);
    }
  };

  return (
    <div className="sign-in">
      <h2 className="title">LOGGA IN PÅ BÅTFORUM</h2>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="username"
          value={username}
          handleChange={handleChange}
          label={"Användarnamn"}
          required
        />
        <FormInput
          handleChange={handleChange}
          label="password"
          name="password"
          type="password"
          value={password}
          required
        />

        <div className="buttons">
          <CustomButton type="submit">Logga in</CustomButton>
          <CustomButton type="submit">Registrera dig</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
