import React, { useState, useEffect } from "react";
import moment from "moment";

import UserAvatar from "../../resources/hair-and-beard-png-3.png";

import "./styles.scss";

// props={ username: Dick, email: dkdd}
const ForumPost = ({ post }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // fetch(`http://localhost:3002/api/users/${post.}`)
  }, []);

  return (
    <div className="forum-post">
      <div className="avatar">
        <img id="avatarImage" src={UserAvatar} alt="avatar" />
        <p>{post.username}</p>
        {/* <h4 className="role">{user.role ? user.role : ""}</h4> */}
      </div>
      <div className="post">
        <div className="postheader">
          <h4 className="date">posted: {post.date}</h4>
        </div>
        <h4>{post.title}</h4>
        <p className="content">{post.content}</p>
      </div>
    </div>
  );
};

export default ForumPost;
