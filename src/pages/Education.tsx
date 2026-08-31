import { motion } from 'framer-motion';
import EducationCard from '@/components/EducationCard';
import React from 'react';
import Seo from '@/components/Seo';
import { educationData } from '@/data/educationData';

const Education = () => {
  return (
    <section id="education" className="py-20 md:py-32">
      <Seo
        title="Education"
        description="Krithik Sharan's academic background - MSc Data Science and Analytics at the University of Leeds and B.Tech in Information Technology at SSN College of Engineering."
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold">Education</h1>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-4xl mx-auto"
        >
            {educationData.map((edu, index) => (
                <EducationCard key={index} {...edu} />
            ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
