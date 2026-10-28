import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { CONTEXT7_SEARCH_MARKDOWN } from "@/config/context7";
import getSortedPosts from "@/utils/getSortedPosts";
import { markdownResponse } from "@/utils/markdownResponse";

export const GET: APIRoute = async () => {
  const posts = getSortedPosts(await getCollection("blog"));
  const recentPosts = posts.slice(0, 10);

  let markdownContent = `# Sofia Escobedo\n\n`;
  markdownContent +=
    "AI Engineer with 5+ years building and operating production systems on AWS using Python.\n\n";
  markdownContent += "[About](/about.md) | [All posts](/posts.md) | [Archives](/archives.md)\n\n";
  markdownContent += "## Recent posts\n\n";

  for (const post of recentPosts) {
    markdownContent += `- [${post.data.title}](/posts/${post.id}.md)\n`;
  }

  markdownContent += `\n\n${CONTEXT7_SEARCH_MARKDOWN}`;

  return markdownResponse(markdownContent);
};
