export type Resume = {
  resume: ResumeSection;
};

export type ResumeSection = {
  title: string;
  description: string;
  contents: ResumeCategory[];
};

export type ResumeCategory = {
  id: number;
  title: string;
  contents: ResumeEntry[];
};

export type ResumeEntry = {
  id: number;
  timestamp: string;
  name: string;
  info: string;
  description: string;
  list?: ResumeList[];
};

export type ResumeList = {
  id: number;
  name: string;
  url: string;
};
