import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// folders/files prefixed with `_` are drafts and are ignored by the glob loader
const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*/index.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishDate: z.date(),
      images: z.array(
        z.object({
          src: image(),
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
  loader: glob({ pattern: '**/[^_]*/index.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      publishDate: z.date(),
      image: z.object({
        src: image(),
        alt: z.string()
      }),
      externalUrl: z.string().optional()
    })
});

export const collections = {
  projects,
  blog
};
