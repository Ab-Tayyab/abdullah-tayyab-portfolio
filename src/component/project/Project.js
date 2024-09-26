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
      setSelectedProject(null); // Wait for the animation to finish before closing completely
    }, 500); // Match the animation duration (0.5s)
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
                  <p>{item.detail}</p>
                  {/* Button to open the popup */}
                  <button onClick={() => handleOpenPopup(item)}>More Details</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Fullscreen popup */}
      {selectedProject && (
        <div className={`popup-overlay ${isPopupVisible ? "active" : ""}`}>
          <div className="popup-content">
            <h1>{selectedProject.name}</h1>
            <p>{selectedProject.detail}</p>
            <img src={selectedProject.img} alt={selectedProject.name} width="100%" height="300px" />
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
