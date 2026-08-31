// Generates public/sitemap.xml from the known route list.
// Run automatically before build (see package.json "prebuild").
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const SITE_URL = process.env.SITE_URL || "https://krithik-sharan.netlify.app";

const routes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/experience", priority: "0.9", changefreq: "monthly" },
  { path: "/education", priority: "0.7", changefreq: "yearly" },
  { path: "/volunteering", priority: "0.6", changefreq: "yearly" },
  { path: "/portfolio", priority: "0.9", changefreq: "monthly" },
  { path: "/certificates", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.5", changefreq: "yearly" },
];

const today = new Date().toISOString().slice(0, 10);

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(out, xml);
console.log(`sitemap.xml written (${routes.length} routes) -> ${out}`);
