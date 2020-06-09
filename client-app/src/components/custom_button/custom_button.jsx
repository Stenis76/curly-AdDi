import React from "react";

import "./custom_buttom.styles.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  type,
  handleClick,
  ...rest
}) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleSignIn ? "google-sign-in" : ""
    } custom-button`}
    type={type}
    onClick={handleClick}
    {...rest}
  >
    {children}
  </button>
);

export default CustomButton;
