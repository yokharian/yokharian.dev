import type { APIRoute } from "astro";
import { readFileSync } from "fs";
import { join } from "path";
import { CONTEXT7_SEARCH_MARKDOWN } from "@/config/context7";

export const GET: APIRoute = async () => {
  try {
    // Read the raw MDX content
    const filePath = join(process.cwd(), "src/pages/about.mdx");
    const rawContent = readFileSync(filePath, "utf-8");

    // Return the markdown content with proper headers
    return new Response(`${CONTEXT7_SEARCH_MARKDOWN}${rawContent}`, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
};
