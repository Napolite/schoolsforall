import React from "react";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";

import education from "../assets/images/image 3.png";
import Food from "../assets/images/image 4.png";
import clothing from "../assets/images/image 6.png";
import educationframe from "../assets/images/Frame 25.png";
import foodFrame from "../assets/images/Frame 25 (1).png";
import clothingframe from "../assets/images/Frame 25 (2).png";

const Dictates = () => {
  return (
    <div>
      <div>
        <div
          className="dictate-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="dictate-section-image">
            <img src={educationframe} className="dictates-frame" alt="edu" />{" "}
            <img src={education} className="dictates-image" alt="" />
          </div>
          <div className="notes">
            <div className="notes-header">Education</div>
            <div className="notes-sub-header">
              Donations are channeled into providing underpriviledged African
              kids quality education
            </div>
            <div className="notes-note">
              Donating to help cover the cost of shipping the books and school
              supplies. You can be the person who opens the door to education
              for a deserving student in need.. One way you can help is by
              sponsoring a child's education through monthly giving <br />
              <br /> <br />
              <br />
              `Nisl posuere eget ipsum mattis. Urna, penatibus netus sapien
              risus at sodales sed sit. Ut auctor integer egestas varius
              habitasse. Ultricies elementum risus nam ut vivamus interdum leo.
              Bibendum et vestibulum scelerisque viverra sit nulla commodo ut
              ac. Varius venenatis bibendum consectetur porta sit. Quis sed
              vitae, sed dignissim
            </div>
          </div>
        </div>
        <div
          className="dictate-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="dictate-section-image">
            <img src={foodFrame} className="dictates-frame" alt="edu" />{" "}
            <img src={Food} className="dictates-image" alt="" />
          </div>
          <div className="notes">
            <div className="notes-header">FOOD</div>
            <div className="notes-sub-header">
              Combating malnutrition by providing school meals for children
            </div>
            <div className="notes-note">
              There are far too many starving kids in Africa, every single
              affected kid is one too much. ... In sub-Saharan Africa, 40% of
              children are affected; in South Asia, 39%. 3.2 million children
              under the age of 5 die each year in sub-Saharan Africa - that's
              about half of the world's deaths in this age group. <br />
              <br /> <br />
              <br /> Access to food is primarily the result of poverty and
              inequalities in income. The proportion of people in extreme
              poverty in sub-Saharan Africa was estimated at 41% in 2015.
              Poverty is especially serious amongst children
            </div>
          </div>
        </div>
        <div
          className="dictate-section"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="dictate-section-image">
            <img src={clothingframe} className="dictates-frame" alt="edu" />
            <img src={clothing} className="dictates-image" alt="" />
          </div>
          <div className="notes">
            <div className="notes-header">CLOTHING</div>
            <div className="notes-sub-header">
              Providing underpriviledged children with clothes
            </div>
            <div className="notes-note">
              Schools4all does not only build schools to educate children. We
              use your donations to buy clothes for these school children around
              Africa.twe also send large amount of clothes to Africa. We donate
              all clothes we send to Africa to help victims of poverty.
              <br /> <br />
              <br /> Arcu, eget morbi tempor porttitor risus. Ultrices dictumst
              pulvinar et velit. Vitae pellentesque nisl nisi, turpis enim
              blandit pretium. Ipsum, enim commodo pretium aenean elit, ut.
              Nunc, arcu mauris porta pharetra nec cursus. Imperdiet et, tellus
              faucibus augue augue aliquam. Augue mauris neque pellentesque
              pretium odio.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dictates;
