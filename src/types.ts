export type Question = {
  id: string;
  qid: string;
  title: string;
  subTitle: string;
  description: string;
  level: "easy" | "medium" | "hard";
  tags: string[];
  companies: string[];
  topic: string[];
  hints: string[];
  similarQuestions: string[];
  createdAt: number;
  modifiedAt: number;
  progress: "solved" | "attempted" | "unattempted";
  attempts: number;
  successSolved: number;
};
