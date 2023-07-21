import React, { useState, useEffect } from 'react';
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
            <a href="#">
              <img src={logo} />
            </a>
          </div>
          <ul className="links">
            <li>
              <a href="#home" className='nav-link'>Home</a>
            </li>
            <li>
              <a href="#about" className='nav-link'>About</a>
            </li>
            <li>
              <a href="#skill" className='nav-link'>Skill</a>
            </li>
            <li>
              <a href="#project" className='nav-link'>Project</a>
            </li>
            <li>
              <a href="#faq" className='nav-link'>Faq</a>
            </li>
          </ul>
          <li className="action_btn">
            <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target="_blank">
              Contact
            </a>
          </li>
          <div className="toggle_btn" onClick={handleToggle}>
            <h6>{isOpen ? <CloseIcon /> : <MenuIcon />}</h6>
          </div>
        </div>
        <div>
          <ul className={`dropdown_menu ${isOpen ? 'open' : 'close'}`}>
            <li onClick={handleToggle}>
              <a href="#home" className='drop-link'>Home</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#about" className='drop-link'>About</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#skill" className='drop-link'>Skill</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#project" className='drop-link'>Project</a>
            </li>
            <li onClick={handleToggle}>
              <a href="#faq" className='drop-link'>Faq</a>
            </li>
            <li className="action_btn" onClick={handleToggle}>
              <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target='_blank'>Contact</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
