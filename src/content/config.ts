import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        image: z.string().optional(),
        pubDate: z.date(),
        description: z.string().optional(),
        heroImage: z.string().optional(),
    }),
});

export const collections = {
    'blog': blogCollection,
    // Add other collections here
};