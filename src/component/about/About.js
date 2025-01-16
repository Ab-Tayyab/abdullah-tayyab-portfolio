import React from "react";
import "./About.css";
import "../generalStyling.css";
const About = () => {
  return (
    <div className="section" id="about">
      <h1 className="text-styling heading-styling">
        <span className="heading-span">About</span> Me
      </h1>
      <div className="about-container">
        <div className="about-content">
          <p className="text-styling">
            I'm a MERN stack developer. Proficient in HTML, CSS, JavaScript,
            React, npm libraries, and GitHub, I have created user-friendly
            interfaces using frameworks like Bootstrap and MUI. I have
            experience integrating APIs and third-party libraries to enhance
            functionality. While my back-end experience, I understand principles
            of web development, including MongoDB and Node.js. I am
            self-motivated, with strong communication skills, and team work.
            Committed to continuous learning, I stay updated with trends and
            technologies in web development.
          </p>
        </div>

        <div className="about-skill-container">
          <div className="skill-outer-div orbit-outer">
            <div className="icon">HTML</div>
            <div className="icon">CSS</div>
            <div className="icon">JS</div>
            <div className="icon">React</div>
            <div className="icon">Npm</div>
            <div className="icon">Bootstrap</div>
            <div className="icon">MUI</div>
          </div>

          <div className="skill-internal-div orbit-middle">
            <div className="icon">Node</div>
            <div className="icon">Express</div>
            <div className="icon">MongoDB</div>
            <div className="icon">PostMan</div>
          </div>

          <div className="skill-inner-div orbit-inner">
            <div className="icon">Vs Code</div>
            <div className="icon">Git</div>
            <div className="icon">GitHub</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
