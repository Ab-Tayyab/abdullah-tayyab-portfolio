import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "../generalStyling.css";
import logo from "../../images/logo2.png";
import ScrollToTop from "../topScrolling/scrolling";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Navbar = ({ onNavigate }) => {
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
    <nav
      className={`navbar-container ${isScrolled ? "scrolled" : ""}`}
      >
      <div className="navbar"
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      
      >
        <div className="navbar-logo">
          <div onClick={() => onNavigate("home")}>
            <img src={logo} alt="Portfolio Logo" />
          </div>
        </div>
        <div
          className={`links-animation navbar-menu all-menu ${
            menuOpen ? "open" : ""
          }`}
        >
          <ul>
            <li
              onClick={() => {
                onNavigate("home");
                handleToggle();
              }}
            >
              Home
            </li>
            <li
              onClick={() => {
                onNavigate("about");
                handleToggle();
              }}
            >
              About
            </li>
            <li
              onClick={() => {
                onNavigate("skill");
                handleToggle();
              }}
            >
              Skills
            </li>
            <li
              onClick={() => {
                onNavigate("experience");
                handleToggle();
              }}
            >
              Experience
            </li>
            <li
              onClick={() => {
                onNavigate("project");
                handleToggle();
              }}
            >
              Project
            </li>
            <li
              onClick={() => {
                onNavigate("contact");
                handleToggle();
              }}
            >
              Contact
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
        </div>
      </div>
      <div
        id="mobileMenu"
        className={`links-animation mobile-menu all-menu ${
          menuOpen ? "open" : ""
        }`}
      >
        <ul>
          <li
            onClick={() => {
              onNavigate("home");
              handleToggle();
            }}
          >
            Home
          </li>
          <li
            onClick={() => {
              onNavigate("about");
              handleToggle();
            }}
          >
            About
          </li>
          <li
            onClick={() => {
              onNavigate("skill");
              handleToggle();
            }}
          >
            Skills
          </li>
          <li
            onClick={() => {
              onNavigate("experience");
              handleToggle();
            }}
          >
            Experience
          </li>
          <li
            onClick={() => {
              onNavigate("project");
              handleToggle();
            }}
          >
            Project
          </li>
          <li
            onClick={() => {
              onNavigate("contact");
              handleToggle();
            }}
          >
            Contact
          </li>
        </ul>
        <div className="navbar-links links-animation">
          <a
            className="social"
            href="https://www.facebook.com/this.abdullah.8/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookOutlinedIcon />
          </a>
          <a
            className="social"
            href="https://github.com/Ab-Tayyab"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
          <a
            className="social"
            href="https://www.linkedin.com/in/abdullah--tayyab/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            className="social"
            href="https://wa.me/+923085630574"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </a>
        </div>
      </div>
      <ScrollToTop />
    </nav>
  );
};

export default Navbar;
