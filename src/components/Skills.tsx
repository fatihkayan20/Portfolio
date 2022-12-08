import React from "react";

import { BiChevronDown, BiCodeCurly, BiServer } from "react-icons/bi";
import { AiOutlineMobile } from "react-icons/ai";
import { NavItem } from "../types/NavItem";
import { Skill } from "./Skill";
import { getSkills } from "../utils/supabase/getSkills";
import { DevelopmentType } from "../types/DevelopmentType";
import { ISkillState } from "../types/ISkillState";
import { getExperienceYears } from "../utils/functions";
import {
  startDateOfBackendExperience,
  startDateOfFrontendExperience,
  startDateOfMobileExperience,
} from "../utils/dates";

interface IState {
  readonly opened: number;
  readonly skills: ISkillState;
}

export const Skills = () => {
  const [state, setState] = React.useState<IState>({
    opened: 0,
    skills: {
      [DevelopmentType.Backend]: [],
      [DevelopmentType.Frontend]: [],
      [DevelopmentType.Mobile]: [],
    },
  });

  React.useEffect(() => {
    getSkills()
      .then((data) => {
        console.log(data);
        setState((prev) => ({
          ...prev,
          skills: data,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                <span className="skills__subtitle">
                  {` More than ${getExperienceYears(
                    startDateOfFrontendExperience
                  )} years`}
                </span>
              </div>
              <BiChevronDown className="skills__arrow" />
            </div>
            <div className="skills__list grid">
              {state.skills[DevelopmentType.Frontend].map((skill, index) => (
                <Skill key={index} name={skill.title} value={skill.rate} />
              ))}
            </div>
          </div>
        </div>

        <div className={`skills_content ${getClassName(2)}`}>
          <div className="skills__header" onClick={() => handleSetOpen(2)}>
            <AiOutlineMobile className="skills__icon" />

            <div>
              <h1 className="skills__titles">Mobile Developer</h1>
              <span className="skills__subtitle">
                {` More than ${getExperienceYears(
                  startDateOfBackendExperience
                )} years`}
              </span>
            </div>

            <BiChevronDown className="skills__arrow" />
          </div>
          <div className="skills__list grid">
            {state.skills[DevelopmentType.Mobile].map((skill, index) => (
              <Skill key={index} name={skill.title} value={skill.rate} />
            ))}
          </div>
        </div>

        <div className={`skills_content ${getClassName(3)}`}>
          <div className="skills__header" onClick={() => handleSetOpen(3)}>
            <BiServer className="skills__icon" />

            <div>
              <h1 className="skills__titles">Backend Developer</h1>
              <span className="skills__subtitle">
                {` More than ${getExperienceYears(
                  startDateOfMobileExperience
                )} years`}
              </span>
            </div>

            <BiChevronDown className="skills__arrow" />
          </div>
          <div className="skills__list grid">
            {state.skills[DevelopmentType.Backend].map((skill, index) => (
              <Skill key={index} name={skill.title} value={skill.rate} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
