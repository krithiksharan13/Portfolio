/**
 * Site-wide config. Update SITE_URL once the final domain is known
 * (Netlify subdomain or custom domain) — it feeds canonical + OG tags
 * and the sitemap.
 */
export const SITE_URL = "https://krithik-sharan.netlify.app";

export const SITE_NAME = "Krithik Sharan S A";
export const SITE_TAGLINE = "A Data Analyst who transforms numbers into narratives.";
// TODO: replace with a purpose-built 1200x630 social card at /og-image.png
export const OG_IMAGE = `${SITE_URL}/lovable-uploads/6f80d9a7-6e7c-4703-a7c1-a9470358b9ec.webp`;

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
