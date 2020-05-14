import React, { useState, useEffect, useContext } from "react";
import "./styles.scss";
import FormInput from "../form_input/form_input";
import Loader from "react-loader-spinner";
import UserContext from "../../contexts/user-contexts/context";

import CustomButton from "../custom_button/custom_button";

const UserSettings = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { setUser, setIsAuthenticated } = useContext(UserContext);

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
      const updatedUser = {
        email: state.email,
        password: state.password,
      };

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedUser),
      };
      setLoading(true);

      const res = await fetch(
        "http://localhost:3002/api/users/" + user._id,
        options
      );

      console.log(res);
      const data = await res.json();

      //stäng settings fliken
      setLoading(false);

      // if (data.status === "Authenticated") {
      //   setUser(data.user);
      //   setIsAuthenticated(true);
      // } else if (data.status === "") {
      //   alert("inga tomma rutor!");
      // }
    } catch (error) {
      console.log("kan ej uppdatera användare", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="settings-container">
      <h2>Inställningar</h2>
      <h5>Ändra dina uppgifter</h5>

      <FormInput
        type="email"
        name="email"
        value={state.email}
        handleChange={handleChange}
        label={"E-post"}
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
      <CustomButton handleClick={handleSubmit} type="submit">
        Uppdatera
      </CustomButton>
    </div>
  );
};

export default UserSettings;
