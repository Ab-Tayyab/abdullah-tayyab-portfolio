import React, { useEffect, useState } from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './MenuBar.css';

const Navbar = () => {
  const [scrollDown, setScrollDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setScrollDown(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    document.body.classList.toggle('open');
  };

  return (
    <div className="navbar-container">
      <div className={`navbar ${scrollDown ? 'shadow' : ''}`}></div>
      <nav className="navbar">
        <Link to="/" style={{
          textDecoration: "none",
          color: "white",
        }}>
          <img className="navbar-logo" src={logo} alt="Logo" />
        </Link>
      </nav>
      <button className="navbar-burger" onClick={toggleMenu}></button>
      <nav className="menu">
        <a className='odd' href="#home" style={{ animationDelay: '0.2s', scrollBehavior: "smooth" }} onClick={toggleMenu}>
          Home
        </a>
        <a className='even' href="#about" style={{ animationDelay: '0.4s', scrollBehavior: "smooth" }} onClick={toggleMenu}>
          About
        </a>
        <a className='odd' href="#skill" style={{ animationDelay: '0.6s', scrollBehavior: "smooth" }} onClick={toggleMenu}>
          Skill
        </a>
        <a className='even' href="#project" style={{ animationDelay: '0.8s', scrollBehavior: "smooth" }} onClick={toggleMenu}>
          Projects
        </a>
        <a className='odd' href="#resume" style={{ animationDelay: '1s', scrollBehavior: "smooth" }} onClick={toggleMenu}>
          Resume
        </a>
        <a className='even' href="#faq" style={{ animationDelay: '1.2s', scrollBehavior: "smooth" }} onClick={toggleMenu}>
          Faq
        </a>
        <a className='odd' href="#contact" style={{ animationDelay: '1.4s', scrollBehavior: "smooth" }} onClick={toggleMenu}>
          Contact
        </a>
        <div className="social-icon">
          <a href="https://www.facebook.com/this.abdullah.8/" target="_blank" rel="noopener noreferrer" style={{ animationDelay: '1.6s' }}>
            <FacebookOutlinedIcon />
          </a>
          <a href="https://github.com/AbdullahTayyab894" target="_blank" rel="noopener noreferrer" style={{ animationDelay: '1.8s' }}>
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/abdullahtayyab894/" target="_blank" rel="noopener noreferrer" style={{ animationDelay: '2s' }}>
            <LinkedInIcon />
          </a>
          <a href="https://wa.me/+923184579618" target="_blank" rel="noopener noreferrer" style={{ animationDelay: '2.2s' }}>
            <WhatsAppIcon />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
