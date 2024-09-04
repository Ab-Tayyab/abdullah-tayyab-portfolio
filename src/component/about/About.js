import React, { useState } from "react";
import "./About.css";
import img from "../../images/photo2.png";

const About = () => {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const onDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "./abdullah tayyab resume.pdf";
    link.click();
  };
  const onDownloadCoverLetter = () => {
    const link = document.createElement("a");
    link.href = "./abdullah tayyab cover letter.pdf";
    link.click();
  };

  const skills = [
    { name: "HTML", level: 85 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 75 },
    { name: "React JS", level: 70 },
    { name: "Npm Libraries", level: 65 },
    { name: "MUI", level: 80 },
    { name: "Bootstrap", level: 60 },
    { name: "Git & GitHub", level: 70 },
  ];
  return (
    <div className="about-container" id="about">
      <h1 className="about-heading">Know Me More</h1>
      <div className="about-nav">
        <button
          onClick={() => handleSectionClick("about")}
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </button>
        <button
          onClick={() => handleSectionClick("experiences")}
          className={activeSection === "experiences" ? "active" : ""}
        >
          Experiences
        </button>
      </div>
      <div className="about-content">
        {activeSection === "about" && (
          <div className="slide-animation about">
            <div>
              <h1 className="about-name">
                I'm <span>Abdullah Tayyab</span>, a Web Developer
              </h1>
              <p className="detail">
                I'm a MERN stack developer with six months of experience in
                front-end web development. I am skilled in HTML, CSS,
                JavaScript, React, npm libraries, and GitHub. I have worked with
                front-end frameworks like Bootstrap and MUI to create visually
                appealing and user-friendly interfaces. I have integrated APIs
                and third-party libraries into my projects to enhance
                functionality. Although my back-end development experience is
                limited, I have a basic understanding of web development
                principles, including working with databases like MongoDB and
                server-side languages like Node.js. I am a self-motivated
                individual with strong communication skills, capable of working
                both independently and collaboratively with teams and clients. I
                am dedicated to continuous learning and keeping right with the
                latest trends and technologies in front-end and back-end web
                development.
              </p>
            </div>
            <div>
              <img src={img} alt="Personal Photo" className="about-img" />
            </div>
          </div>
        )}
        {activeSection === "experiences" && (
          <div className="slide-animation experiences">
            <div>
              <div className="p-experience">
                <h1>React JS InternShip</h1>
                <h2>Gamica Cloud Mar 22 - Dec 22</h2>
                <p>
                  My experience at Gamica Cloud has allowed me to develop my
                  skills as a React-JS developer and to work on a variety of
                  exciting projects which is mentioned in project section.
                </p>
              </div>
              <div className="p-experience">
                <h1>Mern Stack BootCamp</h1>
                <h2>TechLift, PASHA & PSEB Jan 23 - Mar 23</h2>
                <p>
                  Create an Ecommerce Site using React-JS, Redux & Bootstrap and
                  also create backend using Node JS with Express-JS and MongoDB
                </p>
              </div>
              <div className="p-experience">
                <h1>React JS InternShip</h1>
                <h2>Internee.PK AUG 24 - SEP 24</h2>
                <p>
                  Create an multiple Site using React-JS, Redux, firebase and
                  restfull API.
                </p>
              </div>

              <div className="about-experience">
                <div>
                  <h2>6+</h2>
                  <h3>Months of Experiences</h3>
                </div>
                <div>
                  <h2>10+</h2>
                  <h3>Projects Completed</h3>
                </div>
              </div>
              <div className="about-btn">
                <button className="about-btn1" onClick={onDownloadResume}>
                  Resume
                </button>
                <button className="about-btn2" onClick={onDownloadCoverLetter}>
                  Cover Letter
                </button>
              </div>
            </div>
            <div>
              <h2 className="about-child2-skill">
                <span>Skills:</span>
              </h2>
              <div className="skill-bars">
                {skills.map((skill) => (
                  <div
                    className="skill-bar"
                    key={skill.name}
                    style={{ maxWidth: "500px" }}
                  >
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="bar">
                      <div
                        className="fill"
                        style={{
                          width: `${skill.level}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
