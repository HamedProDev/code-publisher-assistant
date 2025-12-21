import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import schoolLogo from "@/assets/school-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={schoolLogo} alt="School Logo" className="h-12 w-auto brightness-0 invert" />
              <div>
                <h3 className="font-poppins font-semibold text-lg">Lycée de Ruhango</h3>
                <p className="text-sm text-background/70">Ikirezi TSS</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              A leading technical secondary school in Rwanda providing quality education and practical skills for the 21st century workforce.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-secondary transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Programs", path: "/programs" },
                { name: "Admissions", path: "/admissions" },
                { name: "News & Events", path: "/news" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-secondary hover:pl-1 transition-all text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-sm">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Lycée de Ruhango Ikirezi TSS<br />
                  Ruhango District, Southern Province<br />
                  Rwanda
                </span>
              </li>
              <li className="flex gap-3 text-sm">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/70">+250 788 466 634</span>
              </li>
              <li className="flex gap-3 text-sm">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-background/70">
                  info@lyceeruhango.rw<br />
                  admissions@lyceeruhango.rw
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-poppins font-semibold text-lg mb-6 relative pb-3 after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-secondary">
              Newsletter
            </h3>
            <p className="text-background/70 text-sm mb-4">
              Subscribe to receive updates on admissions, events, and news.
            </p>
            <form className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Lycée de Ruhango Ikirezi Technical Secondary School. All Rights Reserved.
          </p>
          <p className="text-background/50 text-xs mt-2 flex items-center justify-center gap-1">
            Designed with <Heart className="w-3 h-3 text-destructive" /> for technical education in Rwanda
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
