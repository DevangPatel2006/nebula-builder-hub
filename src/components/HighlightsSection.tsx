import { Clock, Users, Trophy, Briefcase, Zap, Star } from 'lucide-react';

const highlights = [
  {
    icon: Clock,
    title: '36 Hours',
    description: 'Non-stop coding marathon',
  },
  {
    icon: Users,
    title: '500+ Hackers',
    description: 'From across India',
  },
  {
    icon: Trophy,
    title: '₹5L+ Prizes',
    description: 'In cash and goodies',
  },
  {
    icon: Briefcase,
    title: 'Top Mentors',
    description: 'Industry experts guidance',
  },
  {
    icon: Zap,
    title: 'Fast Track',
    description: 'Internship opportunities',
  },
  {
    icon: Star,
    title: 'Swag & Goodies',
    description: 'For all participants',
  },
];

export const HighlightsSection = () => {
  return (
    <section className="relative py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4">
            WHY JOIN US
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider mb-6">
            EVENT <span className="text-gradient-neon">HIGHLIGHTS</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Experience the thrill of innovation with world-class amenities, expert mentorship, and life-changing opportunities.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all duration-500"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:shadow-glow-cyan transition-all duration-500">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Title Only */}
              <h3 className="font-display text-base font-bold tracking-wider text-foreground">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
