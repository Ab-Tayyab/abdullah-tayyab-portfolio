import React, { useState,useEffect } from 'react';
import logo from '../../images/logo2.png'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';

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
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className="navbar">
          <div className="logo">
            <img src={logo} />
          </div>
          <ul className="links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#skill">Skill</a>
            </li>
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#faq">Faq</a>
            </li>
          </ul>
          <a href="#contact" className="action_btn">
            Contact
          </a>
          <div className="toggle_btn" onClick={handleToggle}>
            <h6>{isOpen ? <CloseIcon /> : <MenuIcon />}</h6>
          </div>
        </div>
        <div>
          <ul className={`dropdown_menu ${isOpen ? 'open' : 'close'}`}>
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
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
