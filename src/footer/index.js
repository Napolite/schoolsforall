import React from "react";
import "./index.css";

import insta from "../assets/vectors/insta.png";
import facebook from "../assets/vectors/facebook.png";
import twiter from "../assets/vectors/twitter.png";

const Footer = () => {
  return (
    <div className="footer-root">
      <div className="footer-right">
        <div className="footer-logo">
          Schools<font>4</font>all
        </div>
        <div className="footer-slogan">
          eradicating illiteracy in Africa by utailzing world donations to build
          schools, feed and clothe Africa's children
        </div>
        <div className="footer-images">
          <img src={twiter} alt="" />
          <img src={facebook} alt="" />
          <img src={insta} alt="" />
        </div>
        <div className="footer-details">
          <div>
            <div className="footer-details-head">About us</div>
            <div>About</div>
            <div>Missions</div>
            <div>Regions</div>
            <div>Sponsors</div>
            <div>Policies</div>
            <div>Donate</div>
          </div>
          <div>
            <div className="footer-details-head">Contact US</div>
            <div>Home</div>
            <div>Schools</div>
            <div>Regions</div>
            <div>Sponsors</div>
            <div>Foundations</div>
          </div>
        </div>
      </div>
      <div className="footer-left">
        <div className="send-message">Send us a message</div>
        <div className="send-message-note">
          Donating to help cover the cost of shipping the books and school
        </div>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="message" />
          <input type="button" value="SEND MESSAGE" />
        </form>
      </div>
    </div>
  );
};

export default Footer;
