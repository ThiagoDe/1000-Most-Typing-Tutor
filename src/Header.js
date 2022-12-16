import React from "react";
// import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="header-logo">
          1000 Most
        </a>
        <nav className="header-nav">
          <a href="/about" className="header-nav-link">
            About
          </a>
          <a href="/topics" className="header-nav-link">
            Topics
          </a>
          <a href="/contact" className="header-nav-link">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
