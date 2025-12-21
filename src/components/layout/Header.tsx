import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Globe, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import schoolLogo from "@/assets/school-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("EN");
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admissions", path: "/admissions" },
    { name: "News", path: "/news" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed w-full top-0 z-50 bg-card shadow-soft">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">+250 788 466 634</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" />
              <span className="hidden md:inline">info@lyceeruhango.rw</span>
            </span>
            <span className="hidden lg:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              Ruhango District, Rwanda
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 px-2 py-1 border border-primary-foreground/30 rounded text-xs">
                <Globe className="w-3.5 h-3.5" />
                {language}
                <ChevronDown className="w-3 h-3" />
              </button>
              <div className="absolute top-full right-0 mt-1 bg-card text-foreground rounded shadow-lg min-w-[100px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <button onClick={() => setLanguage("EN")} className="block w-full px-3 py-2 text-left text-sm hover:bg-muted">English</button>
                <button onClick={() => setLanguage("FR")} className="block w-full px-3 py-2 text-left text-sm hover:bg-muted">Français</button>
                <button onClick={() => setLanguage("RW")} className="block w-full px-3 py-2 text-left text-sm hover:bg-muted">Kinyarwanda</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={schoolLogo} alt="Lycée de Ruhango Logo" className="h-14 md:h-16 w-auto" />
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-xl font-bold text-primary leading-tight font-poppins">
                Lycée de Ruhango Ikirezi TSS
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">Technical Secondary School of Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors py-1 ${
                  isActive(link.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    isActive(link.path) ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            ))}
            <Link to="/admin">
              <Button variant="outline" size="sm">Admin</Button>
            </Link>
            <Link to="/admissions">
              <Button size="sm">Apply Now</Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed top-[120px] left-0 w-full h-[calc(100vh-120px)] bg-card transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="container py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-medium py-2 border-b border-border ${
                isActive(link.path) ? "text-primary" : "text-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
              <Button variant="outline" className="w-full">Admin Dashboard</Button>
            </Link>
            <Link to="/admissions" onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full">Apply Now</Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
