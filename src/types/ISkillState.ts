import { DevelopmentType } from "./DevelopmentType";
import { ISkill } from "./ISkill";

export type ISkillState = {
  [key in DevelopmentType]: ISkill[];
};
