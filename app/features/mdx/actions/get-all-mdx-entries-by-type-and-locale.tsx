"use server";

import fs from "fs";
import path from "path";

import { ComponentType } from "react";
import { DOCS_PATH } from "../constants";

export type MDXEntry<T> = T & {
  slug: string;
  content?: ComponentType<unknown>;
};

export async function getAllMDXEntriesByTypeAndLocale<
  T extends Record<string, unknown>
>(
  type: string,
  locale: string,
  options?: {
    filter?: (meta: T) => boolean;
    includeContent?: boolean;
  }
): Promise<MDXEntry<T>[]> {
  if (!fs.existsSync(DOCS_PATH)) return [];

  const availableTypes = fs
    .readdirSync(DOCS_PATH)
    .filter((name) => fs.statSync(path.join(DOCS_PATH, name)).isDirectory());

  if (!availableTypes.includes(type)) {
    throw new Error(
      `Invalid MDX type '${type}'. Available types: ${availableTypes.join(
        ", "
      )}`
    );
  }
  const directory = path.join(process.cwd(), "docs", type, locale);

  if (!fs.existsSync(directory)) return [];

  const files = fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"));

  const items: MDXEntry<T>[] = [];
  const { filter } = options || {};

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const mdx = await import(`@/docs/${type}/${locale}/${file}`);

    if (!mdx.metadata) throw new Error("Missing `metadata` in " + file);

    const rawMeta = mdx.metadata as T;
    if (filter && !filter(rawMeta)) continue;
    const entry: MDXEntry<T> = { slug: file.replace(/\.mdx$/, ""), ...rawMeta };
    if (options?.includeContent) {
      entry.content = mdx.default;
    }
    items.push(entry);
  }

  return items;
}
