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
            <p className="font-sans text-muted-foreground text-sm leading-relaxed">
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
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg tracking-wider text-foreground">
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
            <h4 className="font-heading text-lg tracking-wider text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm font-sans text-muted-foreground">
                <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                <span>
                  Government Engineering College,<br />
                  Sector 28, Gandhinagar, Gujarat
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:hackthespring@gec.ac.in" className="hover:text-primary transition-colors">
                  hackthespring@gec.ac.in
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm font-sans text-muted-foreground">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+91 98765 43210</span>
              </li>
            </ul>
          </div>

          {/* Location Map Widget */}
          <div className="space-y-6">
            <h4 className="font-heading text-lg tracking-wider text-foreground">
              Find Us
            </h4>
            <div className="relative w-full h-40 rounded-lg overflow-hidden border border-border/50 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.114777265913!2d72.63974411136952!3d23.202534578964893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2bb127814b0f%3A0xc4f447781b0f585!2sGovernment%20Engineering%20College%20Gandhinagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-70 group-hover:opacity-100 transition-opacity duration-300"
              />
              <a 
                href="https://maps.app.goo.gl/9VcJMoaZm9UhcXxy8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-20 cursor-pointer"
                title="Open in Google Maps"
              >
                <span className="sr-only">Open Location in Google Maps</span>
              </a>
            </div>
          </div>
        </div>

      {/* Bottom Bar - Centered text with minimal spacing */}
        <div className="mt-3 pt-2 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-[10px] sm:text-xs">
            © 2026 Hack The Spring. Organized by Government Engineering College, Gandhinagar.
          </p>
        </div>
      </div>
    </footer>
  );
};