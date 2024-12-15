import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Skill from "./component/skill/Skill";
import Project from "./component/project/Project";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import CustomCursor from "./component/customCursor/cursor";
import Loading from "./component/loading/loading";
import ContactPopup from "./component/contactPopup/ContactPopup";
import About from "./component/about/About";
import AllProject from "./component/project/AllProject";
import Faq from "./component/faqs/Faq";
import { Helmet } from "react-helmet";
import photo from "./images/logo3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      const popupTimer = setTimeout(() => {
        setIsPopupOpen(true);
      }, 10000);

      const intervalTimer = setInterval(() => {
        setIsPopupOpen(true);
      }, 90000);

      return () => {
        clearTimeout(popupTimer);
        clearInterval(intervalTimer);
      };
    }
  }, [isLoading]);

  const closePopup = () => {
    setIsPopupOpen(false); 
  };

  return (
    <div className="main-container">
      <Router>
        <Helmet>
          <title>Abdullah Tayyab</title>
          <link rel="icon" href={photo} />
        </Helmet>
        <div className="scroll-container">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <CustomCursor />
              <Navbar />
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Home />
                      <Skill />
                      <Project />
                      <Contact />
                      <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
                    </>
                  }
                />
                <Route path="/about" element={<About />} />
                <Route path="/all-projects" element={<AllProject />} />
                <Route path="/faqs" element={<Faq />} />
              </Routes>
              <Footer />
            </>
          )}
        </div>
      </Router>
    </div>
  );
};

export default App;
