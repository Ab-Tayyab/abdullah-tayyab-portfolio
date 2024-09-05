import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../images/logo2.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (event, targetId) => {
    event.preventDefault();
    setMenuOpen(false);

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
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
    <div className={`navbar-container ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>
            <a href="/">
              <img src={logo} alt="Portfolio Logo" />
            </a>
          </h1>
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
            <li className="action_btn text-animation" onClick={onDownloadResume}>
              <a >Resume</a>
              <i class="fa fa-download"></i>
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
      </nav>
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
          <li className="text-animation" onClick={onDownloadResume}>
          <a >Resume</a>
          <i class="fa fa-download"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
