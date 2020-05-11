import React from "react";

import "./styles.scss";
import Header from "../../components/Header";

const MainPage = () => {
  return (
    <div className="main-page">
      <Header />
      <div className="sidebar">Kanske nån sidebar här</div>
      <div className="forum">
        <h1>Nu är du på Huvudsidan</h1>
        <p>Här ligger alla foruminläggen</p>
      </div>
    </div>
  );
};

export default MainPage;
