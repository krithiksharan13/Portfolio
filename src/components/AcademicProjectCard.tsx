import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { AcademicProject } from '@/data/academicProjectsData';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

interface AcademicProjectCardProps extends AcademicProject {}

const AcademicProjectCard = ({
  title,
  emoji,
  image,
  tag,
  subtitle,
  developers,
  abstract,
  overview,
  objectives,
  methods,
  tools,
  results,
  futureWork,
  contributors,
  disclaimer,
  githubUrl,
}: AcademicProjectCardProps) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group">
        {/* Header with image */}
        <div className="aspect-video overflow-hidden relative">
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
        </div>
        
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription className="line-clamp-2">{subtitle}</CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
            {abstract || overview}
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
        
        <CardFooter className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" className="flex-1">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{emoji}</span>
                  <div>
                    <DialogTitle className="text-xl">{title}</DialogTitle>
                    <Badge 
                      className={`mt-1 ${
                        tag === 'Postgraduate' 
                          ? 'bg-primary text-primary-foreground' 
                          : ''
                      }`}
                      variant={tag === 'Undergraduate' ? 'secondary' : 'default'}
                    >
                      {tag}
                    </Badge>
                  </div>
                </div>
              </DialogHeader>
              
              <div className="space-y-5 mt-4">
                <p className="text-sm text-muted-foreground italic border-l-2 border-primary/50 pl-3">
                  {subtitle}
                </p>

                {developers && developers.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Developed by:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {developers.map((dev, idx) => (
                        <li key={idx}>{dev}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {(abstract || overview) && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2">
                      {abstract ? 'Abstract' : 'Overview'}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {abstract || overview}
                    </p>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-semibold mb-2">Objectives</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    {objectives.map((obj, idx) => (
                      <li key={idx}>{obj}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Methods</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      {methods.map((method, idx) => (
                        <li key={idx}>{method}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {tools.map((tool, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-2">Key Results</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                    {results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>

                {futureWork && futureWork.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Future Work</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      {futureWork.map((work, idx) => (
                        <li key={idx}>{work}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {contributors && contributors.length > 0 && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Contributors</h4>
                    <p className="text-sm text-muted-foreground">
                      {contributors.join(' • ')}
                    </p>
                  </div>
                )}

                {disclaimer && (
                  <div className="bg-muted/50 rounded-md p-3 border border-border/50">
                    <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">
                      Disclaimer
                    </h4>
                    <p className="text-xs text-muted-foreground italic">
                      {disclaimer}
                    </p>
                  </div>
                )}

                <Button asChild variant="outline" className="w-full">
                  <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    View on GitHub
                  </a>
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <a href={githubUrl} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon">
              <Github className="w-4 h-4" />
            </Button>
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default AcademicProjectCard;
