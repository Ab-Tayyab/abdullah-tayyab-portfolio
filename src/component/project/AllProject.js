import React, { useState } from "react";
import "./AllProject.css";
import { projectdata } from "./ProjectAPI";

const AllProject = () => {
  const [projectCategory, setProjectCategory] = useState("All Projects");

  const uniqueCategory = ["All Projects", "Feature-Project", "HTML-&-CSS", "Javascript", "React", "Full-Stack"];

  const handleClick = (item) => {
    setProjectCategory(item);
  };

  const filteredProjects =
    projectCategory === "All Projects"
      ? projectdata
      : projectdata.filter((item) => item.category.includes(projectCategory));

  return (
    <div className="all-project-main" id="project">
      <h1>My Projects</h1>

      <div className="all-project-container">
        <div className="all-project-menu">
          {uniqueCategory.map((category, index) => (
            <button className="project-btn" key={index} onClick={() => handleClick(category)}>
              {category.replace(/-/g, " ")}
            </button>
          ))}
        </div>

        <div className="all-project-parent">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((item) => (
              <div
                className="all-project-child"
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                key={item.id}
              >
                <img src={item.img} alt={item.name} className="all-project-img" />
                <div className="all-project-overlay">
                  <h1>{item.name}</h1>
                  <div className="project-links">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-link" /> Live Site
                    </a>
                    <a href={item.github} target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github" /> GitHub
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
      </div>
    </div>
  );
};

export default AllProject;
