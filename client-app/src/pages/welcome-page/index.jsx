import React from "react";

import SignUp from "../../components/sign_up/sign_up";
import "./styles.scss";
import SignIn from "../../components/sign_in/sign_in";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="greeter">
        <h1>Båtforum</h1>
      </div>
      <SignIn />
      <SignUp />
    </div>
  );
};

export default WelcomePage;
