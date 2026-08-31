import { Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/data/testimonialsData";

const TestimonialCard = ({ t }: { t: Testimonial }) => (
  <li className="group relative w-[300px] shrink-0">
    <article
      className="
        flex h-[268px] flex-col overflow-hidden rounded-xl border border-border/60
        bg-card p-5 transition-all duration-300
        group-hover:h-[404px] group-hover:border-primary/40 group-hover:shadow-2xl
        group-hover:shadow-primary/10 group-hover:z-30
      "
    >
      <Quote className="h-5 w-5 shrink-0 text-primary/70" aria-hidden />

      {/* Summary - hidden once expanded */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/80 line-clamp-5 group-hover:hidden">
        {t.summary}
      </p>

      {/* Full text - shown on hover, scrolls if long */}
      <div className="mt-3 hidden flex-1 overflow-y-auto pr-1 group-hover:block">
        <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/80">
          {t.full}
        </p>
      </div>

      <footer className="mt-4 shrink-0 border-t border-border/50 pt-3">
        <p className="text-sm font-semibold">{t.name}</p>
        <p className="text-xs text-foreground/55">{t.role}</p>
      </footer>
    </article>
  </li>
);

const TestimonialsRail = () => {
  // Two copies so the -50% translate loops seamlessly.
  const loop = [...testimonials, ...testimonials];

  return (
    <div
      className="group/rail relative h-[460px] overflow-hidden motion-reduce:overflow-x-auto motion-reduce:overflow-y-hidden"
      style={{ ["--marquee-duration" as string]: "90s" }}
    >
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-background to-transparent motion-reduce:hidden" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-background to-transparent motion-reduce:hidden" />

      <ul
        className="
          flex h-full w-max items-center gap-6 animate-marquee
          hover:[animation-play-state:paused]
          motion-reduce:animate-none
        "
      >
        {loop.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} t={t} />
        ))}
      </ul>
    </div>
  );
};

export default TestimonialsRail;
