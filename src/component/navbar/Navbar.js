import React, { useState } from 'react';
import logo from '../../images/logo2.png'
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.classList.toggle('overflow');
    };

    return (
        <>
            <div className='navbar1'>
                <div className={`burger ${menuOpen ? 'clicked' : ''}`} onClick={toggleMenu}>
                    <span></span>
                </div>
                <div>
                    <a href='#home'>
                        <img className='logo' src={logo} />
                    </a>
                </div>
            </div>

            <nav className={`nav ${menuOpen ? 'show' : ''}`}>
                <ul className="main">
                    <li> <a href="#home" style={{ scrollBehavior: "smooth" }} onClick={toggleMenu}>
                        Home
                    </a></li>
                    <li> <a href="#about" style={{ scrollBehavior: "smooth" }} onClick={toggleMenu}>
                        About
                    </a></li>
                    <li> <a href="#skill" style={{ scrollBehavior: "smooth" }} onClick={toggleMenu}>
                        Skill
                    </a></li>
                    <li> <a href="#project" style={{ scrollBehavior: "smooth" }} onClick={toggleMenu}>
                        Projects
                    </a></li>
                    <li> <a href="#resume" style={{ scrollBehavior: "smooth" }} onClick={toggleMenu}>
                        Resume
                    </a></li>
                    <li>
                        <a href="#faq" style={{ scrollBehavior: "smooth" }} onClick={toggleMenu}>
                            Faq
                        </a>
                    </li>
                    <li>
                        <a href="#contact" style={{ scrollBehavior: "smooth" }} onClick={toggleMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <div className={`overlay ${menuOpen ? 'show' : ''}`}></div>
        </>
    );
};

export default Navbar;
