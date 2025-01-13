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
            <Navbar />
            <Home />
            <About />
            <Skill />
            <Experience />
            <Project />
            <Contact />
            <Footer />
            {/* <ContactPopup isOpen={isPopupOpen} onClose={closePopup} /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
