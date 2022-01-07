import React from "react";
import { Link } from "react-router-dom";
import './header.css';
const Header = () => {
  return (
      <div className="ui inverted menu">
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

  );
};

export default Header;
