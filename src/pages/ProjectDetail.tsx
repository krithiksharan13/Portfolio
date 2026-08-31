import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import NotFound from "@/pages/NotFound";
import { CATEGORY_LABELS, getProjectBySlug } from "@/lib/projects";

const ProjectDetail = () => {
  const { slug = "" } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) return <NotFound />;

  const {
    title,
    emoji,
    category,
    subtitle,
    meta,
    summary,
    image,
    images,
    tools,
    badges,
    githubUrl,
    liveUrl,
    sections,
    people,
    disclaimer,
    closingNote,
  } = project;

  return (
    <article className="py-16 md:py-24">
      <Seo
        title={title}
        description={summary.slice(0, 155)}
        path={`/portfolio/${slug}`}
        type="article"
        image={image}
      />
      <div className="container mx-auto px-4 max-w-3xl">
        <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2">
          <Link to="/portfolio">
            <ArrowLeft className="mr-2 h-4 w-4" /> All projects
          </Link>
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge variant="outline">{CATEGORY_LABELS[category]}</Badge>
            {badges.filter(Boolean).map((b) => (
              <Badge key={b} className="bg-primary/10 text-primary">
                {b}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold">
            {emoji ? `${emoji} ` : ""}
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-foreground/60 border-l-2 border-primary/50 pl-3 italic">
              {subtitle}
            </p>
          )}
          {meta && <p className="mt-2 text-sm text-foreground/60">{meta}</p>}

          <div className="mt-6 flex flex-wrap gap-3">
            {githubUrl && (
              <Button asChild variant="outline" size="sm">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
            )}
            {liveUrl && (
              <Button asChild size="sm">
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live demo
                </a>
              </Button>
            )}
          </div>
        </motion.div>

        {image && (
          <img
            src={image}
            alt={title}
            className="mt-8 w-full rounded-lg border border-border/50"
            loading="lazy"
          />
        )}

        <p className="mt-8 text-lg text-foreground/80 leading-relaxed">{summary}</p>

        {tools.length > 0 && (
          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-foreground/60 mb-2">
              Tools
            </h2>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <Badge key={t} variant="secondary" className="bg-primary/10 text-primary">
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {sections.map((s) => (
          <section key={s.heading} className="mt-8">
            <h2 className="text-xl font-semibold mb-3">{s.heading}</h2>
            <ul className="space-y-2 text-foreground/80">
              {s.items.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-primary mt-1 shrink-0">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {people && (
          <section className="mt-8">
            <h2 className="text-xl font-semibold mb-3">{people.heading}</h2>
            <ul className="text-foreground/80 space-y-1">
              {people.names.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </section>
        )}

        {images && images.length > 0 && (
          <section className="mt-8 grid gap-4 sm:grid-cols-2">
            {images.map((img) => (
              <figure key={img.src}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full rounded-lg border border-border/50"
                  loading="lazy"
                />
                <figcaption className="mt-1 text-xs text-foreground/50">{img.alt}</figcaption>
              </figure>
            ))}
          </section>
        )}

        {closingNote && (
          <p className="mt-8 text-foreground/70 italic">{closingNote}</p>
        )}

        {disclaimer && (
          <div className="mt-8 rounded-md border border-border/50 bg-muted/40 p-4">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-foreground/60 mb-1">
              Disclaimer
            </h2>
            <p className="text-sm text-foreground/60 italic">{disclaimer}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectDetail;
