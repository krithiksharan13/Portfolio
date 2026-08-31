// Generates public/sitemap.xml from the static routes + project detail pages.
// Run via the "prebuild" npm script. Uses the plain-data portfolio module
// (no asset imports) so it can run under tsx without Vite.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import {
  academicProjects,
  competitions,
  hackathonProjects,
  portfolioProjects,
} from "../supabase/functions/mcp/portfolio-data.ts";

const SITE_URL = process.env.SITE_URL || "https://krithik-sharan.vercel.app";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "monthly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/experience", priority: "0.9", changefreq: "monthly" },
  { path: "/education", priority: "0.7", changefreq: "yearly" },
  { path: "/volunteering", priority: "0.6", changefreq: "yearly" },
  { path: "/portfolio", priority: "0.9", changefreq: "monthly" },
  { path: "/certificates", priority: "0.7", changefreq: "monthly" },
  { path: "/awards", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.5", changefreq: "yearly" },
];

const projectTitles = [
  ...portfolioProjects,
  ...hackathonProjects,
  ...academicProjects,
  ...competitions,
].map((p) => p.title);

const projectRoutes = [...new Set(projectTitles.map(slugify))].map((slug) => ({
  path: `/portfolio/${slug}`,
  priority: "0.6",
  changefreq: "yearly",
}));

const routes = [...staticRoutes, ...projectRoutes];
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
writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${routes.length} URLs)`);
