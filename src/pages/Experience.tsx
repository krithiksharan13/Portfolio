import { useRef } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from '@/components/ExperienceCard';
import ExperienceSection from '@/components/ExperienceSection';
import { professionalExperiences } from '@/data/professionalExperience';
import { otherExperiences } from '@/data/otherExperience';
import { minorExperiences } from '@/data/minorExperience';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Experience = () => {
  const workRef = useRef<HTMLDivElement>(null);
  const otherRef = useRef<HTMLDivElement>(null);
  const minorRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex justify-center gap-2 mb-12 sticky top-20 z-10 bg-background/95 backdrop-blur-sm py-3 rounded-full max-w-fit mx-auto px-4 border border-border/50"
        >
          <button
            onClick={() => scrollToSection(workRef)}
            className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            💼 Work Experience
          </button>
          <button
            onClick={() => scrollToSection(otherRef)}
            className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            🔧 Other Experience
          </button>
          <button
            onClick={() => scrollToSection(minorRef)}
            className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            📌 Minor Experience
          </button>
        </motion.div>

        {/* Work Experience */}
        <div ref={workRef} className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold">💼 Work Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-8"
          >
            {professionalExperiences.map((exp, index) => (
              <ExperienceCard key={`prof-${index}`} {...exp} />
            ))}
          </motion.div>
        </div>

        {/* Other Experiences */}
        <div ref={otherRef} className="scroll-mt-32 mt-20">
          <ExperienceSection 
            title="🔧 Other Experiences" 
            experiences={otherExperiences} 
            keyPrefix="other" 
          />
        </div>

        {/* Minor Experiences */}
        <div ref={minorRef} className="scroll-mt-32 mt-20">
          <ExperienceSection 
            title="📌 Minor Experiences" 
            experiences={minorExperiences} 
            keyPrefix="minor" 
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
