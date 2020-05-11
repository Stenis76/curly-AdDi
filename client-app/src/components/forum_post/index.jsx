import React from "react";
import "./styles.scss";
import UserAvatar from "../../resources/hair-and-beard-png-3.png";

const ForumPost = () => {
  return (
    <div className="post-container">
      <div className="avatar">
        <img id="avatarImage" src={UserAvatar} alt="avatar" />
        <p>Mr segelbåt</p>
      </div>
      <div className="post">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
        tempora dolorem quidem, distinctio quas nam. Natus ratione hic quia
        fugit, molestiae at sunt perspiciatis autem eius nisi corrupti odit eos.
      </div>
    </div>
  );
};

export default ForumPost;
