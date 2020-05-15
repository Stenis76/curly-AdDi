import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import moment from "moment";

import Header from "../../components/Header";
import ForumPost from "../../components/forum_post";
import PostModal from "../../components/post-modal";
import UserSettings from "../../components/user_settings";

import "./styles.scss";
import Sidebar from "../../components/sidebar";

const MainPage = () => {
  const [showPostModal, setShowPostModal] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [postToEdit, setPostToEdit] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:3002/api/posts", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
  }, []);

  const removePost = (postId) => {
    const options = {
      method: "DELETE",
      credentials: "include",
    };
    fetch("http://localhost:3002/api/posts/" + postId, options)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "removed post") {
          const updatedPosts = posts.filter((post) => post._id !== postId);
          setPosts(updatedPosts);
        }
      });
  };

  const openEditModal = (postId) => {
    setPostToEdit(posts.find((post) => post._id === postId));
    setShowPostModal(true);
  };

  const openPostModal = () => setShowPostModal(true);
  const closePostModal = () => {
    setShowPostModal(false);
    setPostToEdit(undefined);
  };
  const openSettings = () => setShowSettings(true);

  const closeSettings = () => setShowSettings(false);
  const addPost = (post) => setPosts([...posts, post]);

  const editPost = (updatedPost) => {
    const updatedPosts = posts.map((post) => {
      if (post._id === updatedPost._id) return updatedPost;
      else return post;
    });
    // console.log("post", posts);
    console.log("updated posts", updatedPost);

    setPosts(updatedPosts);
  };

  return (
    <div className="main-page">
      <Header openPostModal={openPostModal} openSettings={openSettings} />
      <div className="main-content">
        {showPostModal ? (
          <PostModal
            closePostModal={closePostModal}
            addPost={addPost}
            postToEdit={postToEdit}
            editPost={editPost}
          />
        ) : null}
        <div className="forum">
          <div className="post-list">
            {loading ? (
              <>
                {[0, 0, 0, 0, 0, 0].map((loader) => (
                  <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={70}
                    width={70}
                  />
                ))}
              </>
            ) : (
              posts.map((post) => (
                <ForumPost
                  key={post._id}
                  post={post}
                  removePost={removePost}
                  openEditModal={openEditModal}
                />
              ))
            )}
          </div>
        </div>
        {showSettings ? (
          <UserSettings closeSettings={closeSettings} />
        ) : (
          <Sidebar />
        )}
      </div>
    </div>
  );
};

export default MainPage;
