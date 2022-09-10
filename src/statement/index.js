/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./index.css";
import v1 from "../assets/vectors/Vector (2).png";
import v2 from "../assets/vectors/Vector (3).png";
import v3 from "../assets/vectors/Vector (4).png";

const Statement = () => {
  return (
    <div className="statement-root">
      <div className="statement-main">
        <div className="statement-left">
          <div className="statement-fact">
            <font>101 million children</font> in Africa are not in school
          </div>
          <div className="statement-note">
            Of an estimated 101 million children not in school, more than half
            are girls. However, this statistic increased when examining
            secondary school education. In high-income countries, 95% as many
            girls as boys attend primary and secondary schools. However, in
            sub-Saharan Africa the figure is just 60% and 37 million children
            receive extremely poor education.
          </div>
          <div className="statement-buttons">
            <button>Learn more</button>
            <button>Donate</button>
          </div>
        </div>
        <div className="statement-right">
          <div className="spindle">
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="statement-info">
            <img src={v3} />
            <div>70 million</div>
          </div>
          <div className="statement-info">
            <img src={v1} />
            <div>102 million</div>
          </div>
          <div className="statement-info">
            <img src={v2} />
            <div>30.2 million</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statement;
