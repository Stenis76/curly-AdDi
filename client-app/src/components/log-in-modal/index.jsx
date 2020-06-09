import React, { useState, useContext } from "react";

import SignIn from "../sign_in/sign_in";
import SignUp from "../sign_up/sign_up";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const LogInModal = ({ closeModal }) => {
  const [showRegister, setShowRegister] = useState(false);
  console.log("showRegister", showRegister);

  return (
    <div className="modal-container">
      <div>
        <FontAwesomeIcon icon={faTimes} onClick={closeModal} />
        {showRegister ? (
          <SignUp />
        ) : (
          <SignIn showRegister={() => setShowRegister(true)} />
        )}
      </div>
    </div>
  );
};

export default LogInModal;
