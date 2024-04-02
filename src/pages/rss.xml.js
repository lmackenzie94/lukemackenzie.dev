// import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const projects = await getCollection('projects');
  return rss({
    title: 'Luke MacKenzie | Projects',
    description: 'My cool projects.',
    site: context.site,
    // items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    items: projects.map(project => ({
      title: project.data.title,
      pubDate: project.data.pubDate,
      description: project.data.description,
      link: `/projects/${project.slug}/`
    })),
    customData: `<language>en-us</language>`
  });
}
