import { IProject } from "../../types/IProject";
import { supabase } from "./supabase";

export const getProjects = async (): Promise<IProject[]> => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    throw error;
  }

  return data.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    demoUrl: project.demo_url,
    repoUrl: project.repo_url,
    imageUrl: project.image_url,
  }));
};
