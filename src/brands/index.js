/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import "./index.css";

import greenPeace from "../assets/brands/greenpeace.png";
import pepsi from "../assets/brands/pepsi.png";
import amazon from "../assets/brands/amazon.png";
import unicef from "../assets/brands/unicef.png";
import puma from "../assets/brands/puma.png";
import hat from "../assets/vectors/Frame 13.png";
import shorts from "../assets/vectors/Frame 15.png";
import apple from "../assets/vectors/Frame 14.png";

const Sponsors = () => {
  return (
    <div className="brand-root">
      <div className="sponsor-brands">
        <img src={pepsi} />
        <img src={unicef} />
        <img src={greenPeace} />
        <img src={puma} />
        <img src={amazon} />
      </div>
      <div className="brand-note">
        We are passionate about eradicating <font>illiteracy</font> in africa
        <div className="dash"></div>
      </div>
      <div className="brand-targets">
        <div>
          <img src={hat} />
          <h4>Education</h4>
          <p>
            Every donation we get goes into building schools and providing
            school materials like books, pens and bags .
          </p>
        </div>
        <div>
          <img src={apple} />
          <h4>Food</h4>
          <p>
            School meals are an important part of our mission as children need
            quality food to stay healthy and function academically.
          </p>
        </div>
        <div>
          <img src={shorts} />
          <h4>Clothing</h4>
          <p>
            Providing children with better clothing for school and off-school
            activities and taking off rags from their backs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
