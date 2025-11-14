const fs = require('fs');
const path = require('path');
require('dotenv').config();

const portfolioUrl = process.env.REACT_APP_PORTFOLIO_URL || 'https://himanshumodi.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];
const rootDir = path.join(__dirname, '..');

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  <url>
    <loc>${portfolioUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${portfolioUrl}/#home</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${portfolioUrl}/#aboutme</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${portfolioUrl}/#resume</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${portfolioUrl}/#contactme</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
`;

// Generate robots.txt
const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Sitemap
Sitemap: ${portfolioUrl}/sitemap.xml

# Disallow admin or private areas if any
# Disallow: /admin/
# Disallow: /private/
`;

// Write files
const publicDir = path.join(rootDir, 'public');
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);

// Update index.html with portfolio URL
const indexHtmlPath = path.join(publicDir, 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

// Replace all occurrences of the old URL patterns (with and without trailing slash)
const urlPatterns = [
  /https:\/\/himanshumodi\.portfolio\//g,
  /https:\/\/himanshumodi\.vercel\.app\//g,
  /https:\/\/himanshumodi\.portfolio/g,
  /https:\/\/himanshumodi\.vercel\.app/g
];

urlPatterns.forEach(pattern => {
  indexHtml = indexHtml.replace(pattern, portfolioUrl);
});

fs.writeFileSync(indexHtmlPath, indexHtml);

console.log(`✅ Generated sitemap.xml and robots.txt with URL: ${portfolioUrl}`);
console.log(`✅ Updated index.html with portfolio URL: ${portfolioUrl}`);

