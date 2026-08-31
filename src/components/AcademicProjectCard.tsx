import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import type { AcademicProject } from '@/data/academicProjectsData';
import { slugify } from '@/lib/projects';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type AcademicProjectCardProps = AcademicProject;

const AcademicProjectCard = ({
  title,
  image,
  tag,
  subtitle,
  abstract,
  overview,
  tools,
  githubUrl,
}: AcademicProjectCardProps) => {
  const to = `/portfolio/${slugify(title)}`;

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group">
        <Link to={to} className="block aspect-video overflow-hidden relative" aria-label={`${title} — details`}>
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <Badge
            className={`absolute top-3 right-3 ${
              tag === 'Postgraduate'
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground'
            }`}
          >
            {tag}
          </Badge>
        </Link>

        <CardHeader>
          <CardTitle className="text-lg">
            <Link to={to} className="hover:text-primary transition-colors">
              {title}
            </Link>
          </CardTitle>
          <CardDescription className="line-clamp-2">{subtitle}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {overview || abstract}
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.slice(0, 4).map((tool) => (
              <Badge key={tool} variant="secondary" className="bg-primary/10 text-primary text-xs">
                {tool}
              </Badge>
            ))}
            {tools.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{tools.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="gap-2">
          <Button asChild variant="secondary" className="flex-1">
            <Link to={to}>
              Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="GitHub repository">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AcademicProjectCard;
