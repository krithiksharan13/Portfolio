import { motion } from "framer-motion";
import AwardCard from "@/components/AwardCard";
import Seo from "@/components/Seo";
import { awards } from "@/data/awardsData";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const Awards = () => {
  return (
    <section id="awards" className="py-20 md:py-32">
      <Seo
        title="Honours & Awards"
        description="Awards and recognition earned by Krithik Sharan - hackathon placements, student representation awards, and university honours."
      />
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Honours &amp; Awards</h1>
          <div className="w-20 h-1 bg-primary mx-auto mt-2" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto"
        >
          {awards.map((award) => (
            <AwardCard key={award.title} {...award} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
