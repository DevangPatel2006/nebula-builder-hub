const timelineEvents = [
  {
    date: 'Feb 1, 2026',
    title: 'Registration Opens',
    description: 'Start your journey by registering your team',
    status: 'upcoming',
  },
  {
    date: 'Feb 20, 2026',
    title: 'Registration Closes',
    description: 'Last date to submit your application',
    status: 'upcoming',
  },
  {
    date: 'Feb 28, 2026',
    title: 'Shortlisting',
    description: 'Selected teams will be announced',
    status: 'upcoming',
  },
  {
    date: 'Mar 14, 2026',
    title: 'Hackathon Begins',
    description: '36 hours of non-stop innovation',
    status: 'upcoming',
  },
  {
    date: 'Mar 15, 2026',
    title: 'Results & Awards',
    description: 'Winners announced and prizes distributed',
    status: 'upcoming',
  },
];

export const TimelineSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-purple/10 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4">
            MARK YOUR CALENDAR
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider mb-6">
            EVENT <span className="text-gradient-neon">TIMELINE</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Key dates and milestones on your journey to HTS 26.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2 hidden md:block" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="inline-block glass-card p-6 hover:scale-105 transition-transform duration-300">
                    <span className="font-display text-sm tracking-wider text-primary">
                      {event.date}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-wider text-foreground mt-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:flex items-center justify-center z-10">
                  <div className="w-5 h-5 rounded-full bg-primary shadow-glow-cyan relative">
                    <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>

          {/* Light Trail Effect */}
          <div className="absolute left-1/2 top-0 bottom-0 w-8 transform -translate-x-1/2 pointer-events-none hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-transparent blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};
