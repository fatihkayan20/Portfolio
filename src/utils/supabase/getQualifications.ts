import { IQualification } from "../../types/IQualification";
import { supabase } from "./supabase";

export const getQualifications = async (): Promise<IQualification[]> => {
  const { data, error } = await supabase
    .from("qualifications")
    .select("*")
    .order("start_date", { ascending: false });

  if (error) {
    throw error;
  }

  return data.map((x) => ({
    id: x.id,
    company: x.company,
    role: x.role,
    startDate: x.start_date,
    endDate: x.end_date,
  }));
};
