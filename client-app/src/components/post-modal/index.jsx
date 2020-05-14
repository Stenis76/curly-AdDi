import React, { useState, useContext } from "react";
import Loader from "react-loader-spinner";

import UserContext from "../../contexts/user-contexts/context";

import CustomButton from "../custom_button/custom_button";
import FormInput from "../form_input/form_input";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const PostModal = ({ closePostModal, addPost }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  const [state, setState] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);

      const newPost = {
        title: state.title,
        username: user.username,
        content: state.content,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      };

      const res = await fetch("http://localhost:3002/api/posts", options);
      const data = await res.json();

      if (data.message) {
        return alert("Fyll i alla fält i inlägget!");
      }

      addPost(data);
      setLoading(false);
      closePostModal();
    } catch (error) {
      console.log("Error while posting", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="modal-container">
      <div className="input-form">
        <div className="modal-header">
          <FormInput
            id="title-form"
            handleChange={handleChange}
            label="Rubrik"
            name="title"
            type="text"
            value={state.title}
            required
          ></FormInput>
          <FontAwesomeIcon id="exit" icon={faTimes} onClick={closePostModal} />
        </div>
        <textarea
          id="text-area-form"
          onChange={handleChange}
          label="Skriv ditt inlägg här"
          name="content"
          type="text"
          value={state.content}
          required
        ></textarea>
        <div id="submit">
          {loading ? (
            <Loader type="TailSpin" color="#00BFFF" height={70} width={70} />
          ) : (
            <CustomButton handleClick={handleSubmit} type="button">
              lägg upp på forumet
            </CustomButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostModal;
