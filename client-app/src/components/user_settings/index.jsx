import React, { useState, useEffect, useContext } from "react";
import "./styles.scss";
import FormInput from "../form_input/form_input";
import Loader from "react-loader-spinner";
import UserContext from "../../contexts/user-contexts/context";

import CustomButton from "../custom_button/custom_button";

const UserSettings = ({ closeSettings }) => {
  const [loading, setLoading] = useState(false);
  const { user, logout } = useContext(UserContext);

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
        credentials: "include",
        body: JSON.stringify(updatedUser),
      };
      setLoading(true);

      const res = await fetch(
        "http://localhost:8080/api/users/" + user._id,
        options
      );

      console.log(res);
      const data = await res.json();

      closeSettings();
      setLoading(false);
    } catch (error) {
      console.log("kan ej uppdatera användare", error.message);
      setLoading(false);
    }
  };
  const removeUser = () => {
    console.log("ta bort");
    // borde kanske få en dubbelfråga ifall du verkligen vill ta bort
    const options = {
      method: "DELETE",
      credentials: "include",
    };
    fetch("http://localhost:8080/api/users/" + user._id, options)
      .then((res) => res.json())
      .then((data) => {
        alert("Medlemskap avslutat");
        logout();
      });
  };
  return (
    <div className="settings-container">
      <h2>Inställningar</h2>
      <h5>Ändra dina uppgifter</h5>

      <div>
        <FormInput
          type="email"
          name="email"
          value={state.email}
          handleChange={handleChange}
          label={"E-post"}
        />
      </div>
      <div>
        <FormInput
          type="password"
          name="password"
          value={state.password}
          handleChange={handleChange}
          label={"Lösenord"}
          required
        />
      </div>
      <div>
        <FormInput
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          handleChange={handleChange}
          label={"Bekräfta lösenord"}
          required
        />
      </div>
      <div className="button-containter">
        <CustomButton handleClick={handleSubmit} type="submit">
          Uppdatera
        </CustomButton>
        <CustomButton handleClick={removeUser} type="submit">
          Avsluta medlemskap
        </CustomButton>
      </div>
    </div>
  );
};

export default UserSettings;
