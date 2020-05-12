import React, { useState } from "react";
import "./styles.scss";
import CustomButton from "../custom_button/custom_button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import FormInput from "../form_input/form_input";

const PostModal = (props) => {
  const handleClick = () => props.setShowPostModal(props.showPostModal);

  const [state, setState] = useState({
    name: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
    console.log(value);
  };
  return (
    <div className="modal-container">
      <div className="input-form">
        <div className="modal-header">
          <FormInput
            handleChange={handleChange}
            label="Rubrik"
            name="title"
            type="text"
            value={state.value}
            required
            className="title-form"
          ></FormInput>
          <FontAwesomeIcon id="exit" icon={faTimes} onClick={handleClick} />
        </div>
        <textarea className="text-area-form"></textarea>
        <div id="submit">
          <CustomButton type="submit">lägg upp på forumet</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
