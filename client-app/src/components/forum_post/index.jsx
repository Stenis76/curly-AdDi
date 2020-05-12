import React from "react";
import "./styles.scss";
import UserAvatar from "../../resources/hair-and-beard-png-3.png";

// props={ username: Dick, email: dkdd}
const ForumPost = ({ post }) => {
  return (
    <div className="post-container">
      <div className="avatar">
        <img id="avatarImage" src={UserAvatar} alt="avatar" />
        <p>{post.username}</p>
      </div>
      <div className="post">
        <div className="postheader">
          <h4 className="role">Member</h4>
          <h4 className="date">posted: {post.date}</h4>
        </div>
        <h4>{post.title}</h4>
        <p className="content">{post.content}</p>
      </div>
    </div>
  );
};

export default ForumPost;
