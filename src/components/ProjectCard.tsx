import { Link } from 'react-router-dom';
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
import { ArrowRight, Github } from 'lucide-react';
import { slugify } from '@/lib/projects';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  imageUrl: string;
  githubUrl?: string;
  /** Override the derived slug if needed. */
  slug?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ProjectCard = ({ title, description, tools, imageUrl, githubUrl, slug }: ProjectCardProps) => {
  const to = `/portfolio/${slug ?? slugify(title)}`;

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group">
        <Link to={to} className="block aspect-video overflow-hidden" aria-label={`${title} - details`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </Link>
        <CardHeader>
          <CardTitle>
            <Link to={to} className="hover:text-primary transition-colors">
              {title}
            </Link>
          </CardTitle>
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
        <CardFooter className="gap-2">
          <Button asChild variant="secondary" className="flex-1">
            <Link to={to}>
              Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {githubUrl && (
            <Button asChild variant="outline" size="icon" aria-label="GitHub repository">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
