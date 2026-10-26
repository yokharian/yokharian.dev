import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { CONTEXT7_SEARCH_MARKDOWN } from "@/config/context7";
import getPostsByTag from "@/utils/getPostsByTag";
import getUniqueTags from "@/utils/getUniqueTags";
import { markdownResponse } from "@/utils/markdownResponse";

export async function getStaticPaths() {
  const posts = await getCollection("blog");

  return getUniqueTags(posts).map(({ tag, tagName }) => ({
    params: { tag },
    props: { tagName },
  }));
}

export const GET: APIRoute = async ({ params, props }) => {
  const { tag } = params;
  const { tagName } = props as { tagName: string };

  const posts = await getCollection("blog");
  const tagPosts = getPostsByTag(posts, tag!);

  let markdownContent = `${CONTEXT7_SEARCH_MARKDOWN}# Tag: ${tagName}\n\n`;
  markdownContent += `All the articles with the tag "${tagName}".\n\n`;

  for (const post of tagPosts) {
    const date = post.data.pubDatetime.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
    markdownContent += `- ${date}: [${post.data.title}](/posts/${post.id}.md)\n`;
  }

  markdownContent += `\n---\n\n[Back to Home](/index.md) | [All Posts](/posts.md) | [Tags](/tags.md)`;

  return markdownResponse(markdownContent);
};
