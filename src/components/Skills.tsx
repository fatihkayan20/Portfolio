import React, { useState } from "react";

import { BiChevronDown, BiCodeCurly, BiServer } from "react-icons/bi";
import { AiOutlineMobile } from "react-icons/ai";
import { NavItem } from "../types/NavItem";
import { Skill } from "./Skill";

const skills = {
  frontend: [
    {
      name: "HTML",
      value: 90,
    },
    {
      name: "CSS",
      value: 80,
    },
    {
      name: "JavaScript",
      value: 90,
    },
    {
      name: "React",
      value: 90,
    },
    {
      name: "Next.js",
      value: 90,
    },
    {
      name: "Angular",
      value: 80,
    },
  ],
  mobile: [
    {
      name: "React Native",
      value: 90,
    },
    {
      name: "Flutter",
      value: 80,
    },
  ],
  backend: [
    {
      name: "Node.js",
      value: 90,
    },
    {
      name: "Firebase",
      value: 90,
    },
    {
      name: "MongoDB",
      value: 80,
    },
    {
      name: "C#",
      value: 80,
    },
  ],
};

export const Skills = () => {
  const [state, setState] = useState({
    opened: 0,
  });
  const getPercentage = (value: number) => {
    return `${value}%`;
  };

  const getClassName = (value: number) => {
    return value === state.opened ? "skills__open" : "skills__close";
  };

  const handleSetOpen = (value: number) => {
    setState({
      ...state,
      opened: state.opened === value ? 0 : value,
    });
  };

  return (
    <section className="skills section" enum-data={NavItem.Skills}>
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid">
        <div>
          <div className={`skills_content ${getClassName(1)}`}>
            <div className="skills__header" onClick={() => handleSetOpen(1)}>
              <BiCodeCurly className="skills__icon" />

              <div>
                <h1 className="skills__titles">Frontend Developer</h1>
                <span className="skills__subtitle">More than 3 years</span>
              </div>
              <BiChevronDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              {skills.frontend.map((skill, index) => (
                <Skill key={index} name={skill.name} value={skill.value} />
              ))}
            </div>
          </div>
        </div>

        <div className={`skills_content ${getClassName(2)}`}>
          <div className="skills__header" onClick={() => handleSetOpen(2)}>
            <AiOutlineMobile className="skills__icon" />

            <div>
              <h1 className="skills__titles">Mobile Developer</h1>
              <span className="skills__subtitle">More than 1 years</span>
            </div>

            <BiChevronDown className="skills__arrow" />
          </div>
          <div className="skills__list grid">
            {skills.mobile.map((skill, index) => (
              <Skill key={index} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>

        <div className={`skills_content ${getClassName(3)}`}>
          <div className="skills__header" onClick={() => handleSetOpen(3)}>
            <BiServer className="skills__icon" />

            <div>
              <h1 className="skills__titles">Backend Developer</h1>
              <span className="skills__subtitle">More than 2 years</span>
            </div>

            <BiChevronDown className="skills__arrow" />
          </div>
          <div className="skills__list grid">
            {skills.backend.map((skill, index) => (
              <Skill key={index} name={skill.name} value={skill.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
