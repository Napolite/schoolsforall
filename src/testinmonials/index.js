import React from "react";
import "./index.css";

import mapImage from "../assets/images/image 5.png";
import greenApple from "../assets/vectors/green apple.png";
import shorts from "../assets/vectors/Group.png";
import hat from "../assets/vectors/cil_school.png";

const Testimonials = () => {
  return (
    <div className="testimonials-root">
      <div className="testimonial-container">
        <div className="header">Testimonials</div>
        <div className="header-note">
          What we've <font>accomplished</font> with your help
        </div>
        <div className="dash"></div>
        <div>
          <img src={mapImage} alt="" className="map" />
          <div className="map-data">
            <img src={hat} alt="" />
            <p>Built 50 schools</p>
          </div>
          <div className="map-data">
            <img src={greenApple} alt="" />
            <p>Fed 3 million</p>
          </div>
          <div className="map-data">
            <img src={shorts} alt="" />
            <p>Clothed 1 million</p>
          </div>
        </div>
        <div className="footer-data">
          <div>
            <p>50</p>
            <p>We've built 50 schools in west africa</p>
          </div>
          <div>
            <p>3</p>
            <p>School4all has fed over 3 million children</p>
          </div>
          <div>
            <p>1</p>
            <p>Alsodistributed clothes to 1 million</p>
          </div>
        </div>
      </div>
      <div className="last-note">
        <div>
          Donating to help cover the cost of shipping the books and school
          supplies. You can be the person who opens the door to education for a
          deserving student in need.. One way you can help is by sponsoring a
          child's education through monthly giving Donating to help cover the
          cost of shipping the books and school supplies. You can be the person
          who opens the door to education for a deserving student in need.. One
          way you can help is by sponsoring a child's education through monthly
          giving
        </div>
        <div>
          <button>LEARN MORE</button>
          <button>DONATE</button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
