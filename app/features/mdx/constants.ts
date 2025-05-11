import path from "path";

export const DOCS_PATH = process.env.DOCS_PATH
  ? path.resolve(process.cwd(), process.env.DOCS_PATH)
  : path.join(process.cwd(), "docs");
