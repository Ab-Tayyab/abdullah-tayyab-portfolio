import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo2.png";
import ScrollToTop from "../topScrolling/scrolling";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Portfolio Logo" />
          </Link>
        </div>
        <div className={`navbar-menu all-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={handleToggle}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleToggle}>
            <Link to="/about">About</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to="/all-projects">Project</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to="/faqs">Faq</Link>
            </li>
          </ul>
        </div>
        <div
          className={`navbar-toggle ${menuOpen ? "change" : ""}`}
          id="toggle-button"
          onClick={handleToggle}
        >
          <div className="btn1 all-btn"></div>
          <div className="btn2 all-btn"></div>
          <div className="btn3 all-btn"></div>
        </div>
      </div>
      <div
        id="mobileMenu"
        className={`mobile-menu all-menu ${menuOpen ? "open" : ""}`}
      >
        <ul>
            <li onClick={handleToggle}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleToggle}>
            <Link to="/about">About</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to="/all-projects">Project</Link>
            </li>
            <li onClick={handleToggle}>
              <Link to="/faqs">Faq</Link>
            </li>
          </ul>
      </div>
      <ScrollToTop />
    </nav>
  );
};

export default Navbar;
