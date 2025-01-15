import React, { useState } from "react";
import "./Experience.css";
import { ExperienceData } from "./ExperienceApi";

const Experience = () => {
  const [experienceCategory, setExperienceCategory] = useState("Gamica Cloud");

  const handleClick = (item) => {
    setExperienceCategory(item);
  };

  return (
    <div className="experience-container section" id="experience">
      <div>
        <h1 className="heading-styling text-styling">
          <span className="heading-span">Experience</span>
        </h1>
        <div className="experience-content">
          <div className="experience-menu">
            {ExperienceData.map((item) => (
              <h1
                key={item.name}
                className={`text-styling ${
                  item.name === experienceCategory ? "active" : ""
                }`}
                onClick={() => handleClick(item.name)}
              >
                {item.name}
              </h1>
            ))}
          </div>
          <div className="experience-detail">
            {ExperienceData.map((item) => {
              if (item.name === experienceCategory) {
                return (
                  <div key={item.name}>
                    <h1 className="experience-type text-styling">{item.type}</h1>
                    <div className="experience-name">
                      <h2 className="text-styling">
                        {item.name} ({item.duration})
                      </h2>
                    </div>
                    <p className="text-styling">{item.description}</p>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
