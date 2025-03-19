import { SitemapStream, streamToPromise } from 'sitemap';
import { writeFileSync } from 'fs';
import { resolve } from 'path';

const pages = [
  { url: '/', changefreq: 'monthly', priority: 1.0 },
  { url: '/nosotros', changefreq: 'monthly', priority: 0.8 },
  { url: '/servicios', changefreq: 'monthly', priority: 0.8 },
  { url: '/contacto', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://estudioblaksleyaznar.com.ar' });

pages.forEach(page => sitemap.write(page));
sitemap.end();

streamToPromise(sitemap).then(data => {
  const filePath = resolve('./public/sitemap.xml');
  writeFileSync(filePath, data);
  console.log(`✅ Sitemap generado en: ${filePath}`);
});
