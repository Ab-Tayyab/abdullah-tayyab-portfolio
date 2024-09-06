import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo2.png";
import ScrollToTop from "../topScrolling/scrolling";

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

  const onDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./abdullah tayyab resume.pdf";
    link.click();
  };
  return (
    <nav className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar">
        <div className="navbar-logo">
          <a href="/">
            <img src={logo} alt="Portfolio Logo" />
          </a>
        </div>
        <div className={`navbar-menu all-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li onClick={handleToggle}>
              <a href="#home">Home</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#about">About</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#skill">Skill</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#project">Project</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#faq">Faq</a>
            </li>
            <li className="action_btn" onClick={handleToggle}>
              <a href="#contact">Contact</a>
            </li>
            <button className="resume-btn" onClick={onDownloadResume}>
              Reasume
              <i class="fa fa-download"></i>
            </button>
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
            <a href="#home">Home</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#about">About</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#skill">Skill</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#project">Project</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#faq">Faq</a>
          </li>
          <li onClick={handleToggle}>
            <a href="#contact">Contact</a>
          </li>
          <button className="resume-btn" onClick={onDownloadResume}>
            Reasume
            <i class="fa fa-download"></i>
          </button>
        </ul>
      </div>
      <ScrollToTop />
    </nav>
  );
};

export default Navbar;
