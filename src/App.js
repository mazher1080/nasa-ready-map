import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import OurTeam from "./Components/OurTeam";
import References from "./Components/References";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import {useJsApiLoader, GoogleMap } from '@react-google-maps/api'


const containerStyle = {
  width: '1000px',
  height: '700px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};


function App() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAbgg5uwWxwaNDLdbE2xwCPEPiJarmiiDk'
  })

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
