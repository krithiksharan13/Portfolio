import ProjectCard from '../components/ProjectCard';
import HackathonProjectCard from '../components/HackathonProjectCard';
import AcademicProjectCard from '../components/AcademicProjectCard';
import CompetitionCard from '../components/CompetitionCard';
import { motion } from 'framer-motion';
import { projects } from '@/data/projectsData';
import { hackathonProjects } from '@/data/hackathonProjectsData';
import { academicProjects } from '@/data/academicProjectsData';
import { competitions } from '@/data/competitionsData';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Portfolio = () => {
  const academicRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const hackathonRef = useRef<HTMLDivElement>(null);
  const competitionsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center gap-2 mb-12 sticky top-20 z-10 bg-card/95 backdrop-blur-sm py-3 rounded-full max-w-fit mx-auto px-4 border border-border/50"
        >
          <button
            onClick={() => scrollToSection(academicRef)}
            className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            📘 Academic
          </button>
          <button
            onClick={() => scrollToSection(portfolioRef)}
            className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            💼 Portfolio
          </button>
          <button
            onClick={() => scrollToSection(hackathonRef)}
            className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            🏆 Hackathons
          </button>
          <button
            onClick={() => scrollToSection(competitionsRef)}
            className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            🏅 Competitions
          </button>
        </motion.div>

        {/* Academic Projects Section */}
        <div ref={academicRef} className="scroll-mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">📘 Academic Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {academicProjects.map((project) => (
              <AcademicProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </div>

        {/* Portfolio Projects Section */}
        <div ref={portfolioRef} className="scroll-mt-32 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">💼 Portfolio</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </div>

        {/* Hackathon Projects Section */}
        <div ref={hackathonRef} className="scroll-mt-32 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">🏆 Hackathon Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {hackathonProjects.map((project) => (
              <HackathonProjectCard key={project.title} {...project} />
            ))}
          </motion.div>
        </div>

        {/* Competitions Section */}
        <div ref={competitionsRef} className="scroll-mt-32 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">🏅 Competitions</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {competitions.map((competition) => (
              <CompetitionCard key={competition.title} {...competition} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
