import type { APIRoute } from "astro";
import { readFileSync } from "fs";
import { join } from "path";
import { CONTEXT7_SEARCH_MARKDOWN } from "@/config/context7";
import { markdownResponse } from "@/utils/markdownResponse";

export const GET: APIRoute = async () => {
  try {
    const filePath = join(process.cwd(), "src/pages/about.mdx");
    const rawContent = readFileSync(filePath, "utf-8");
    const description = rawContent.match(/^description:\s*"([^"]*)"/m)?.[1] ?? "";
    const body = rawContent.replace(/^---[\s\S]*?---\s*/, "");
    const content = body
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    const markdown = `---\ntitle: About\ndescription: ${JSON.stringify(description)}\n---\n\n# About\n\n${content}`;

    return markdownResponse(`${markdown}\n\n${CONTEXT7_SEARCH_MARKDOWN}`);
  } catch {
    return new Response("Not found", { status: 404 });
  }
};
