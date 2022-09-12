import "./App.css";
import Sponsors from "./brands";
import Dictates from "./dictates";
import Home from "./main";
import Mission from "./mission";
import Statement from "./statement";

function App() {
  return (
    <div className="App">
      <div>
        <Home />
      </div>
      <div>
        <Sponsors />
      </div>
      <div>
        <Statement />
      </div>
      <div>
        <Mission />
      </div>
      <div>
        <Dictates />
      </div>
    </div>
  );
}

export default App;
