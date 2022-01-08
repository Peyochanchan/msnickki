import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className="ui top fixed inverted menu">
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
    <div className="separator">
      </div>
    </React.Fragment>
  );
};

export default Header;
