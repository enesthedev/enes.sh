import { getAllMDXEntriesByTypeAndLocale } from "@/app/features/mdx/actions";
import { Thought } from "../types";

export const getAllThoughts = async (locale: string): Promise<Thought[]> => {
  const thoughts = await getAllMDXEntriesByTypeAndLocale<Thought>(
    "thoughts",
    locale,
    { includeContent: false }
  );
  return thoughts.map((thought) => ({
    ...thought,
  }));
};
