import { Lightbulb, Brain, Cpu, TrendingUp } from 'lucide-react';

const tracks = [
  {
    icon: Lightbulb,
    title: 'Open Innovation',
    description: 'Build solutions for real-world challenges with no boundaries. Let your creativity lead the way.',
    color: 'cyan',
  },
  {
    icon: Brain,
    title: 'GenAI',
    description: 'Harness the power of generative AI to create intelligent applications that think and create.',
    color: 'magenta',
  },
  {
    icon: Cpu,
    title: 'MedTech',
    description: 'Revolutionize healthcare with cutting-edge technology solutions for diagnostics and treatment.',
    color: 'purple',
  },
  {
    icon: TrendingUp,
    title: 'FinTech',
    description: 'Transform financial services with innovative solutions for payments, banking, and investments.',
    color: 'orange',
  },
];

const colorClasses = {
  cyan: {
    bg: 'from-primary/20 to-accent/10',
    border: 'hover:border-primary/60',
    glow: 'group-hover:shadow-glow-cyan',
    icon: 'text-primary',
  },
  magenta: {
    bg: 'from-neon-magenta/20 to-neon-magenta/5',
    border: 'hover:border-neon-magenta/60',
    glow: 'group-hover:shadow-glow-magenta',
    icon: 'text-neon-magenta',
  },
  purple: {
    bg: 'from-neon-purple/20 to-neon-purple/5',
    border: 'hover:border-neon-purple/60',
    glow: 'group-hover:shadow-glow-purple',
    icon: 'text-neon-purple',
  },
  orange: {
    bg: 'from-orange-500/20 to-orange-500/5',
    border: 'hover:border-orange-500/60',
    glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]',
    icon: 'text-orange-400',
  },
};

export const CodeVerseTracksSection = () => {
  return (
    <section className="relative py-16 md:py-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[250px] h-[250px] bg-neon-magenta/5 rounded-full blur-[60px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-3">
            CODEVERSE DOMAINS
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider">
            CHOOSE YOUR <span className="text-gradient-neon">TRACK</span>
          </h2>
        </div>

        {/* Tracks Grid - Horizontal compact cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {tracks.map((track, index) => {
            const colors = colorClasses[track.color as keyof typeof colorClasses];
            return (
              <div
                key={track.title}
                className={`group relative p-4 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 ${colors.border} ${colors.glow} transition-all duration-500 hover:-translate-y-1`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content - Compact */}
                <div className="relative z-10 flex items-center gap-3">
                  {/* Icon */}
                  <div className={`w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-to-br ${colors.bg} flex items-center justify-center transition-all duration-500`}>
                    <track.icon className={`w-5 h-5 ${colors.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-sm md:text-base font-bold tracking-wider text-foreground">
                    {track.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
