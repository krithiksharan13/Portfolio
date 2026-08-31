
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { motion } from 'framer-motion';

interface ExperienceCardProps {
  role: string;
  company: string;
  duration: string;
  achievements: string[];
  description?: string;
  companyLink?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const ExperienceCard = ({ role, company, duration, achievements, description, companyLink }: ExperienceCardProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors duration-300 w-full">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between sm:items-start">
            <div className="mb-2 sm:mb-0">
              <CardTitle className="text-xl md:text-2xl text-primary">{role}</CardTitle>
              {companyLink ? (
                <a 
                  href={companyLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-foreground hover:text-primary transition-colors duration-200 hover:underline"
                >
                  {company}
                </a>
              ) : (
                <p className="text-lg font-semibold text-foreground">{company}</p>
              )}
            </div>
            <p className="text-sm text-foreground/60 text-left sm:text-right shrink-0 sm:ml-4">{duration}</p>
          </div>
          {description && <CardDescription className="pt-2 text-base">{description}</CardDescription>}
        </CardHeader>
        <CardContent>
          <h4 className="font-semibold mb-2 text-foreground">Key Achievements:</h4>
          <ul className="list-disc list-inside space-y-2 text-foreground/80">
            {achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExperienceCard;
