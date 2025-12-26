import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import htsLogo from '@/assets/hts-logo.jpg';

export const Footer = () => {
  return (
    <footer className="relative bg-card/50 backdrop-blur-xl border-t border-border/50">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-cosmic-purple/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <img
                src={htsLogo}
                alt="Hack The Spring 2026"
                className="h-12 w-auto"
                style={{
                  filter: 'drop-shadow(0 0 10px hsl(186 100% 50% / 0.5))',
                }}
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Hack The Spring 2026 - Where innovation meets opportunity. 
              Join us for the ultimate coding experience.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-muted hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-display text-lg tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Team', 'Gallery'].map((link) => (
                <li key={link}>
                  <Link
                    to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-display text-lg tracking-wider text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>
                  Government Engineering College,<br />
                  Sector 28, Gandhinagar, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:hackthespring@gec.ac.in" className="hover:text-primary transition-colors">
                  hackthespring@gec.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-display text-lg tracking-wider text-foreground">
              Stay Updated
            </h4>
            <p className="text-muted-foreground text-sm">
              Subscribe to get the latest updates about HTS 26.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-muted border border-border rounded-lg text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-display text-sm hover:shadow-glow-cyan transition-all duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © 2026 Hack The Spring. Organized by Government Engineering College, Gandhinagar.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with 💜 for innovators
          </p>
        </div>
      </div>
    </footer>
  );
};
