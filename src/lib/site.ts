/**
 * Site-wide config. Update SITE_URL once the final domain is known
 * (Netlify subdomain or custom domain) — it feeds canonical + OG tags
 * and the sitemap.
 */
export const SITE_URL = "https://krithik-sharan.netlify.app";

export const SITE_NAME = "Krithik Sharan S A";
export const SITE_TAGLINE = "A Data Analyst who transforms numbers into narratives.";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;

export const absoluteUrl = (path = "/") =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
