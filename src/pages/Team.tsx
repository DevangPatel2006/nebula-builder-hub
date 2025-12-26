import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StarField } from '@/components/StarField';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
  { name: 'Aarav Patel', role: 'Lead Organizer', image: null },
  { name: 'Priya Sharma', role: 'Technical Head', image: null },
  { name: 'Rohan Mehta', role: 'Design Lead', image: null },
  { name: 'Ananya Gupta', role: 'Marketing Head', image: null },
  { name: 'Vikram Singh', role: 'Sponsorship Lead', image: null },
  { name: 'Neha Reddy', role: 'Operations Head', image: null },
  { name: 'Arjun Kumar', role: 'Tech Team', image: null },
  { name: 'Ishita Joshi', role: 'Content Lead', image: null },
];

const Team = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <StarField />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4 animate-fade-in-up">
            THE CREW
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-wider mb-6 animate-fade-in-up delay-100">
            MEET OUR <span className="text-gradient-neon">TEAM</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-200">
            The passionate individuals behind Hack The Spring 2026, working tirelessly to create 
            an unforgettable experience for all participants.
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={member.name}
                className="group relative"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Card */}
                <div className="relative glass-card p-6 text-center hover:scale-105 transition-all duration-500 overflow-hidden">
                  {/* Hologram Effect Border */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 animate-shimmer" />
                  </div>

                  {/* Avatar */}
                  <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border-2 border-primary/50 group-hover:border-primary group-hover:shadow-glow-cyan transition-all duration-500">
                    <span className="font-display text-3xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>

                  {/* Info */}
                  <div className="relative z-10">
                    <h3 className="font-display text-lg font-bold tracking-wider text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm font-display tracking-wider mb-4">
                      {member.role}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href="#"
                        className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                      >
                        <Linkedin size={16} />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                      >
                        <Twitter size={16} />
                      </a>
                      <a
                        href="#"
                        className="p-2 rounded-lg bg-muted/50 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all"
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
                  <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
                  <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
                  <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-wider mb-4">
              JOIN THE <span className="text-gradient-neon">CREW</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Want to be part of organizing HTS 26? We're always looking for passionate individuals 
              to join our team.
            </p>
            <a
              href="mailto:team@hackthespring.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-display tracking-wider hover:shadow-glow-cyan transition-all duration-300"
            >
              <Mail size={20} />
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Team;
