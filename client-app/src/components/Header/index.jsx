import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../contexts/user-contexts/context";

import UserAvatar from "../../resources/hair-and-beard-png-3.png";
import "./styles.scss";

const Header = ({ openPostModal }) => {
  const { logout } = useContext(UserContext);
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <div className="avatar">
        <img id="avatarImage" src={UserAvatar} alt="avatar" />
        <p>Hej {user.name}</p>
      </div>
      <h1>Båtforum</h1>
      <div className="controls">
        <FontAwesomeIcon onClick={openPostModal} id="new" icon={faPlus} />
        <FontAwesomeIcon id="cog" icon={faCog} />
        <FontAwesomeIcon
          onClick={logout}
          id="sign-out-alt"
          icon={faSignOutAlt}
        />
      </div>
    </div>
  );
};

export default Header;
