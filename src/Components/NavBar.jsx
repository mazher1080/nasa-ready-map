import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-container">
          <Link to="/">
            <img className="nav-logo" src="../images/logo_placeholder.png" />
          </Link>
          <div className="nav-items">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/references">References</Link>
            <Link to="/our_team">Our Team</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
