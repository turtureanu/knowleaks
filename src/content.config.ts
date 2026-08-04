// Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		description: z.string(),
		draft: z.boolean().optional(),
		image: z
			.object({
				url: z.string(),
				alt: z.string(),
			})
			.optional(),
		tags: z.array(z.string()),
	}),
});

export const collections = {
	blog: blogCollection,
};
