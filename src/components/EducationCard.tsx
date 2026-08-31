import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import React from 'react';

interface EducationCardProps {
  institution: string;
  degree: string;
  duration: string;
  grade: string;
  location: string;
  content: React.ReactNode;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const EducationCard = ({ institution, degree, duration, grade, location, content }: EducationCardProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300 w-full mb-8">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <CardTitle className="text-xl md:text-2xl text-primary">{institution}</CardTitle>
              <p className="text-md font-medium text-foreground/80">{location}</p>
              <p className="text-lg font-semibold text-foreground">{degree}</p>
            </div>
            <div className="text-left sm:text-right shrink-0 sm:ml-4">
              <p className="text-sm text-foreground/60">{duration}</p>
              <p className="text-sm text-foreground/80 font-semibold">{grade}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {content}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EducationCard;
