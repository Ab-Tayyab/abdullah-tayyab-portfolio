import React from "react";
import './About.css'
import '../generalStyling.css'
const About = () => {
  return (
    <div className="about-container section" id="about">
      <div className="about-content">
        <p className="text-styling">
          I'm a MERN stack developer. Proficient in HTML, CSS, JavaScript,
          React, npm libraries, and GitHub, I have created user-friendly
          interfaces using frameworks like Bootstrap and MUI. I have experience
          integrating APIs and third-party libraries to enhance functionality.
          While my back-end experience, I understand principles of web
          development, including MongoDB and Node.js. I am self-motivated, with
          strong communication skills, and team work. Committed to continuous
          learning, I stay updated with trends and technologies in web
          development.
        </p>
      </div>
      <div className="about-heading">
        <h1 className="text-styling heading-styling"><span className="heading-span">About</span> Me</h1>
      </div>
    </div>
  );
};

export default About;
