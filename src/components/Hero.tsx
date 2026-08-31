
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  const defaultImage = "/lovable-uploads/6f80d9a7-6e7c-4703-a7c1-a9470358b9ec.webp";
  const hoverImage = "/lovable-uploads/788976e7-1c83-4adf-8dbf-06ecde26b348.webp";
  const resumeImageUrl = "/lovable-uploads/f164f755-3db9-4fd9-a20c-fd4ec12b4e51.webp";

  const [generating, setGenerating] = useState(false);

  const greetingWords = ["Hi,", "I’m"];
  const nameWords = ["Krithik", "Sharan", "S", "A"];
  let charIndex = 0;
  const nextDelay = () => `${charIndex++ * 45}ms`;

  const handleDownloadResume = async () => {
    setGenerating(true);
    try {
      const { default: jsPDF } = await import('jspdf');
      await new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = resumeImageUrl;
        img.onerror = () => reject(new Error('resume image failed to load'));
        img.onload = () => {
          const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      const imageWidth = img.width;
      const imageHeight = img.height;
      const ratio = imageWidth / imageHeight;

      let pdfImageWidth = pageWidth - 20; // Margin
      let pdfImageHeight = pdfImageWidth / ratio;

      if (pdfImageHeight > pageHeight - 20) {
        pdfImageHeight = pageHeight - 20;
        pdfImageWidth = pdfImageHeight * ratio;
      }
      
      const x = (pageWidth - pdfImageWidth) / 2;
      const y = 10;

      pdf.addImage(img, 'WEBP', x, y, pdfImageWidth, pdfImageHeight);
      
      // Add clickable link overlays for contact info on the PDF.
      // NOTE: The coordinates are estimated based on the visual layout of the resume image.
      // If the resume image is updated, these coordinates may need to be adjusted.
      const emailUrl = "mailto:krithiksharan13@gmail.com";
      const linkedInUrl = "https://www.linkedin.com/in/krithiksharan";
      const githubUrl = "https://github.com/krithiksharan13";

      // Ratios for positioning and sizing the link areas relative to the image size
      const linkXRatio = 0.55;
      const linkWidthRatio = 0.4;
      const linkHeightRatio = 0.0125;

      const addLink = (yRatio: number, url: string) => {
        const linkX = x + pdfImageWidth * linkXRatio;
        const linkY = y + pdfImageHeight * yRatio;
        const linkWidth = pdfImageWidth * linkWidthRatio;
        const linkHeight = pdfImageHeight * linkHeightRatio;
        pdf.link(linkX, linkY, linkWidth, linkHeight, { url });
      };

      // Add links for email, LinkedIn, and GitHub
      addLink(0.08, emailUrl);
      addLink(0.105, linkedInUrl);
      addLink(0.1175, githubUrl);

          pdf.save('Krithik_Sharan_Resume.pdf');
          resolve();
        };
      });
    } catch (err) {
      console.error('resume download failed', err);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center lg:text-left bg-grid-white/[0.05]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {greetingWords.map((word, wi) => (
                <span key={`g-${wi}`} className="inline-block whitespace-nowrap mr-[0.25em]">
                  {word.split("").map((char, ci) => (
                    <span
                      key={ci}
                      className="inline-block animate-wave-text"
                      style={{ animationDelay: nextDelay() }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
              <span className="text-primary">
                {nameWords.map((word, wi) => (
                  <span key={`n-${wi}`} className="inline-block whitespace-nowrap mr-[0.25em]">
                    {word.split("").map((char, ci) => (
                      <span
                        key={ci}
                        className="inline-block animate-wave-text"
                        style={{ animationDelay: nextDelay() }}
                      >
                        {char}
                      </span>
                    ))}
                  </span>
                ))}
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto md:mx-0">
              A Data Analyst who transforms numbers into narratives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <RouterLink to="/portfolio">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground w-full sm:w-auto">
                  View Portfolio <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </RouterLink>
              <Button
                onClick={handleDownloadResume}
                disabled={generating}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                {generating ? (
                  <>
                    Preparing… <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                  </>
                ) : (
                  <>
                    Download Resume <Download className="ml-2 h-5 w-5" />
                  </>
                )}
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-2 lg:order-1 flex justify-center group"
          >
            <div className="relative w-64 md:w-80 aspect-square">
              <img 
                src={defaultImage} 
                alt="Krithik Sharan Pixel Art" 
                className="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out group-hover:opacity-0"
              />
              <img 
                src={hoverImage} 
                alt="Krithik Sharan Pixel Art Hover" 
                className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
