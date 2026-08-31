
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { ExperienceItem } from '@/data/professionalExperience';

interface ExperienceSectionProps {
  title: string;
  experiences: ExperienceItem[];
  keyPrefix: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ExperienceSection = ({ title, experiences, keyPrefix }: ExperienceSectionProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="text-center my-12"
      >
        <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
        <div className="w-16 h-1 bg-secondary mx-auto mt-2"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-8"
      >
        {experiences.map((exp, index) => (
          <ExperienceCard key={`${keyPrefix}-${index}`} {...exp} />
        ))}
      </motion.div>
    </>
  );
};

export default ExperienceSection;
