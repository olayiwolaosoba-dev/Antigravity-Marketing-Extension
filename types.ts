
export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  location: string;
  tags: string[];
  techStack: string;
  timeline: string;
  results: string[];
  image: string;
  quote?: {
    text: string;
    author: string;
    role: string;
    image: string;
  };
}

export interface Metric {
  value: string;
  label: string;
}

export interface Problem {
  id: number;
  question: string;
  solution: string;
  cta: string;
  video: string;
}

export interface IndustryExpertise {
  id: string;
  name: string;
  title: string;
  challenges: string[];
  solutions: string[];
  video: string;
}
