import { useEffect, useRef, useState } from 'react';
import { Rocket } from 'lucide-react';

const timelineEvents = [
  { date: 'Feb 1', title: 'Registration Opens' },
  { date: 'Feb 20', title: 'Registration Closes' },
  { date: 'Feb 28', title: 'Shortlisting' },
  { date: 'Mar 14', title: 'Hackathon Begins' },
  { date: 'Mar 15', title: 'Results & Awards' },
];

export const TimelineSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [spaceshipPos, setSpaceshipPos] = useState({ x: 50, y: 20, angle: 90 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !pathRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      const start = rect.top - viewportHeight * 0.8;
      const end = rect.bottom - viewportHeight * 0.3;
      const progress = Math.min(Math.max((0 - start) / (end - start), 0), 1);
      
      const pathLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(progress * pathLength);
      const nextPoint = pathRef.current.getPointAtLength(Math.min(progress * pathLength + 5, pathLength));
      
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI) + 90;
      
      setSpaceshipPos({ x: point.x, y: point.y, angle });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-3">
            MARK YOUR CALENDAR
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider">
            EVENT <span className="text-gradient-neon">TIMELINE</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto h-[400px] md:h-[350px]">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 300"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(280 70% 50%)" />
                <stop offset="25%" stopColor="hsl(300 60% 50%)" />
                <stop offset="50%" stopColor="hsl(320 60% 55%)" />
                <stop offset="75%" stopColor="hsl(350 70% 60%)" />
                <stop offset="100%" stopColor="hsl(30 80% 55%)" />
              </linearGradient>
              <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background path */}
            <path
              d="M 50 150 
                 C 120 50, 200 50, 250 150 
                 C 300 250, 380 250, 430 150 
                 C 480 50, 560 50, 610 150 
                 C 660 250, 720 250, 770 150"
              fill="none"
              stroke="hsl(280 30% 15%)"
              strokeWidth="6"
              strokeLinecap="round"
              opacity="0.5"
            />

            {/* Main glowing path */}
            <path
              ref={pathRef}
              d="M 50 150 
                 C 120 50, 200 50, 250 150 
                 C 300 250, 380 250, 430 150 
                 C 480 50, 560 50, 610 150 
                 C 660 250, 720 250, 770 150"
              fill="none"
              stroke="url(#pathGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              filter="url(#glow)"
            />

            {/* Timeline markers */}
            {[50, 250, 430, 610, 770].map((x, i) => (
              <g key={i}>
                <circle cx={x} cy={150} r="8" fill="hsl(280 60% 40%)" filter="url(#softGlow)" />
                <circle cx={x} cy={150} r="4" fill="hsl(var(--primary))" />
              </g>
            ))}

            {/* Spaceship */}
            <g
              transform={`translate(${spaceshipPos.x}, ${spaceshipPos.y}) rotate(${spaceshipPos.angle})`}
              style={{ transition: 'transform 0.15s ease-out' }}
            >
              <circle r="20" fill="hsl(186 100% 50% / 0.3)" filter="url(#glow)" />
              <circle r="12" fill="hsl(186 100% 50% / 0.5)" />
              <g transform="translate(-8, -8)">
                <Rocket className="w-4 h-4 text-background" style={{ width: 16, height: 16 }} />
              </g>
            </g>
          </svg>

          {/* Event labels */}
          <div className="absolute inset-0 pointer-events-none">
            {timelineEvents.map((event, i) => {
              const positions = [
                { left: '6%', top: '60%' },
                { left: '28%', top: '10%' },
                { left: '50%', top: '60%' },
                { left: '72%', top: '10%' },
                { left: '92%', top: '60%' },
              ];
              return (
                <div
                  key={event.title}
                  className="absolute transform -translate-x-1/2 text-center"
                  style={{ left: positions[i].left, top: positions[i].top }}
                >
                  <p className="font-display text-xs md:text-sm text-primary font-bold">{event.date}</p>
                  <p className="text-[10px] md:text-xs text-foreground/80 whitespace-nowrap">{event.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};