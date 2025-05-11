import { ComponentType } from "react";

export type Thought = {
  slug: string;
  title: string;
  date: string;
  sort: number;
  content?: ComponentType<unknown>;
};
