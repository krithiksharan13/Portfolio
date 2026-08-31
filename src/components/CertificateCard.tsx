import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Certificate } from '@/data/certificatesData';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const CertificateCard = ({ title, issuer, date, credentialId, url, logo }: Certificate) => {
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-border/50">
        <CardContent className="p-5 flex flex-col h-full">
          <div className="flex items-start gap-4 mb-3">
            <img
              src={logo}
              alt={`${issuer} logo`}
              className="w-10 h-10 rounded object-contain flex-shrink-0"
              loading="lazy"
              width={40}
              height={40}
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm leading-tight text-foreground">{title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{issuer}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
            <Award className="w-3.5 h-3.5 text-primary flex-shrink-0" />
            <span>Issued {date}</span>
          </div>

          {credentialId && (
            <p className="text-xs text-muted-foreground/70 truncate mb-3">
              ID: {credentialId}
            </p>
          )}

          <div className="mt-auto">
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="w-full text-xs gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5" />
                  View Certificate
                </Button>
              </a>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default CertificateCard;
