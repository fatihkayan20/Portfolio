import { SocialLink } from "../../types/ISocialLink";
import { supabase } from "./supabase";

export const getSocialLinks = async (): Promise<SocialLink[]> => {
  const { data, error } = await supabase
    .from("links")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
};
