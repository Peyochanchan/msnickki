import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";

const Header = () => {
  const location = useLocation();

  return (
    <React.Fragment>
      <div className="ui top fixed inverted four item menu">
        <Link to="/" className="item">
          Home
        </Link>
        <Link to="/videos" className="item">
          Videos
        </Link>
        <Link to="/photos" className="item">
          Photos
        </Link>
        <Link to="/dates" className="item">
          Dates
        </Link>
      </div>
      <div className={ `${location.pathname !== '/' ? "separator" : "begin_gently" }`}>
    </div>
    </React.Fragment>
  );
};

export default Header;
