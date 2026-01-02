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
    <section className="relative py-32">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-neon-magenta/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-heading text-sm tracking-[0.3em] text-primary mb-4">
            CODEVERSE DOMAINS
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider mb-6">
            CHOOSE YOUR <span className="text-gradient-neon">TRACK</span>
          </h2>
          <p className="font-sans text-muted-foreground text-lg">
            Explore diverse domains and build solutions that push the boundaries of innovation.
          </p>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tracks.map((track, index) => {
            const colors = colorClasses[track.color as keyof typeof colorClasses];
            return (
              <div
                key={track.title}
                className={`group relative p-6 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/40 ${colors.border} ${colors.glow} transition-all duration-500 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 mb-5 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center transition-all duration-500`}>
                    <track.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold tracking-wider text-foreground mb-3">
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    {track.description}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${colors.bg} rotate-45 opacity-50`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
