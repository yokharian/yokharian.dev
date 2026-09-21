import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/content/blog";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      // post details
      title: z.string(),
      description: z.string(),
      author: z.string().default(SITE.author),
      pubDatetime: z.coerce.date(),
      modDatetime: z.date().optional().nullable(),
      tags: z.array(z.string()).default(["others"]),
      canonicalURL: z.string().optional(),
      timezone: z.string().optional().default(SITE.timezone),
      // project details
      startDate: z.string().optional(),
      endDate: z.string().optional(),
      employer: z.string().optional(),
      // flags
      featured: z.boolean().optional(),
      portfolio: z.boolean().optional(),
      draft: z.boolean().optional(),
      unlisted: z.boolean().optional(),
      hideEditPost: z.boolean().optional(),
      // media 
      heroImage: z.string().optional(),
      lucidchartUrl: z.string().optional()
    }),
});

export const collections = { blog };
