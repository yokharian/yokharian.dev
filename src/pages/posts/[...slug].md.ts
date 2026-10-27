import type { CollectionEntry } from "astro:content";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { CONTEXT7_SEARCH_MARKDOWN } from "@/config/context7";
import { getPostSlugs } from "@/utils/getPostSlugs";
import { markdownResponse } from "@/utils/markdownResponse";

export async function getStaticPaths() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return posts.flatMap((post) => {
    const { plainSlug, yearSlug } = getPostSlugs(post);
    const params = [{ slug: plainSlug }, ...(yearSlug === plainSlug ? [] : [{ slug: yearSlug }])];
    return params.map((param) => ({ params: param, props: { post } }));
  });
}

export const GET: APIRoute = async ({ props }) => {
  const { post } = props as { post: CollectionEntry<"blog"> };

  // Read the raw markdown content
  const rawContent = `${CONTEXT7_SEARCH_MARKDOWN}${post.body}`;

  return markdownResponse(rawContent);
};
