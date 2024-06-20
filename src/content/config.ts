import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      hijriDate: z.string(),
      title: z.string(),
      source: z.string(),
      muftis: z.string(),
      featured: z.boolean().optional(),
      audio: z.string().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["others"]),
      ogImage: image()
        .refine(img => img.width >= 1200 && img.height >= 630, {
          message: "OpenGraph image must be at least 1200 X 630 pixels!",
        })
        .or(z.string())
        .optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
    }),
});

export const collections = { blog };

const audioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    desc: z.string().optional(),
    audioUrl: z.string(),
    date: z.date().optional(),
    source: z.string().optional(),
    muftis: z.string().optional(),
  }),
})

export const collection = {
  audio: audioCollection,
}
