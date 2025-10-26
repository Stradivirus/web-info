// Shared types for Project pages and ProjectDetail components
// Centralize common data contracts to avoid duplication across each project's data.ts

export type MediaType = 'image' | 'video';

export type MediaItem = {
  id: string;
  type: MediaType;
  url: string;
  caption?: string;
};

export type LinkEnabled = {
  url: string;
  isEnabled: boolean;
};

// Some projects use string for github, others use { url, isEnabled }
export type ProjectLink = {
  github?: string | LinkEnabled;
  demo?: LinkEnabled;
  document?: string; // 프로젝트 자료 (PDF, PPT 등)
};

export type TechDetail = {
  title: string;
  items: string[];
};

export type ProjectOverview = {
  description: string;
  diagram: string;
};

export type ProjectData = {
  title: string;
  description: string;
  period: string;
  techStack: string[];
  objectives: string[];
  features: string[];
  process: string;
  techDetails: TechDetail[];
  improvements?: string;
  reflection: string;
  media: MediaItem[]; // prefer concrete MediaItem over any[]
  links: ProjectLink;
  overview: ProjectOverview;
};
