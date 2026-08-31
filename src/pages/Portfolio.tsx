import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import HackathonProjectCard from '../components/HackathonProjectCard';
import AcademicProjectCard from '../components/AcademicProjectCard';
import CompetitionCard from '../components/CompetitionCard';
import Seo from '@/components/Seo';
import { Input } from '@/components/ui/input';
import { projects } from '@/data/projectsData';
import { hackathonProjects } from '@/data/hackathonProjectsData';
import { academicProjects } from '@/data/academicProjectsData';
import { competitions } from '@/data/competitionsData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

// Tools that appear often enough to be useful quick filters.
const QUICK_FILTERS = ['Python', 'SQL', 'Power BI', 'Excel', 'Machine Learning', 'Tableau', 'R'];

type CategoryKey = 'all' | 'academic' | 'portfolio' | 'hackathon' | 'competitions';

const CATEGORIES: { key: CategoryKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'academic', label: '📘 Academic' },
  { key: 'portfolio', label: '💼 Portfolio' },
  { key: 'hackathon', label: '🏆 Hackathons' },
  { key: 'competitions', label: '🏅 Competitions' },
];

const matches = (haystack: unknown, q: string) =>
  !q || JSON.stringify(haystack).toLowerCase().includes(q.toLowerCase());

const Portfolio = () => {
  const [query, setQuery] = useState('');
  const [tool, setTool] = useState<string | null>(null);
  const [category, setCategory] = useState<CategoryKey>('all');

  const term = [query, tool].filter(Boolean).join(' ').trim();
  const searching = term.length > 0;
  const filtering = searching || category !== 'all';

  const filtered = useMemo(() => {
    const f = <T,>(list: T[]) =>
      list.filter((item) => matches(item, query) && matches(item, tool ?? ''));
    return {
      academic: f(academicProjects),
      portfolio: f(projects),
      hackathon: f(hackathonProjects),
      competitions: f(competitions),
    };
  }, [query, tool]);

  const sections = [
    { key: 'academic' as const, title: '📘 Academic Projects', items: filtered.academic, render: (p) => <AcademicProjectCard key={p.title} {...p} /> },
    { key: 'portfolio' as const, title: '💼 Portfolio', items: filtered.portfolio, render: (p) => <ProjectCard key={p.title} {...p} /> },
    { key: 'hackathon' as const, title: '🏆 Hackathon Projects', items: filtered.hackathon, render: (p) => <HackathonProjectCard key={p.title} {...p} /> },
    { key: 'competitions' as const, title: '🏅 Competitions', items: filtered.competitions, render: (c) => <CompetitionCard key={c.title} {...c} /> },
  ];

  const visibleSections = sections.filter(
    (s) => (category === 'all' || category === s.key) && s.items.length > 0,
  );
  const totalResults = visibleSections.reduce((n, s) => n + s.items.length, 0);

  const clear = () => {
    setQuery('');
    setTool(null);
    setCategory('all');
  };

  return (
    <div className="py-20 md:py-32 bg-card">
      <Seo
        title="Portfolio"
        description="Academic, professional, hackathon and competition projects by Krithik Sharan - spanning data analysis, machine learning, dashboards and web builds."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Portfolio</h1>
          <div className="w-20 h-1 bg-primary mx-auto mt-2" />
        </div>

        {/* Search + filters */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects, tools, topics…"
              className="pl-9 pr-9"
              aria-label="Search projects"
            />
            {(searching) && (
              <button
                onClick={() => { setQuery(''); setTool(null); }}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {QUICK_FILTERS.map((t) => (
              <button
                key={t}
                onClick={() => setTool(tool === t ? null : t)}
                aria-pressed={tool === t}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors border ${
                  tool === t
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-border/60 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Category selector */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                aria-pressed={category === c.key}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors border ${
                  category === c.key
                    ? 'bg-secondary text-secondary-foreground border-secondary'
                    : 'border-border/60 hover:bg-secondary/10 hover:text-secondary'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {filtering && (
            <p className="mt-4 text-center text-sm text-muted-foreground">
              {totalResults} {totalResults === 1 ? 'result' : 'results'}
              {(searching || category !== 'all') && (
                <>
                  {' · '}
                  <button onClick={clear} className="text-primary underline">Clear all</button>
                </>
              )}
            </p>
          )}
        </motion.div>

        {filtering && totalResults === 0 && (
          <p className="text-center text-muted-foreground py-16">
            No projects match your filters.{' '}
            <button onClick={clear} className="text-primary underline">Clear filters</button>
          </p>
        )}

        {visibleSections.map((section) => (
          <div key={section.key} className="scroll-mt-32 mt-20 first:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold">{section.title}</h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-2" />
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {section.items.map((item) => section.render(item as never))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
