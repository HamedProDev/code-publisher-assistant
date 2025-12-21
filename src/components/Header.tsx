import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 border-b border-primary/10 transition-all duration-400 ${
        isScrolled 
          ? 'h-[70px] bg-background/95 backdrop-blur-xl shadow-[0_5px_20px_rgba(0,0,0,0.5)]' 
          : 'h-20 bg-background/95 backdrop-blur-xl'
      }`}
    >
      <div className="container h-full mx-auto px-5">
        <nav className="flex justify-between items-center h-full">
          <a 
            href="#home" 
            className="text-2xl font-extrabold text-gradient tracking-wide"
          >
            HamedDev
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-foreground font-semibold text-[1.05rem] py-1 transition-colors hover:text-primary group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-400 group-hover:w-full" />
              </a>
            ))}
            <Button 
              asChild
              className="bg-gradient-to-r from-primary to-[hsl(210,100%,40%)] hover:opacity-90 text-primary-foreground font-bold px-5 py-2 rounded-full"
            >
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary text-2xl transition-transform hover:rotate-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full bg-background/98 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-fade-in-up">
          <div className="flex flex-col gap-4 p-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground font-semibold text-lg hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button 
              asChild
              className="bg-gradient-to-r from-primary to-[hsl(210,100%,40%)] hover:opacity-90 text-primary-foreground font-bold rounded-full mt-2"
            >
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
