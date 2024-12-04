import React, { useState } from "react";
import "./Project.css";
import { projectdata } from "./ProjectAPI";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [projectCategory, setProjectCategory] = useState("Feature-Project");

  const uniqueCategory = ["Feature-Project", "HTML-&-CSS", "Javascript", "React", "Full-Stack"];

  const handleClick = (item) => {
    setProjectCategory(item);
  };

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

  const filteredProjects = projectdata.filter((item) =>
    item.category.includes(projectCategory)
  );

  return (
    <div className="project-main" id="project">
      <h1>My Projects</h1>

      <div className="project-container">
        <div>
          <div className="project-menu">
            {uniqueCategory.map((category, index) => (
              <button className="project-btn" key={index} onClick={() => handleClick(category)}>
                {category.replace(/-/g, " ")}
              </button>
            ))}
          </div>
              <div className="project-select">
            <select
              onChange={(e) => handleClick(e.target.value)}
            >
              {uniqueCategory.map((category, index) => (
                <option key={index} value={category}>
                  {category.replace(/-/g, " ")}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="project-parent">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((item) => (
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
            ))
          ) : (
            <div className="no-projects-message">
              <p>Coming Soon ...</p>
            </div>
          )}
        </div>
      </div>

      {/* Popup logic */}
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
                Site: <i className="fa fa-link" />
              </a>
              <a href={selectedProject.github} target="_blank">
                Github: <i className="fa fa-github" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project