const timelineEvents = [
  { date: 'Feb 1', title: 'Registration Opens', description: 'Start your journey to innovation' },
  { date: 'Feb 20', title: 'Registration Closes', description: 'Last chance to join the mission' },
  { date: 'Feb 28', title: 'Shortlisting', description: 'Selected teams announced' },
  { date: 'Mar 14', title: 'Hackathon Begins', description: '36 hours of non-stop coding' },
  { date: 'Mar 15', title: 'Results & Awards', description: 'Celebrate the champions' },
];

export const TimelineSection = () => {
  return (
    <section className="relative py-20">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-20 pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4">
            MARK YOUR CALENDAR
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider">
            EVENT <span className="text-gradient-neon">TIMELINE</span>
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-2xl mx-auto">
          {/* Glowing vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-secondary" />
            <div 
              className="absolute inset-0 bg-gradient-to-b from-primary via-accent to-secondary blur-md opacity-60" 
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={event.title}
                  className={`relative flex items-center gap-6 md:gap-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div 
                    className={`flex-1 ml-16 md:ml-0 ${
                      isLeft ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div 
                      className="glass-card p-6 inline-block group hover:scale-105 transition-all duration-500"
                      style={{
                        boxShadow: '0 0 20px hsl(186 100% 50% / 0.1)',
                      }}
                    >
                      {/* Date Badge */}
                      <span 
                        className="inline-block px-3 py-1 rounded-full text-xs font-display tracking-wider mb-3"
                        style={{
                          background: 'linear-gradient(135deg, hsl(186 100% 50% / 0.2), hsl(300 100% 50% / 0.2))',
                          border: '1px solid hsl(186 100% 50% / 0.3)',
                        }}
                      >
                        {event.date}
                      </span>
                      
                      <h3 className="font-display text-xl font-bold tracking-wider text-foreground mb-2 group-hover:text-glow-cyan transition-all duration-300">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node with Glow */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                    {/* Outer glow ring */}
                    <div 
                      className="absolute inset-0 w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full animate-pulse"
                      style={{
                        background: 'radial-gradient(circle, hsl(186 100% 50% / 0.4) 0%, transparent 70%)',
                        left: '50%',
                        top: '50%',
                      }}
                    />
                    {/* Node circle */}
                    <div 
                      className="relative w-4 h-4 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, hsl(186 100% 60%), hsl(300 80% 60%))',
                        boxShadow: '0 0 15px hsl(186 100% 50% / 0.8), 0 0 30px hsl(186 100% 50% / 0.4)',
                      }}
                    />
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>

          {/* End node */}
          <div className="absolute left-6 md:left-1/2 -bottom-4 transform -translate-x-1/2">
            <div 
              className="w-6 h-6 rounded-full"
              style={{
                background: 'linear-gradient(135deg, hsl(280 70% 50%), hsl(300 100% 50%))',
                boxShadow: '0 0 20px hsl(300 100% 50% / 0.6), 0 0 40px hsl(300 100% 50% / 0.3)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
