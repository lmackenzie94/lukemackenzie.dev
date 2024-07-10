import { z, defineCollection, reference } from 'astro:content';

const projects = defineCollection({
  type: 'data',
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    // TODO: support multiple images
    image: z.object({
      src: z.string(),
      alt: z.string()
    }),
    language: z.enum(['en', 'es']),
    tags: z.array(z.string()),
    // publishDate: z.date(),
    publishDate: z.string().transform(str => new Date(str))
  })
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Reference an array of related posts from the `blog` collection by `slug`
    relatedPosts: z.array(reference('blog'))
  })
});

export const collections = {
  projects,
  blog
};
