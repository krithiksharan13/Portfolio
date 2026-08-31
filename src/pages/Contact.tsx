
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-2"></div>
          <p className="max-w-2xl mx-auto mt-6 text-lg text-foreground/80">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
          </p>

          <div className="flex justify-center gap-4 mt-8">
            <a href="tel:+447818568491" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon"><Phone /></Button>
            </a>
            <a href="mailto:krithiksharan13@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon"><Mail /></Button>
            </a>
            <a href="https://github.com/krithiksharan13" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon"><Github /></Button>
            </a>
            <a href="https://www.linkedin.com/in/krithiksharan" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon"><Linkedin /></Button>
            </a>
          </div>

          <div className="mt-12">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
