import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { CONTEXT7_SEARCH_MARKDOWN } from "@/config/context7";
import getUniqueTags from "@/utils/getUniqueTags";
import { markdownResponse } from "@/utils/markdownResponse";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const tags = getUniqueTags(posts);

  let markdownContent = `# Tags\n\n`;
  markdownContent += "All the tags used in posts.\n\n";

  for (const { tag, tagName } of tags) {
    markdownContent += `- [${tagName}](/tags/${tag}.md)\n`;
  }

  markdownContent += `\n---\n\n[Back to Home](/index.md)`;
  markdownContent += `\n\n${CONTEXT7_SEARCH_MARKDOWN}`;

  return markdownResponse(markdownContent);
};
