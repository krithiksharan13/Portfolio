import { motion } from "framer-motion";
import HonourCard from "@/components/HonourCard";
import Seo from "@/components/Seo";
import { honours } from "@/data/honoursData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const Honours = () => {
  return (
    <section id="honours" className="py-20 md:py-32">
      <Seo
        title="Honours"
        description="Honours and recognition earned by Krithik Sharan for student representation and contribution to the student experience at the University of Leeds."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Honours</h1>
          <div className="w-20 h-1 bg-primary mx-auto mt-2" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {honours.map((honour) => (
            <HonourCard key={honour.title} {...honour} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Honours;
