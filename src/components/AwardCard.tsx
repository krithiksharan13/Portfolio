import { useState } from "react";
import { motion } from "framer-motion";
import { Award as AwardIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Award } from "@/data/awardsData";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const AwardCard = ({ title, placement, issuer, date, associatedWith, description, images = [] }: Award) => {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <motion.article
        variants={itemVariants}
        className="flex h-full flex-col rounded-xl border border-border/60 bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
      >
        <div className="mb-3 flex items-start justify-between gap-3">
          <AwardIcon className="h-6 w-6 shrink-0 text-primary" aria-hidden />
          {placement && (
            <Badge className="shrink-0 bg-primary/10 text-primary">{placement}</Badge>
          )}
        </div>

        <h3 className="text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-1 text-sm text-foreground/60">
          {issuer} · {date}
        </p>
        {associatedWith && associatedWith !== issuer && (
          <p className="text-xs text-foreground/50">Associated with {associatedWith}</p>
        )}

        {description && (
          <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/80">
            {description}
          </p>
        )}

        {images.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
            {images.map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setPreview(img)}
                className="overflow-hidden rounded-md border border-border/50 transition-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                aria-label={`View: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-24 w-32 object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </motion.article>

      <Dialog open={!!preview} onOpenChange={(o) => !o && setPreview(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-base font-normal text-foreground/70">
              {preview?.alt}
            </DialogTitle>
          </DialogHeader>
          {preview && (
            <img
              src={preview.src}
              alt={preview.alt}
              className="max-h-[75vh] w-full rounded-md object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AwardCard;
