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
import { ArrowRight, Trophy } from 'lucide-react';
import type { Competition } from '@/data/competitionsData';
import { slugify } from '@/lib/projects';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CompetitionCard = ({ title, position, issuer, date, summary }: Competition) => {
  const to = `/portfolio/${slugify(title)}`;

  return (
    <motion.div variants={itemVariants} className="h-full">
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group relative">
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-yellow-500 text-yellow-950 flex items-center gap-1">
            <Trophy className="h-3 w-3" /> {position}
          </Badge>
        </div>
        <CardHeader>
          <CardTitle className="pr-24 text-lg">
            <Link to={to} className="hover:text-primary transition-colors">
              {title}
            </Link>
          </CardTitle>
          <CardDescription className="text-xs">
            {issuer} · {date}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
        </CardContent>
        <CardFooter>
          <Button asChild variant="secondary" size="sm" className="w-full">
            <Link to={to}>
              Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CompetitionCard;
