import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import OurTeam from "./Components/OurTeam";
import References from "./Components/References";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/references" element={<References />} />
            <Route path="/our_team" element={<OurTeam />} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
