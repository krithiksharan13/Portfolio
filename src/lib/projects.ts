import { projects as portfolioProjects } from "@/data/projectsData";
import { hackathonProjects } from "@/data/hackathonProjectsData";
import { academicProjects } from "@/data/academicProjectsData";
import { competitions } from "@/data/competitionsData";

export type ProjectCategory = "academic" | "portfolio" | "hackathon" | "competition";

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  academic: "Academic Project",
  portfolio: "Portfolio Project",
  hackathon: "Hackathon Project",
  competition: "Competition",
};

export interface ProjectSection {
  heading: string;
  items: string[];
}

export interface NormalizedProject {
  slug: string;
  category: ProjectCategory;
  title: string;
  emoji?: string;
  subtitle?: string;
  summary: string;
  image?: string;
  images?: { src: string; alt: string }[];
  tools: string[];
  badges: string[];
  githubUrl?: string;
  liveUrl?: string;
  sections: ProjectSection[];
  people?: { heading: string; names: string[] };
  disclaimer?: string;
  closingNote?: string;
  meta?: string;
}

export function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const section = (heading: string, items?: string[]): ProjectSection[] =>
  items && items.length ? [{ heading, items }] : [];

function normalize(): NormalizedProject[] {
  const out: NormalizedProject[] = [];

  for (const p of academicProjects) {
    out.push({
      slug: slugify(p.title),
      category: "academic",
      title: p.title,
      emoji: p.emoji,
      subtitle: p.subtitle,
      summary: p.overview || p.abstract || "",
      image: p.image,
      tools: p.tools ?? [],
      badges: [p.tag],
      githubUrl: p.githubUrl,
      sections: [
        ...section("Abstract", p.abstract ? [p.abstract] : undefined),
        ...section("Objectives", p.objectives),
        ...section("Methods", p.methods),
        ...section("Results", p.results),
        ...section("Future work", p.futureWork),
      ],
      people:
        p.contributors?.length
          ? { heading: "Contributors", names: p.contributors }
          : p.developers?.length
            ? { heading: "Developers", names: p.developers }
            : undefined,
      disclaimer: p.disclaimer,
    });
  }

  for (const p of portfolioProjects) {
    out.push({
      slug: slugify(p.title),
      category: "portfolio",
      title: p.title,
      summary: p.description,
      image: p.imageUrl,
      tools: p.tools ?? [],
      badges: [],
      githubUrl: p.githubUrl,
      sections: [],
    });
  }

  for (const p of hackathonProjects) {
    const badge = p.isWinner ? "Winner" : p.position ? p.position : undefined;
    out.push({
      slug: slugify(p.title),
      category: "hackathon",
      title: p.title,
      summary: p.description,
      tools: [],
      badges: badge ? [badge] : [],
      githubUrl: p.githubUrl,
      liveUrl: p.liveUrl,
      sections: [],
    });
  }

  for (const p of competitions) {
    out.push({
      slug: slugify(p.title),
      category: "competition",
      title: p.title,
      summary: p.summary,
      images: p.images,
      tools: [],
      badges: [p.position],
      meta: [p.issuer, p.date].filter(Boolean).join(" · "),
      sections: [...section("Details", p.details), ...section("Highlights", p.highlights)],
      closingNote: p.closingNote,
    });
  }

  return out;
}

const all = normalize();

// Warn in dev if two projects collapse to the same slug.
if (import.meta.env.DEV) {
  const seen = new Set<string>();
  for (const p of all) {
    if (seen.has(p.slug)) console.warn(`[projects] duplicate slug: ${p.slug}`);
    seen.add(p.slug);
  }
}

export const allProjects = all;

export const projectSlugs = all.map((p) => p.slug);

export function getProjectBySlug(slug: string): NormalizedProject | undefined {
  return all.find((p) => p.slug === slug);
}
