import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Maciej Musielik | BLog',
    description: 'Posting stupid stuff',
    site: 'https://mmusielik.xyz',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}