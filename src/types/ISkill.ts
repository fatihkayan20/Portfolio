import { DevelopmentType } from "./DevelopmentType";

export interface ISkill {
  readonly id: number;
  readonly title: string;
  readonly rate: number;
  readonly for: DevelopmentType;
}
