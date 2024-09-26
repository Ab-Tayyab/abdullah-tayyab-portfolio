import React, { useEffect, useState } from "react";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Skill from "./component/skill/Skill";
import Project from "./component/project/Project";
import Faq from "./component/faqs/Faq";
import Contact from "./component/contact/Contact";
import Footer from "./component/footer/Footer";
import CustomCursor from "./component/customCursor/cursor";
import Loading from "./component/loading/loading";
import ContactPopup from "./component/contactPopup/ContactPopup";
import { Helmet } from "react-helmet";
import photo from "./images/logo3.png";
import AOS from "aos";
import "aos/dist/aos.css";

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
      }, 100);

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
    <div>
      <Helmet>
        <title>Abdullah Tayyab</title>
        <link
          rel="icon"
          href={photo}
          style={{ width: "32px", height: "32px" }}
        />
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
            <Project />
            <Faq />
            <Contact />
            <Footer />

            {/* Contact Popup */}
            <ContactPopup isOpen={isPopupOpen} onClose={closePopup} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
