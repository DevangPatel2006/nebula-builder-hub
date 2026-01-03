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

        {/* Tracks Grid - Horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {tracks.map((track, index) => (
            <div
              key={track.title}
              className="group relative glass-card p-4 hover:scale-105 transition-all duration-500"
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

              {/* Content - Horizontal layout */}
              <div className="relative z-10 flex items-center gap-4">
                {/* Icon */}
                <div 
                  className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center transition-all duration-500 ${
                    track.color === 'cyan'
                      ? 'bg-primary/20 text-primary group-hover:shadow-glow-cyan'
                      : track.color === 'magenta'
                      ? 'bg-accent/20 text-accent group-hover:shadow-glow-magenta'
                      : 'bg-secondary/20 text-secondary group-hover:shadow-glow-purple'
                  }`}
                >
                  <track.icon className="w-6 h-6" />
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h3 className="font-display text-lg font-bold tracking-wider text-foreground">
                    {track.title}
                  </h3>
                  <p className={`font-display text-xs tracking-wider ${
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
      </div>
    </section>
  );
};
