import React, { useEffect, useState } from 'react';
import Navbar from './component/navbar/Navbar';
import Home from './component/home/Home'
import About from './component/about/About';
import Skill from './component/skill/Skill';
import Project from './component/project/Project';
import Faq from './component/faqs/Faq';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Helmet } from 'react-helmet';
import photo from './images/logo3.png';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Abdullah Tayyab</title>
        <link rel="icon" href={photo} style={{ width: '32px', height: '32px' }} />
      </Helmet>
      <div className="scroll-container">
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
            <Navbar />
            <Home />
            <About />
            <Skill />
            <Project />
            <Faq />
            <Contact />
            <Footer />
          </>
        )}
      </div>
    </div>
  );
};

export default App;

