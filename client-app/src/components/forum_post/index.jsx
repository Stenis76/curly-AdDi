import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../contexts/user-contexts/context";
import moment from "moment";

import UserAvatar from "../../resources/hair-and-beard-png-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

const ForumPost = ({ post, removePost, openEditModal }) => {
  const [author, setAuthor] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    fetch(`http://localhost:3002/api/users/${post.authorId}`)
      .then((res) => res.json())
      .then((author) => setAuthor(author));
  }, [post]);

  return (
    <div className="forum-post">
      <div className="avatar">
        <img id="avatarImage" src={UserAvatar} alt="avatar" />
        <p>{post.username}</p>
        <h4 className="role">{author ? author.role : ""}</h4>
      </div>
      <div className="post">
        <div className="postheader">
          <h4 className="date">posted: {post.date}</h4>
          {user._id === post.authorId ? (
            <>
              <FontAwesomeIcon
                id="edit"
                icon={faPen}
                onClick={() => openEditModal(post._id)}
              />
              <FontAwesomeIcon
                id="delete"
                icon={faTimes}
                onClick={() => removePost(post._id)}
              />
            </>
          ) : null}
        </div>
        <h4>{post.title}</h4>
        <p className="content">{post.content}</p>
      </div>
    </div>
  );
};

export default ForumPost;
