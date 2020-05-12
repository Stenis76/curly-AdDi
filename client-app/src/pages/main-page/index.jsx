import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import Header from "../../components/Header";
import ForumPost from "../../components/forum_post";
import PostModal from "../../components/post-modal";

import "./styles.scss";

const MainPage = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3002/api/posts")
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
  }, []);
  console.log(posts);

  return (
    <div className="main-page">
      <Header setShowPostModal={setShowPostModal} />
      <div className="main-content">
        {showPostModal ? (
          <PostModal setShowPostModal={setShowPostModal} />
        ) : null}
        <div className="forum">
          {loading ? (
            <Loader type="TailSpin" color="#00BFFF" height={70} width={70} />
          ) : (
            posts.map((post) => <ForumPost key={post._id} post={post} />)
          )}
        </div>
        <div className="sidebar">Kanske nån sidebar här</div>
      </div>
    </div>
  );
};

export default MainPage;
