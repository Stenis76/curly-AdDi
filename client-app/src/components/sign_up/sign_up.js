import React, { useState } from "react";

import FormInput from "../form_input/form_input";
import CustomButton from "../custom_button/custom_button";

import "./sign_up.styles.scss";

const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (state.password !== state.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const newUser = {
        name: state.name,
        email: state.email,
        username: state.username,
        password: state.password,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      };

      const res = await fetch("http://localhost:3002/api/newuser", options);
      const data = res.json();

      console.log("sign up data", data);
    } catch (error) {
      console.log("Error while sign up", error.message);
    }
  };

  return (
    <div className="sign-up">
      <h2 className="title">Register</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="name"
          value={state.name}
          handleChange={handleChange}
          label={"Namn"}
          required
        />
        <FormInput
          type="text"
          name="username"
          value={state.username}
          handleChange={handleChange}
          label={"Användarnamn"}
          required
        />
        <FormInput
          type="email"
          name="email"
          value={state.email}
          handleChange={handleChange}
          label={"E-post"}
          required
        />
        <FormInput
          type="password"
          name="password"
          value={state.password}
          handleChange={handleChange}
          label={"Lösenord"}
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          handleChange={handleChange}
          label={"Bekräfta lösenord"}
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default SignUp;
