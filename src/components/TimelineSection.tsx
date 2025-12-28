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
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [progress, setProgress] = useState(0);
  const [spaceshipPos, setSpaceshipPos] = useState({ x: 30, y: 150, angle: 90 });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !pathRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      
      const newProgress = Math.min(Math.max(scrolled / scrollableHeight, 0), 1);
      setProgress(newProgress);
      
      const pathLength = pathRef.current.getTotalLength();
      const point = pathRef.current.getPointAtLength(newProgress * pathLength);
      const nextPoint = pathRef.current.getPointAtLength(Math.min(newProgress * pathLength + 10, pathLength));
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI) + 90;
      
      setSpaceshipPos({ x: point.x, y: point.y, angle });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Uneven wave path - different amplitudes
  const wavePath = "M 30 150 C 80 80, 120 60, 160 120 C 200 180, 260 220, 320 140 C 380 60, 420 40, 480 130 C 540 220, 600 200, 660 100 C 720 0, 760 60, 780 150";

  return (
    <section ref={containerRef} className="relative" style={{ height: '200vh' }}>
      <div 
        ref={stickyRef}
        className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="inline-block font-display text-sm tracking-[0.3em] text-primary mb-3">
              MARK YOUR CALENDAR
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-wider">
              EVENT <span className="text-gradient-neon">TIMELINE</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto h-[300px] md:h-[280px]">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 280"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(280 70% 50%)" />
                  <stop offset="25%" stopColor="hsl(300 60% 55%)" />
                  <stop offset="50%" stopColor="hsl(330 65% 55%)" />
                  <stop offset="75%" stopColor="hsl(10 75% 55%)" />
                  <stop offset="100%" stopColor="hsl(35 85% 55%)" />
                </linearGradient>
                <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(280 70% 50%)" stopOpacity="0.2" />
                  <stop offset={`${progress * 100}%`} stopColor="hsl(186 100% 50%)" stopOpacity="1" />
                  <stop offset={`${Math.min(progress * 100 + 1, 100)}%`} stopColor="hsl(280 30% 20%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(280 30% 20%)" stopOpacity="0.3" />
                </linearGradient>
                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="shipGlow" x="-100%" y="-100%" width="300%" height="300%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background dim path */}
              <path
                d={wavePath}
                fill="none"
                stroke="hsl(280 30% 15%)"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.4"
              />

              {/* Animated trail path */}
              <path
                ref={pathRef}
                d={wavePath}
                fill="none"
                stroke="url(#trailGradient)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#glow)"
              />

              {/* Milestone markers */}
              {[
                { x: 30, y: 150 },
                { x: 160, y: 120 },
                { x: 320, y: 140 },
                { x: 480, y: 130 },
                { x: 780, y: 150 },
              ].map((pos, i) => {
                const isActive = progress >= i / 4;
                return (
                  <g key={i}>
                    <circle 
                      cx={pos.x} 
                      cy={pos.y} 
                      r={isActive ? 10 : 6} 
                      fill={isActive ? "hsl(186 100% 50% / 0.3)" : "hsl(280 40% 30%)"} 
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    <circle 
                      cx={pos.x} 
                      cy={pos.y} 
                      r={isActive ? 5 : 3} 
                      fill={isActive ? "hsl(186 100% 60%)" : "hsl(280 50% 50%)"}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                  </g>
                );
              })}

              {/* Spaceship */}
              <g
                style={{ 
                  transform: `translate(${spaceshipPos.x}px, ${spaceshipPos.y}px) rotate(${spaceshipPos.angle}deg)`,
                  transformOrigin: 'center',
                  transition: 'transform 0.08s linear'
                }}
              >
                <circle r="25" fill="hsl(186 100% 50% / 0.15)" filter="url(#shipGlow)" />
                <circle r="14" fill="hsl(186 100% 50% / 0.4)" />
                <circle r="10" fill="hsl(186 90% 60%)" />
                <path d="M 0 -6 L 4 6 L 0 4 L -4 6 Z" fill="hsl(220 20% 10%)" />
              </g>
            </svg>

            {/* Event labels */}
            <div className="absolute inset-0 pointer-events-none">
              {timelineEvents.map((event, i) => {
                const positions = [
                  { left: '4%', top: '75%' },
                  { left: '20%', top: '5%' },
                  { left: '40%', top: '75%' },
                  { left: '60%', top: '5%' },
                  { left: '96%', top: '75%' },
                ];
                const isActive = progress >= i / 4;
                return (
                  <div
                    key={event.title}
                    className="absolute transform -translate-x-1/2 text-center transition-all duration-300"
                    style={{ 
                      left: positions[i].left, 
                      top: positions[i].top,
                      opacity: isActive ? 1 : 0.4,
                    }}
                  >
                    <p className="font-display text-xs md:text-sm text-primary font-bold">{event.date}</p>
                    <p className="text-[10px] md:text-xs text-foreground/80 whitespace-nowrap">{event.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-6 transition-opacity duration-300" style={{ opacity: progress < 0.9 ? 1 : 0 }}>
            <p className="text-muted-foreground text-xs animate-pulse">Scroll to navigate timeline</p>
          </div>
        </div>
      </div>
    </section>
  );
};