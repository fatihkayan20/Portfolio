import * as React from "react";

interface SkillProps {
  readonly name: string;
  readonly value: number;
}

export const Skill: React.FC<SkillProps> = ({ name, value }) => {
  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__number">{value}%</span>
      </div>
      <div className="skills__bar">
        <span className="skills__percentage" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
};
