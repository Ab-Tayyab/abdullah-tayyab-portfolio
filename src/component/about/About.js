import React, { useState } from "react";
import "./About.css";
import img from "../../images/photo2.png";

function About() {
  const [activeSection, setActiveSection] = useState("about");

  const handleToggle = (section) => {
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
    <div className="about-container">
      <h1 className="about-heading">Know Me More</h1>
      <div className="nav">
        <button
          onClick={() => handleToggle("about")}
          className={activeSection === "about" ? "active" : ""}
        >
          ABOUT
        </button>
        <button
          onClick={() => handleToggle("expertise")}
          className={activeSection === "expertise" ? "active" : ""}
        >
          EXPERTISE
        </button>
      </div>

      <div className={`content ${activeSection}`}>
        <div
          className={`section about ${
            activeSection === "about" ? "show" : "hide"
          }`}
        >
          <div className="about-main">
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
        </div>
        <div
          className={`section expertise ${
            activeSection === "expertise" ? "show" : "hide"
          }`}
        >
          <div className="experties-main">
            <div>
              <h2 className="about-child2-name">
                <span>Name:</span>Abdullah Tayyab
              </h2>
              <h2 className="about-child2-email">
                <span>Email:</span>abdullahtayyab894@gmail.com
              </h2>

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
                    style={{ maxWidth: "500px" }} // Set maximum width for each bar
                  >
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="bar">
                      <div
                        className="fill"
                        style={{
                          width: `${skill.level}%`, // Correct usage of template literals
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
