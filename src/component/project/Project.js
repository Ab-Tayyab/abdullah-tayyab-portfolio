import React, { useState } from "react";
import "./Project.css";
import { projectdata } from "./ProjectAPI";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleOpenPopup = (project) => {
    setSelectedProject(project);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 500);
  };

  return (
    <div className="project-main" id="project">
      <h1>My Projects</h1>
      <div className="project-parent">
        {projectdata.map((item) => {
          return (
            <div
              className="project-child"
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              key={item.id}
            >
              <img
                src={item.img}
                alt="item view"
                className="project-img"
                width="100%"
                height="250px"
              />
              <div className="project-overlay">
                <div className="project-text">
                  <h1 style={{ color: "white" }}>{item.name}</h1>
                  <i
                    className="fa fa-eye"
                    onClick={() => handleOpenPopup(item)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* popup  */}
      {selectedProject && (
        <div className={`popup-overlay ${isPopupVisible ? "active" : ""}`}>
          <div className="popup-content">
            <h1>{selectedProject.name}</h1>
            <h3>
              Tools: <span>{selectedProject.tools}</span>
            </h3>
            <h3>
              Description:<p>{selectedProject.detail}</p>
            </h3>
            <img src={selectedProject.img} alt={selectedProject.name} />
            <button onClick={handleClosePopup}>Close</button>
            <div>
              <a href={selectedProject.url} target="_blank">
                Site: <i class="fa fa-link" />
              </a>
              <a href={selectedProject.github} target="_blank">
                Github: <i class="fa fa-github" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
