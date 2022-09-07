import React from "react";
import "./index.css";

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
        <div></div>
      </div>
    </div>
  );
};

export default Statement;
