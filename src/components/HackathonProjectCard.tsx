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
import { ArrowRight, ExternalLink, Github, Medal, Trophy } from 'lucide-react';
import { slugify } from '@/lib/projects';

interface HackathonProjectCardProps {
  title: string;
  description: string;
  githubUrl: string;
  liveUrl: string;
  isWinner?: boolean;
  position?: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HackathonProjectCard = ({
  title,
  description,
  githubUrl,
  liveUrl,
  isWinner,
  position,
}: HackathonProjectCardProps) => {
  const to = `/portfolio/${slugify(title)}`;

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group relative">
        <div className="absolute top-4 right-4 z-10 flex gap-2">
          {isWinner && (
            <Badge className="bg-yellow-500 text-yellow-950 flex items-center gap-1">
              <Trophy className="h-3 w-3" /> Winner
            </Badge>
          )}
          {position && (
            <Badge variant="secondary" className="flex items-center gap-1">
              <Medal className="h-3 w-3 flex-shrink-0" /> {position}
            </Badge>
          )}
        </div>
        <CardHeader>
          <CardTitle className="pr-16">
            <Link to={to} className="hover:text-primary transition-colors">
              {title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-sm leading-relaxed line-clamp-4">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2">
          <Button asChild variant="secondary" size="sm" className="flex-1 min-w-[7rem]">
            <Link to={to}>
              Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" aria-label="GitHub repository">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </a>
          </Button>
          {liveUrl && (
            <Button asChild variant="outline" size="icon" aria-label="Live demo">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default HackathonProjectCard;
