import { useState } from 'react';
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,
} from '@/components/ui/dialog';
import { motion } from 'framer-motion';
import { Trophy, Eye, CheckCircle } from 'lucide-react';
import type { Competition } from '@/data/competitionsData';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const CompetitionCard = ({ title, position, issuer, date, summary, details, highlights, closingNote, images }: Competition) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div variants={itemVariants}>
        <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1 group relative">
          <div className="absolute top-4 right-4 z-10">
            <Badge className="bg-yellow-500 text-yellow-950 flex items-center gap-1">
              <Trophy className="h-3 w-3" />
              {position}
            </Badge>
          </div>
          <CardHeader>
            <CardTitle className="pr-24 text-lg">{title}</CardTitle>
            <CardDescription className="text-xs">{issuer} · {date}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between gap-4">
            <p className="text-sm text-muted-foreground leading-relaxed">{summary}</p>
            <Button variant="outline" size="sm" className="w-full" onClick={() => setOpen(true)}>
              <Eye className="mr-2 h-4 w-4" /> View Details
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-yellow-500 text-yellow-950 flex items-center gap-1">
                <Trophy className="h-3 w-3" />
                {position}
              </Badge>
            </div>
            <DialogTitle className="text-xl">{title}</DialogTitle>
            <DialogDescription>{issuer} · {date}</DialogDescription>
          </DialogHeader>

          <div className="space-y-4 mt-2">
            <p className="text-sm leading-relaxed">{summary}</p>

            {details.map((d, i) => (
              <p key={i} className="text-sm leading-relaxed">{d}</p>
            ))}

            <div>
              <h4 className="text-sm font-semibold mb-2">Recognised for:</h4>
              <ul className="space-y-1.5">
                {highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm leading-relaxed italic text-muted-foreground">{closingNote}</p>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={img.alt}
                  className="rounded-lg w-full h-40 object-cover border border-border"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CompetitionCard;
