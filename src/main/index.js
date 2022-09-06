import React from "react";
import "./index.css";

const Home = () => {
  return (
    <div className="home-root">
      <nav className="nav-bar">
        <div className="home-logo">
          Schools<font>4</font>all
        </div>
        <div className="nav-menu">
          <div>Home</div>
          <div>Regions</div>
          <div>Foundations</div>
          <div>About</div>
        </div>
        <div>
          <button className="donate">Donate</button>
        </div>
      </nav>
      <div className="home-body">
        <div className="home-note">
          A <font>penny</font> can give a child an education
        </div>
        <p>
          School4all is passionate about bringing quality education to Africa’s
          street children feeding them and keeping them off the streets. Your
          donation is giving these children an opportunity to pursue their
          dreams
        </p>
      </div>
      <div className="home-footer">
        <div>Join our newsletter to find ongoing projects and campaigns</div>
        <div className="form">
          <input type="text" placeholder="Email address" />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
