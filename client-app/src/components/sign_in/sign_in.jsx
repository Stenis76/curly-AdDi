import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";

import FormInput from "../form_input/form_input";
import CustomButton from "../custom_button/custom_button";

import "./sign_in.styles.scss";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
      setLoading(true);
      const res = await fetch("http://localhost:3002/api/log-in", options);
      const data = await res.json();
      setLoading(false);
      console.log(data);

      if (data.status === "Authenticated") {
        history.push("/main");
      }
    } catch (error) {
      console.log("Error while loggin in", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="sign-in">
      {loading ? (
        <Loader type="TailSpin" color="#00BFFF" height={70} width={70} />
      ) : (
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
            <Link to="/welcome/register">
              <CustomButton>Registrera dig</CustomButton>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignIn;
