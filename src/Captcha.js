import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/home/Home';
import About from './component/about/About';
import Footer from './component/footer/Footer';
import Skill from './component/skill/Skill';
import Project from './component/project/Project';
import Contact from './component/contact/Contact';
import ScrollToTop from './component/ScrollTop';
import Faq from './component/faqs/Faq';
import Resume from './component/resume/Resume';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './component/navbar/Navbar';
const Captcha = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [showCaptcha, setShowCaptcha] = useState(false);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowCaptcha(true);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="scroll-container">
      <BrowserRouter>
        {isLoading ? (
          <ul className="loader" >
            <li style={{ '--i': 1 }}>W</li>
            <li style={{ '--i': 2 }}>E</li>
            <li style={{ '--i': 3 }}>L</li>
            <li style={{ '--i': 4 }}>C</li>
            <li style={{ '--i': 5 }}>O</li>
            <li style={{ '--i': 6 }}>M</li>
            <li style={{ '--i': 7 }}>E</li>
          </ul>
        ) : (
          <>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <About />
                    <Skill />
                    <Project />
                    <Resume />
                    <Faq />
                    <Contact />
                  </>
                }
              />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );
}

export default Captcha;