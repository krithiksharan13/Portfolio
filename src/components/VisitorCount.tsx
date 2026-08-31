import { Eye } from "lucide-react";
import { useVisitorCount } from "@/hooks/useVisitorCount";
import { cn } from "@/lib/utils";

const VisitorCount = ({ className }: { className?: string }) => {
  const count = useVisitorCount();

  if (count === null) return null;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-sm text-foreground/60",
        className,
      )}
      aria-label={`${count.toLocaleString()} total visitors`}
    >
      <Eye className="h-4 w-4" />
      <span>
        <strong className="font-semibold text-foreground/80">
          {count.toLocaleString()}
        </strong>{" "}
        visitors
      </span>
    </span>
  );
};

export default VisitorCount;
