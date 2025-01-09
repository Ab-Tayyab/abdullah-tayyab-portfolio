import React from "react";
import "./Skill.css";
import { SkillApi } from "./SkillAPI";

const Skill = () => {
  return (
    <>
      <div id="skill">
        <h1 className="skill-parent-heading">Skills & Tools</h1>
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
