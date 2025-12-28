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
  const pathRef = useRef<SVGPathElement>(null);

  const targetProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);
  const [spaceshipPos, setSpaceshipPos] = useState({ x: 30, y: 150, angle: 90 });

  useEffect(() => {
    const computeTargetProgress = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const vh = window.innerHeight;

      // Start only when the section top reaches the viewport center.
      const startAt = vh * 0.5;
      const scrollable = Math.max(rect.height - vh, 1);

      const raw = (startAt - rect.top) / scrollable;
      targetProgressRef.current = Math.min(Math.max(raw, 0), 1);
    };

    const tick = () => {
      computeTargetProgress();

      // Smoothly ease progress toward target (prevents jitter)
      setProgress((p) => {
        const next = p + (targetProgressRef.current - p) * 0.12;
        return Math.abs(next - p) < 0.0005 ? targetProgressRef.current : next;
      });

      if (pathRef.current) {
        const pathLength = pathRef.current.getTotalLength();
        const p = targetProgressRef.current;
        const point = pathRef.current.getPointAtLength(p * pathLength);
        const nextPoint = pathRef.current.getPointAtLength(Math.min(p * pathLength + 10, pathLength));
        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI) + 90;
        setSpaceshipPos({ x: point.x, y: point.y, angle });
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onResize = () => computeTargetProgress();
    window.addEventListener('resize', onResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Uneven wave path - varied amplitudes and wavelengths
  const wavePath =
    'M 30 150 ' +
    'C 90 70, 140 90, 185 120 ' +
    'C 235 160, 270 240, 335 145 ' +
    'C 400 40, 445 55, 495 135 ' +
    'C 545 210, 610 185, 655 105 ' +
    'C 700 25, 740 85, 780 150';

  return (
    <section ref={containerRef} className="relative" style={{ height: '280vh' }}>
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
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
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 280" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(280 70% 50%)" />
                  <stop offset="25%" stopColor="hsl(300 60% 55%)" />
                  <stop offset="50%" stopColor="hsl(330 65% 55%)" />
                  <stop offset="75%" stopColor="hsl(10 75% 55%)" />
                  <stop offset="100%" stopColor="hsl(35 85% 55%)" />
                </linearGradient>
                <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(280 70% 50%)" stopOpacity="0.18" />
                  <stop offset={`${progress * 100}%`} stopColor="hsl(186 100% 50%)" stopOpacity="1" />
                  <stop
                    offset={`${Math.min(progress * 100 + 1.5, 100)}%`}
                    stopColor="hsl(280 30% 20%)"
                    stopOpacity="0.28"
                  />
                  <stop offset="100%" stopColor="hsl(280 30% 20%)" stopOpacity="0.28" />
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
                { x: 185, y: 120 },
                { x: 335, y: 145 },
                { x: 495, y: 135 },
                { x: 780, y: 150 },
              ].map((pos, i) => {
                const isActive = progress >= i / 4;
                return (
                  <g key={i}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isActive ? 10 : 6}
                      fill={isActive ? 'hsl(186 100% 50% / 0.3)' : 'hsl(280 40% 30%)'}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isActive ? 5 : 3}
                      fill={isActive ? 'hsl(186 100% 60%)' : 'hsl(280 50% 50%)'}
                      style={{ transition: 'all 0.3s ease' }}
                    />
                  </g>
                );
              })}

              {/* Spaceship (follows the path) */}
              <g
                style={{
                  transform: `translate(${spaceshipPos.x}px, ${spaceshipPos.y}px) rotate(${spaceshipPos.angle}deg)`,
                  transformOrigin: 'center',
                  transition: 'transform 0.06s linear',
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
                  { left: '23%', top: '5%' },
                  { left: '42%', top: '75%' },
                  { left: '62%', top: '5%' },
                  { left: '96%', top: '75%' },
                ];
                const isActive = progress >= i / 4;
                return (
                  <div
                    key={event.title}
                    className="absolute transform -translate-x-1/2 text-center transition-all duration-300"
                    style={{ left: positions[i].left, top: positions[i].top, opacity: isActive ? 1 : 0.4 }}
                  >
                    <p className="font-display text-xs md:text-sm text-primary font-bold">{event.date}</p>
                    <p className="text-[10px] md:text-xs text-foreground/80 whitespace-nowrap">{event.title}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-center mt-6 transition-opacity duration-300" style={{ opacity: progress < 0.95 ? 1 : 0 }}>
            <p className="text-muted-foreground text-xs animate-pulse">Scroll to navigate timeline</p>
          </div>
        </div>
      </div>
    </section>
  );
};
