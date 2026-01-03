import { Code, Lightbulb, Cpu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tracks = [
  {
    icon: Code,
    title: 'CodeVerse',
    subtitle: 'Software & AI',
    color: 'cyan',
  },
  {
    icon: Lightbulb,
    title: 'IdeaVerse',
    subtitle: 'Startup & Innovation',
    color: 'magenta',
  },
  {
    icon: Cpu,
    title: 'TechnoVerse',
    subtitle: 'Hardware & IoT',
    color: 'purple',
  },
];

export const TracksSection = () => {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-3 animate-fade-in-up">
            CHOOSE YOUR PATH
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider animate-fade-in-up delay-100">
            <span className="text-gradient-neon">HACKATHON</span> TRACKS
          </h2>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl mx-auto mb-8">
          {tracks.map((track, index) => (
            <div
              key={track.title}
              className="group relative glass-card p-6 hover:scale-105 transition-all duration-500 text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div 
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl ${
                  track.color === 'cyan' 
                    ? 'bg-neon-cyan/20' 
                    : track.color === 'magenta' 
                    ? 'bg-neon-magenta/20' 
                    : 'bg-cosmic-purple/30'
                }`}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                {/* Icon */}
                <div 
                  className={`w-14 h-14 rounded-lg flex items-center justify-center transition-all duration-500 ${
                    track.color === 'cyan'
                      ? 'bg-primary/20 text-primary group-hover:shadow-glow-cyan'
                      : track.color === 'magenta'
                      ? 'bg-accent/20 text-accent group-hover:shadow-glow-magenta'
                      : 'bg-secondary/20 text-secondary group-hover:shadow-glow-purple'
                  }`}
                >
                  <track.icon className="w-7 h-7" />
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display text-xl font-bold tracking-wider text-foreground">
                    {track.title}
                  </h3>
                  <p className={`font-display text-sm tracking-wider ${
                    track.color === 'cyan' 
                      ? 'text-primary' 
                      : track.color === 'magenta' 
                      ? 'text-accent' 
                      : 'text-secondary'
                  }`}>
                    {track.subtitle}
                  </p>
                </div>
              </div>

              {/* Border Gradient on Hover */}
              <div 
                className={`absolute inset-0 rounded-xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  track.color === 'cyan' 
                    ? 'group-hover:border-primary/50' 
                    : track.color === 'magenta' 
                    ? 'group-hover:border-accent/50' 
                    : 'group-hover:border-secondary/50'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Button variant="neon" className="group">
            Learn More
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
