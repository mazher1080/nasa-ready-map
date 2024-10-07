import { Link } from "react-router-dom";
import logo from "../images/readymap-high-resolution-logo-transparent.png"

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-container">
          <Link to="/nasa-ready-map">
            <img className="nav-logo" src={logo} />
          </Link>
          <div className="nav-items">
            <Link to="/nasa-ready-map">Home</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
