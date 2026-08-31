
import { LucideProps } from 'lucide-react';
import { motion } from 'framer-motion';

interface SkillBadgeProps {
  icon: React.ElementType<LucideProps>;
  name: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillBadge = ({ icon: Icon, name }: SkillBadgeProps) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="flex flex-col items-center justify-center gap-2 p-4 border rounded-lg bg-card hover:bg-primary/10 transition-colors"
    >
      <Icon className="h-10 w-10 text-primary" />
      <span className="font-medium text-center">{name}</span>
    </motion.div>
  );
};

export default SkillBadge;
