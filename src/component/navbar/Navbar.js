import React, { useState, useEffect } from "react";
import logo from "../../images/logo2.png";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [isScrolled, setIsScrolled] = useState(false);
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
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        <div className="navbar">
          <div className="logo">
            <a href="#">
              <img src={logo} />
            </a>
          </div>
          <ul className="links">
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#skill" className="nav-link">
                Skill
              </a>
            </li>
            <li>
              <a href="#project" className="nav-link">
                Project
              </a>
            </li>
            <li>
              <a href="#faq" className="nav-link">
                Faq
              </a>
            </li>
          </ul>
          <li className="action_btn">
            <a href="#contact">Contact</a>
          </li>
          <div className="toggle_btn" onClick={handleToggle}>
            <h6>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 448 512"
                height="1.7em"
                width="1.7em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 224h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm416 192H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 44.83v38.34A12.82 12.82 0 0 0 172.83 96h262.34A12.82 12.82 0 0 0 448 83.17V44.83A12.82 12.82 0 0 0 435.17 32zm0 256H172.83A12.82 12.82 0 0 0 160 300.83v38.34A12.82 12.82 0 0 0 172.83 352h262.34A12.82 12.82 0 0 0 448 339.17v-38.34A12.82 12.82 0 0 0 435.17 288z"></path>
              </svg>
            </h6>
          </div>
        </div>
        <div>
          <ul className={`dropdown_menu ${isOpen ? "open" : "close"}`}>
            <div className="menu-close" onClick={handleToggle}>
              <h6>
                <svg className="close-icon"
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 352 512"
                  height="1.7em"
                  width="1.7em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
                </svg>
              </h6>
            </div>
            <li onClick={handleToggle}>
              <a href="#home" className="drop-link">
                Home
              </a>
            </li>
            <li onClick={handleToggle}>
              <a href="#about" className="drop-link">
                About
              </a>
            </li>
            <li onClick={handleToggle}>
              <a href="#skill" className="drop-link">
                Skill
              </a>
            </li>
            <li onClick={handleToggle}>
              <a href="#project" className="drop-link">
                Project
              </a>
            </li>
            <li onClick={handleToggle}>
              <a href="#faq" className="drop-link">
                Faq
              </a>
            </li>
            <li className="action_btn" onClick={handleToggle}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
