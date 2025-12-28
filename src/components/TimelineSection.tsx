import { useEffect, useRef, useState } from 'react';
import { Rocket } from 'lucide-react';

const timelineEvents = [
  {
    date: 'Feb 1, 2026',
    title: 'Registration Opens',
    description: 'Start your journey by registering your team',
  },
  {
    date: 'Feb 20, 2026',
    title: 'Registration Closes',
    description: 'Last date to submit your application',
  },
  {
    date: 'Feb 28, 2026',
    title: 'Shortlisting',
    description: 'Selected teams will be announced',
  },
  {
    date: 'Mar 14, 2026',
    title: 'Hackathon Begins',
    description: '36 hours of non-stop innovation',
  },
  {
    date: 'Mar 15, 2026',
    title: 'Results & Awards',
    description: 'Winners announced and prizes distributed',
  },
];

export const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate progress based on section position
      const start = rect.top - viewportHeight;
      const end = rect.bottom;
      const total = end - start;
      const current = -start;
      
      const progress = Math.min(Math.max(current / total, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate spaceship position along the path
  const pathLength = 1200;
  const spaceshipOffset = scrollProgress * pathLength;

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-4">
            MARK YOUR CALENDAR
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-wider mb-6">
            EVENT <span className="text-gradient-neon">TIMELINE</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Key dates and milestones on your journey to HTS 26.
          </p>
        </div>

        {/* Timeline with curved path */}
        <div className="relative max-w-5xl mx-auto">
          {/* SVG Curved Path */}
          <svg
            className="absolute left-1/2 -translate-x-1/2 w-full h-full pointer-events-none hidden md:block"
            viewBox="0 0 400 1000"
            preserveAspectRatio="none"
            style={{ height: '100%', minHeight: '800px' }}
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(280 70% 50%)" />
                <stop offset="30%" stopColor="hsl(300 70% 50%)" />
                <stop offset="60%" stopColor="hsl(320 70% 50%)" />
                <stop offset="100%" stopColor="hsl(30 80% 60%)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Main curved path */}
            <path
              d="M 200 0 
                 C 350 100, 350 150, 200 200 
                 C 50 250, 50 300, 200 350 
                 C 350 400, 350 450, 200 500 
                 C 50 550, 50 600, 200 650 
                 C 350 700, 350 750, 200 800
                 L 200 1000"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              filter="url(#glow)"
              style={{
                strokeDasharray: pathLength,
                strokeDashoffset: pathLength - spaceshipOffset,
                transition: 'stroke-dashoffset 0.1s ease-out'
              }}
            />
            
            {/* Background path (dimmed) */}
            <path
              d="M 200 0 
                 C 350 100, 350 150, 200 200 
                 C 50 250, 50 300, 200 350 
                 C 350 400, 350 450, 200 500 
                 C 50 550, 50 600, 200 650 
                 C 350 700, 350 750, 200 800
                 L 200 1000"
              fill="none"
              stroke="hsl(280 30% 20%)"
              strokeWidth="8"
              strokeLinecap="round"
              opacity="0.3"
            />
          </svg>

          {/* Spaceship indicator */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 z-20 hidden md:block transition-all duration-100 ease-out"
            style={{
              top: `${scrollProgress * 80}%`,
            }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl animate-pulse" style={{ width: '60px', height: '60px', marginLeft: '-15px', marginTop: '-15px' }} />
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-glow-cyan">
                <Rocket className="w-5 h-5 text-background rotate-180" />
              </div>
            </div>
          </div>

          {/* Timeline Items */}
          <div className="relative space-y-8 md:space-y-24">
            {timelineEvents.map((event, index) => (
              <div
                key={event.title}
                className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 w-full md:w-auto ${index % 2 === 0 ? 'md:text-right md:pr-20' : 'md:text-left md:pl-20'}`}>
                  <div 
                    className="glass-card p-4 md:p-6 hover:scale-105 transition-all duration-300 border border-primary/20"
                    style={{
                      opacity: scrollProgress > (index / timelineEvents.length) ? 1 : 0.4,
                      transform: scrollProgress > (index / timelineEvents.length) ? 'translateY(0)' : 'translateY(20px)',
                      transition: 'all 0.5s ease-out'
                    }}
                  >
                    <span className="font-display text-xs md:text-sm tracking-wider text-primary">
                      {event.date}
                    </span>
                    <h3 className="font-display text-lg md:text-xl font-bold tracking-wider text-foreground mt-2 mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground text-xs md:text-sm">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center marker for mobile */}
                <div className="md:hidden w-4 h-4 rounded-full bg-gradient-to-br from-primary to-accent shadow-glow-cyan" />

                {/* Spacer for desktop layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>

          {/* Mobile vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2 md:hidden opacity-30" />
        </div>
      </div>
    </section>
  );
};