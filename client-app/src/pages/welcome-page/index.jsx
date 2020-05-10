import React from "react";

import SignUp from "../../components/sign_up/sign_up";
import "./styles.scss";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="greeter">
        <h1>Båtforum</h1>
      </div>
      <SignUp />
    </div>
  );
};

export default WelcomePage;
