import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { OG_IMAGE, SITE_NAME, SITE_TAGLINE, absoluteUrl } from "@/lib/site";

interface SeoProps {
  title?: string;
  description?: string;
  /** Canonical path, e.g. "/about". Defaults to the current route. */
  path?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  noindex?: boolean;
}

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

/**
 * Imperatively syncs <head> tags for the current route. Covers the browser tab
 * title and JS-rendering crawlers (Google/Bing). Social scrapers that don't run
 * JS fall back to the defaults in index.html - per-route social cards will come
 * with prerendering later.
 */
const Seo = ({
  title,
  description = SITE_TAGLINE,
  path,
  image = OG_IMAGE,
  type = "website",
  noindex = false,
}: SeoProps) => {
  const location = useLocation();
  const canonicalPath = path ?? location.pathname;

  useEffect(() => {
    const canonical = absoluteUrl(canonicalPath);
    const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Data Analyst`;

    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", description);
    setMeta('meta[name="robots"]', "name", "robots", noindex ? "noindex, nofollow" : "index, follow");
    setLink("canonical", canonical);

    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", description);
    setMeta('meta[property="og:url"]', "property", "og:url", canonical);
    setMeta('meta[property="og:type"]', "property", "og:type", type);
    setMeta('meta[property="og:image"]', "property", "og:image", image);

    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image", image);
  }, [title, description, canonicalPath, image, type, noindex]);

  return null;
};

export default Seo;
