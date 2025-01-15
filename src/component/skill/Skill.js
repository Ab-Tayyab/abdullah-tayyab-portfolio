import React from "react";
import "./Skill.css";
import "../generalStyling.css";
import { SkillApi } from "./SkillAPI";

const Skill = () => {
  return (
    <>
      <div id="skill" className="section">
        <h1 className="skill-heading text-styling heading-styling">
          <span className="heading-span">Skills</span>
          <span className="heading-span">Tools</span>
        </h1>
        <div className="skill-container">
          {SkillApi.map((item) => {
            return (
              <div className="skill-card btn-animation">
                <img src={item.img} alt={item.name} />
                <h1>{item.name}</h1>
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skill;
