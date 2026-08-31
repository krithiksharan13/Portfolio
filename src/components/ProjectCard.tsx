
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  githubUrl?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ title, description, tools, imageUrl, githubUrl }: ProjectCardProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group">
        <div className="aspect-video overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary">
                {tool}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          {githubUrl ? (
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full">
                <Github className="mr-2" /> Visit Github Page
              </Button>
            </a>
          ) : (
            <Button variant="outline" className="w-full" disabled>
              <Github className="mr-2" /> Visit Github Page
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
