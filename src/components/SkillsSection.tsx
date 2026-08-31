import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skillsData";

const SkillsSection = ({ className }: { className?: string }) => {
  return (
    <div className={className}>
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-lg border border-border/50 bg-card/50 p-5"
          >
            <h3 className="font-semibold mb-3">
              <span className="mr-2">{group.emoji}</span>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
