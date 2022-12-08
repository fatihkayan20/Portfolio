import { IResume } from "../../types/IResume";
import { supabase } from "./supabase";

export const getResumes = async (): Promise<IResume[]> => {
  const { data, error } = await supabase
    .from("resumes")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    throw error;
  }

  return data;
};
