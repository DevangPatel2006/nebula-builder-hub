import { Code, Lightbulb, Cpu, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tracks = [
  {
    icon: Code,
    title: 'CodeVerse',
    subtitle: 'Software & AI',
    description: 'Build innovative software solutions powered by cutting-edge AI and machine learning technologies.',
    color: 'cyan',
  },
  {
    icon: Lightbulb,
    title: 'IdeaVerse',
    subtitle: 'Startup & Innovation',
    description: 'Transform your groundbreaking ideas into viable startup concepts with real-world potential.',
    color: 'magenta',
  },
  {
    icon: Cpu,
    title: 'TechnoVerse',
    subtitle: 'Hardware & IoT',
    description: 'Create physical products and IoT solutions that bridge the digital and physical worlds.',
    color: 'purple',
  },
];

export const TracksSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4 animate-fade-in-up">
            CHOOSE YOUR PATH
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider mb-6 animate-fade-in-up delay-100">
            <span className="text-gradient-neon">HACKATHON</span> TRACKS
          </h2>
          <p className="text-muted-foreground text-lg animate-fade-in-up delay-200">
            Three distinct domains, unlimited possibilities. Pick your arena and show the world what you're made of.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div
              key={track.title}
              className="group relative glass-card p-8 hover:scale-105 transition-all duration-500"
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
              <div className="relative z-10">
                {/* Icon */}
                <div 
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                    track.color === 'cyan'
                      ? 'bg-primary/20 text-primary group-hover:shadow-glow-cyan'
                      : track.color === 'magenta'
                      ? 'bg-accent/20 text-accent group-hover:shadow-glow-magenta'
                      : 'bg-secondary/20 text-secondary group-hover:shadow-glow-purple'
                  }`}
                >
                  <track.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-bold tracking-wider mb-2 text-foreground">
                  {track.title}
                </h3>
                <p className={`font-display text-sm tracking-wider mb-4 ${
                  track.color === 'cyan' 
                    ? 'text-primary' 
                    : track.color === 'magenta' 
                    ? 'text-accent' 
                    : 'text-secondary'
                }`}>
                  {track.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {track.description}
                </p>

                {/* Link */}
                <Button variant="ghost" className="group/btn p-0 h-auto text-muted-foreground hover:text-primary">
                  Learn More 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
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
      </div>
    </section>
  );
};
