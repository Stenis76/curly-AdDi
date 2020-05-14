import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import moment from "moment";

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

  const openPostModal = () => setShowPostModal(true);
  const closePostModal = () => setShowPostModal(false);

  const addPost = (post) => setPosts([...posts, post]);

  return (
    <div className="main-page">
      <Header openPostModal={openPostModal} />
      <div className="main-content">
        {showPostModal ? (
          <PostModal closePostModal={closePostModal} addPost={addPost} />
        ) : null}
        <div className="forum">
          {loading ? (
            <Loader type="TailSpin" color="#00BFFF" height={70} width={70} />
          ) : (
            posts
              // .sort((a, b) => {
              //   const bool = moment(a.date).isBefore(b.date);
              //   console.log("hello", bool);

              //   return bool;
              // })
              .map((post) => <ForumPost key={post._id} post={post} />)
          )}
        </div>
        <div className="sidebar">Kanske nån sidebar här</div>
      </div>
    </div>
  );
};

export default MainPage;
