import React from "react";
import "./styles.scss";
import CustomButton from "../custom_button/custom_button";

const ForumPostForm = () => {
  return (
    <div>
      <div className="form-post-container">
        <textarea className="input-forum-post">Skriv ditt inlägg här</textarea>
        <div>
          <CustomButton type="submit">posta</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ForumPostForm;
