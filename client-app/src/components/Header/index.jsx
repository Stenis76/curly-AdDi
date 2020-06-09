import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../../contexts/user-contexts/context";

import UserAvatar from "../../resources/hair-and-beard-png-3.png";
import "./styles.scss";

const Header = ({ openPostModal, openSettings, openLoginModal }) => {
  const { logout } = useContext(UserContext);
  const { user, isAuthenticated } = useContext(UserContext);

  return (
    <div className="header">
      <div className="avatar">
        {isAuthenticated ? (
          <>
            <img id="avatarImage" src={UserAvatar} alt="avatar" />
            <p>{"Hej " + user.name}</p>
          </>
        ) : null}
      </div>
      <h1>Båtforum</h1>
      <div className="controls">
        {isAuthenticated ? (
          <>
            <FontAwesomeIcon onClick={openPostModal} id="new" icon={faPlus} />
            <FontAwesomeIcon onClick={openSettings} id="cog" icon={faCog} />
            <FontAwesomeIcon
              onClick={logout}
              id="sign-out-alt"
              icon={faSignOutAlt}
            />
          </>
        ) : (
          // <Link to="/login">
          <FontAwesomeIcon
            id="sign-in-alt"
            icon={faSignInAlt}
            onClick={openLoginModal}
          />
          // </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
