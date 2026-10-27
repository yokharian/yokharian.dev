import type { CollectionEntry } from "astro:content";

export function getPostSlugs(post: CollectionEntry<"blog">) {
  const plainSlug = post.id;

  if (plainSlug.match(/^\d{4}\//)) {
    return { plainSlug, yearSlug: plainSlug };
  }

  const year = post.data.pubDatetime
    ? post.data.pubDatetime.getFullYear().toString()
    : new Date().getFullYear().toString();

  return {
    plainSlug,
    yearSlug: `${year}/${plainSlug.replace(/^\d{4}-\d{2}-\d{2}-/, "")}`,
  };
}
