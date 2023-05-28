import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DrawerAppBar from './component/navbar/MenuBar';
import Home from './component/home/Home';
import About from './component/about/About';
import Footer from './component/footer/Footer';
import Skill from './component/skill/Skill';
import Project from './component/project/Project';
import AllProject from './component/project/AllProject';
import Contact from './component/contact/Contact';
import ScrollToTop from './component/ScrollTop';
import Faq from './component/faqs/Faq';
import Resume from './component/resume/Resume';

import { InfinitySpin } from 'react-loader-spinner'

import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="scroll-container">
      <BrowserRouter>
        {isLoading ? (
          <div className="loading-wrapper">
            <InfinitySpin
              width='200'
              color="#FFFFFF"
            />
          </div>
        ) : (
          <>
            <ScrollToTop />
            <DrawerAppBar />
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <Skill />
                    <Project id="third-component" />
                    <Faq />
                  </>
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/project" element={<AllProject />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  );


}

export default App;
