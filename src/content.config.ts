import { z, defineCollection } from "astro:content";
import { file, glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      description: z.string(),
      tags: z.array(z.string()),
      weight: z.number(),
      published: z.boolean(),
      icon: image().optional(),
      iconTitle: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      permalink: z.string().optional(),
    }),
});

const config = defineCollection({
  loader: file("src/content/config/index.yml"),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      jobtitle: z.string(),
      description: z.string(),
      image: image().optional(),
      author: z.string(),
      email: z.string(),
      linkedinUrl: z.string().optional(),
      navigationMain: z.array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      ),
    }),
});

export const collections = { projects, config };
