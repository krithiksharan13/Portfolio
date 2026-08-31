import { Github, Linkedin, Mail } from 'lucide-react';
import VisitorCount from '@/components/VisitorCount';

const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-border/50">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4 text-center text-foreground/60">
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/krithiksharan13"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/krithiksharan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:krithiksharan13@gmail.com"
            aria-label="Email"
            className="hover:text-primary transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <VisitorCount />

        <p className="text-sm">
          &copy; {new Date().getFullYear()} Krithik Sharan S A. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
