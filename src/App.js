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
import { Helmet } from "react-helmet";
import photo from "./images/logo3.png";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
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
          </>
        )}
      </div>
    </div>
  );
};

export default App;
