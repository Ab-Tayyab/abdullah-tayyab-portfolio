import React, { useState } from "react";
import "./Project.css";
import "../generalStyling.css"
import { projectdata } from "./ProjectAPI";

const Project = () => {
  const [projectCategory, setProjectCategory] = useState("Feature-Project");
  const [visibleProjects, setVisibleProjects] = useState(6);

  const uniqueCategory = [
    "Feature-Project",
    "Full-Stack",
    "React",
    "Javascript",
    "HTML-&-CSS",
    "All Projects",
  ];

  const handleClick = (item) => {
    setProjectCategory(item);
    setVisibleProjects(6);
  };

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 3);
  };

  const filteredProjects =
    projectCategory === "All Projects"
      ? projectdata
      : projectdata.filter((item) => item.category.includes(projectCategory));

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  return (
    <div className="projects-container section" id="project">
      <h1 className="heading-styling"><span className="heading-span">Projects</span></h1>

      <div className="projects-internal-container">
      <p className="projects-description text-styling">
        Showcasing a diverse collection of my projects, highlighting innovative
        solutions, technical expertise, and creative designs across various
        technologies.
      </p>
        <div className="project-menu">
          {uniqueCategory.map((category, index) => (
            <button
              className="btn-animation"
              key={index}
              onClick={() => handleClick(category)}
            >
              {category.replace(/-/g, " ")}
            </button>
          ))}
        </div>

        <div className="project-card-container">
          {projectsToShow.length > 0 ? (
            projectsToShow.map((item) => (
              <div
                className="project-card"
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                key={item.id}
              >
                <img src={item.img} alt={item.name} className="project-img" />
                <div className="project-overlay">
                  <h1>{item.name}</h1>
                  <p>{item.detail}</p>
                  <div className="tools">
                    {item.tools.split(",").map((tool, index) => (
                      <span key={index} className="tool">
                        {tool.trim()}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-external-link" />
                    </a>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa fa-github" />
                    </a>
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

        {filteredProjects.length > visibleProjects && (
          <button className="btn-animation show-more-btn" onClick={handleShowMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Project;
