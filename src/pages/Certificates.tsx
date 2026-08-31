import { useRef } from 'react';
import { motion } from 'framer-motion';
import CertificateCard from '@/components/CertificateCard';
import { certificateCategories } from '@/data/certificatesData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const Certificates = () => {
  const refs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (name: string) => {
    refs.current[name]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        {/* Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12 sticky top-20 z-10 bg-card/95 backdrop-blur-sm py-3 rounded-full max-w-fit mx-auto px-4 border border-border/50"
        >
          {certificateCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => scrollToSection(cat.name)}
              className="px-4 py-2 text-sm font-medium rounded-full transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {cat.emoji} {cat.name}
            </button>
          ))}
        </motion.div>

        {/* Category Sections */}
        {certificateCategories.map((cat) => (
          <div
            key={cat.name}
            ref={(el) => { refs.current[cat.name] = el; }}
            className="scroll-mt-32 mt-16 first:mt-0"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold">
                {cat.emoji} {cat.name}
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
              <p className="text-muted-foreground mt-2">
                {cat.certificates.length} certificate{cat.certificates.length !== 1 ? 's' : ''}
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {cat.certificates.map((cert) => (
                <CertificateCard key={cert.credentialId || cert.title} {...cert} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
