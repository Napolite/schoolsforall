import "./App.css";
import Sponsors from "./brands";
import Home from "./main";
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
    </div>
  );
}

export default App;
