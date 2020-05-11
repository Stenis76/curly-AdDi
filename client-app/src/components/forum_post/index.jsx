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
        <div className="postheader">
          <h4 className="role">Member</h4>
          <h4 className="date">posted: 2020-05-11</h4>
        </div>
        <h4>Rubrik</h4>
        <p className="content">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
          tempora dolorem quidem, distinctio quas nam. Natus ratione hic quia
          fugit, molestiae at sunt perspiciatis autem eius nisi corrupti odit
          eos.
        </p>
      </div>
    </div>
  );
};

export default ForumPost;
