export type ProjectCategory = "Personal" | "Work";

export type ProjectItem = {
  id: number;
  image: string;
  name: string;
  stack: string;
  category: ProjectCategory;
  url?: string;
};

export type ProjectSection = {
  title: string;
  description: string;
  contents: ProjectItem[];
};

export type Project = {
  project: ProjectSection;
};
