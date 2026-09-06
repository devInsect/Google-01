import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const artifactRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(await readFile(resolve(artifactRoot, 'seo.config.json'), 'utf8'));
const siteUrl = config.siteUrl.replace(/\/+$/, '');
const routes = config.routes;
const outputDirectory = resolve(artifactRoot, 'dist/public');

function absoluteUrl(pathname) {
  return `${siteUrl}${pathname === '/' ? '/' : pathname}`;
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(absoluteUrl(route))}</loc>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl('/sitemap.xml')}
`;

await mkdir(outputDirectory, { recursive: true });
await Promise.all([
  writeFile(resolve(outputDirectory, 'sitemap.xml'), sitemap),
  writeFile(resolve(outputDirectory, 'robots.txt'), robots),
]);