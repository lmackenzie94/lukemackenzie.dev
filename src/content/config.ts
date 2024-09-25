import { z, defineCollection, reference } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishDate: z.date(),
      images: z.array(
        z.object({
          src: image(),
          // src: image().refine(src => src.width >= 1000, {
          //   message: 'Image width must be at least 1000px'
          // }),
          objectFit: z.enum(['cover', 'contain']).default('cover'),
          alt: z.string()
        })
      ),
      tags: z.array(z.string()),
      codeUrl: z.string().optional(),
      liveUrl: z.string().optional()
    })
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishDate: z.date(),
      image: z.object({
        src: image(),
        alt: z.string()
      }),
      externalUrl: z.string().optional()
      // Reference an array of related posts from the `blog` collection by `slug`
      // relatedPosts: z.array(reference('blog'))
    })
});

export const collections = {
  projects,
  blog
};
