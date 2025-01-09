import React from "react";
import "./Project.css";
import { projectdata } from "./ProjectAPI";
import GitHubIcon from "@mui/icons-material/GitHub";
import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Link } from "react-router-dom";


const Project = () => {
  const filteredProjects = projectdata.filter((item) =>
    item.category.includes("Feature-Project")
  );

  return (
    <div className="project-main" id="project">
      <h1>Feature Projects</h1>
      {filteredProjects.map((item) => (
        item.id % 2 === 0 ? (
          <div className="project-container reverse" key={item.id}>
            <div className="child1">
              <img src={item.img} alt="item view" className="project-img" />
            </div>
            <div className="child2">
              <h1>{item.name}</h1>
              <p>{item.detail}</p>
              <div className="tools">
                {item.tools.split(",").map((tool, index) => (
                  <span key={index} className="tool">
                    {tool.trim()}
                  </span>
                ))}
              </div>
              <div className="project-link">
                <a href={item.github} target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <NorthEastIcon />
                </a>
              </div>
            </div>
          </div>
        ) : (
          <div className="project-container" key={item.id}>
            <div className="child3">
              <h1>{item.name}</h1>
              <p>{item.detail}</p>
              <div className="tools">
                {item.tools.split(",").map((tool, index) => (
                  <span key={index} className="tool">
                    {tool.trim()}
                  </span>
                ))}
              </div>
              <div className="project-link ">
                <a href={item.github} target="_blank" rel="noreferrer">
                  <GitHubIcon />
                </a>
                <a href={item.url} target="_blank" rel="noreferrer">
                  <NorthEastIcon />
                </a>
              </div>
            </div>
            <div className="child4">
              <img src={item.img} alt="item view" className="project-img" />
            </div>
          </div>
        )

      ))}
      <Link to="/all-projects" style={{textDecoration:"none"}}>
      <button className="all-projects-btn">ALL PROJECTS</button>
      </Link>
    </div>
  );
};

export default Project;
