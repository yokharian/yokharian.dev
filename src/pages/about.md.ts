import type { APIRoute } from "astro";
import { readFileSync } from "fs";
import { join } from "path";
import { CONTEXT7_SEARCH_MARKDOWN } from "@/config/context7";
import { markdownResponse } from "@/utils/markdownResponse";

export const GET: APIRoute = async () => {
  try {
    // Read the raw MDX content
    const filePath = join(process.cwd(), "src/pages/about.mdx");
    const rawContent = readFileSync(filePath, "utf-8");

    return markdownResponse(`${CONTEXT7_SEARCH_MARKDOWN}${rawContent}`);
  } catch {
    return new Response("Not found", { status: 404 });
  }
};
