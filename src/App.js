import { useEffect } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Sponsors from "./brands";
import Dictates from "./dictates";
import Footer from "./footer";
import Home from "./main";
import Mission from "./mission";
import Statement from "./statement";
import Testimonials from "./testinmonials";

function App() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="App">
      <div className="componen">
        <Home />
      </div>
      <div className="componen" data-aos="fade-up" data-aos-duration="2000">
        <Sponsors />
      </div>
      <div className="componen" data-aos="fade-up" data-aos-duration="2000">
        <Statement />
      </div>
      <div className="componen" data-aos="fade-up" data-aos-duration="2000">
        <Mission />
      </div>
      <div className="componen" data-aos="fade-up" data-aos-duration="2000">
        <Dictates />
      </div>
      <div className="componen" data-aos="fade-up" data-aos-duration="2000">
        <Testimonials />
      </div>
      <div className="componen" data-aos="fade-up" data-aos-duration="2000">
        <Footer />
      </div>
    </div>
  );
}

export default App;
