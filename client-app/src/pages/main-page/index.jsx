import React from "react";

import "./styles.scss";
import Header from "../../components/Header";
import ForumPost from "../../components/forum_post";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="main-content">
        <div className="forum">
          <ForumPost />
          <ForumPost />
          <ForumPost />
          <ForumPost />
          <ForumPost />
          <ForumPost />
          <ForumPost />
          <ForumPost />
          <ForumPost />
          <ForumPost />
          <ForumPost />
          <ForumPost />
        </div>
        <div className="sidebar">Kanske nån sidebar här</div>
      </div>
    </div>
  );
};

export default MainPage;
