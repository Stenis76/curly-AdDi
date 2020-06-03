import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";
import UserContext from "../../contexts/user-contexts/context";
import FormInput from "../form_input/form_input";
import CustomButton from "../custom_button/custom_button";

import "./sign_in.styles.scss";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await login(username, password);

      if (response === "Authenticated") {
        history.push("/main");
      } else if (response === "Wrong password") {
        alert("fel lösenord");
        setLoading(false);
      } else if (response === "Wrong name") {
        alert("användarnamnet finns ej");
        setLoading(false);
      }
    } catch (error) {
      console.log("Error while loggin in", error.message);
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
