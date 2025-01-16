import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Skill from "./component/skill/Skill";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import CustomCursor from "./component/customCursor/cursor";
import Loading from "./component/loading/loading";
import ContactPopup from "./component/contactPopup/ContactPopup";
import About from "./component/about/About";
import Project from "./component/project/Project";
import { Helmet } from "react-helmet";
import photo from "./images/logo3.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./component/generalStyling.css";
import Experience from "./component/experience/Experience";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });

    // loading animation and popup
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 0);

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

  // Scroll to a section and update the URL path
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; 
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      if (id === "home") {
        window.history.pushState({}, "", `/`);
      } else {
        window.history.pushState({}, "", `/${id}`);
      }
    }
  };
  
  
  return (
    <div className="main-container">
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
            <Navbar onNavigate={scrollToSection} />
            <div id="home">
              <Home />
            </div>
            <div id="about">
              <About />
            </div>
            <div id="skill">
              <Skill />
            </div>
            <div id="experience">
              <Experience />
            </div>
            <div id="project">
              <Project />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <Footer />
            {/* <ContactPopup isOpen={isPopupOpen} onClose={closePopup} /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
