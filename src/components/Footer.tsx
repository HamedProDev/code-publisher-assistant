import { Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background/95 border-t border-primary/10 pt-16 pb-6">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
          <a href="#home" className="text-2xl font-extrabold text-gradient">
            HamedDev
          </a>
          
          <div className="flex gap-6">
            <a 
              href="https://github.com/hameddevpro01" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center text-foreground text-xl transition-all duration-400 hover:text-primary hover:translate-y-[-10px] hover:scale-110 hover:bg-primary/10"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="mailto:hamedhussein001@gmail.com"
              className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center text-foreground text-xl transition-all duration-400 hover:text-primary hover:translate-y-[-10px] hover:scale-110 hover:bg-primary/10"
              title="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a 
              href="#contact"
              className="w-14 h-14 rounded-full bg-foreground/5 flex items-center justify-center text-foreground text-xl transition-all duration-400 hover:text-primary hover:translate-y-[-10px] hover:scale-110 hover:bg-primary/10"
              title="Contact"
            >
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="text-center pt-6 border-t border-foreground/5">
          <p className="text-muted-foreground text-sm">
            © 2025 Hamed Hussein. All rights reserved. | Full Stack Developer based in Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
