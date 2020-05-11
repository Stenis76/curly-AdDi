import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import UserAvatar from "../../resources/hair-and-beard-png-3.png";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="avatar">
        <img id="avatarImage" src={UserAvatar} alt="avatar" />
        <p>Hej "username"</p>
      </div>
      <h1>Båtforum</h1>
      <div className="controls">
        <FontAwesomeIcon id="new" icon={faPlus} />
        <FontAwesomeIcon id="cog" icon={faCog} />
        <FontAwesomeIcon id="sign-out-alt" icon={faSignOutAlt} />
      </div>
    </div>
  );
};

export default Header;
