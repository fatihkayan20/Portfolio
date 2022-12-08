import { DevelopmentType } from "../../types/DevelopmentType";
import { ISkillState } from "../../types/ISkillState";
import { supabase } from "./supabase";

export const getSkills = async (): Promise<ISkillState> => {
  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("rate", { ascending: false });
  if (error) {
    throw error;
  }

  const skills = data.reduce(
    (acc, curr) => {
      acc[curr.for].push(curr);
      return acc;
    },
    {
      [DevelopmentType.Backend]: [],
      [DevelopmentType.Frontend]: [],
      [DevelopmentType.Mobile]: [],
    }
  );

  return skills;
};
