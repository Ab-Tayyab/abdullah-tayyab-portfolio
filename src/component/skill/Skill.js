import React from "react";
import "./Skill.css";
import "../generalStyling.css"
import { SkillApi } from "./SkillAPI";

const Skill = () => {
  return (
    <>
      <div id="skill">
        <h1 className="skill-parent-heading text-styling heading-styling">Skills & Tools</h1>
        <div className="carousel">
          <div className="wrap">
            {SkillApi.map((img) => {
              return <img src={img.img} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
