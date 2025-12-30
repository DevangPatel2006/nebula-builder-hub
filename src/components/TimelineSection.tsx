import { useEffect, useRef, useState } from 'react';

const timelineEvents = [
  { date: 'Feb 1', title: 'Registration Opens' },
  { date: 'Feb 20', title: 'Registration Closes' },
  { date: 'Feb 28', title: 'Shortlisting' },
  { date: 'Mar 14', title: 'Hackathon Begins' },
  { date: 'Mar 15', title: 'Results & Awards' },
];

export const TimelineSection = () => {
  const containerRef = useRef<HTMLElement | null>(null);
  const pathRef = useRef<SVGPathElement>(null);

  const targetProgressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const [progress, setProgress] = useState(0);
  const [spaceshipPos, setSpaceshipPos] = useState({ x: 30, y: 150, angle: 90 });

  // Sticky-scroll (scroll-jack): while this section is pinned, we consume scroll to drive the animation.
  // Once progress hits the end, we stop consuming scroll so the page continues normally.
  useEffect(() => {
    const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
    const speed = 0.0009;

    const isPinned = () => {
      const el = containerRef.current;
      if (!el) return false;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      return rect.top <= 0 && rect.bottom >= vh;
    };

    const applyDelta = (deltaY: number) => {
      targetProgressRef.current = clamp01(targetProgressRef.current + deltaY * speed);
    };

    const onWheel = (e: WheelEvent) => {
      if (!isPinned()) return;

      const deltaY = e.deltaY;
      const t = targetProgressRef.current;
      const atStart = t <= 0.0001;
      const atEnd = t >= 0.9999;

      const shouldCapture = (deltaY > 0 && !atEnd) || (deltaY < 0 && !atStart);
      if (!shouldCapture) return;

      e.preventDefault();
      applyDelta(deltaY);
    };

    let lastTouchY = 0;

    const onTouchStart = (e: TouchEvent) => {
      lastTouchY = e.touches[0]?.clientY ?? 0;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isPinned()) return;

      const y = e.touches[0]?.clientY ?? lastTouchY;
      const deltaY = lastTouchY - y; // match wheel deltaY sign
      lastTouchY = y;

      const t = targetProgressRef.current;
      const atStart = t <= 0.0001;
      const atEnd = t >= 0.9999;

      const shouldCapture = (deltaY > 0 && !atEnd) || (deltaY < 0 && !atStart);
      if (!shouldCapture) return;

      e.preventDefault();
      applyDelta(deltaY);
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
    };
  }, []);

  // Smooth movement (avoid jitter): ease the visible progress toward the scroll-driven target.
  useEffect(() => {
    const tick = () => {
      const t = targetProgressRef.current;

      setProgress((p) => {
        const next = p + (t - p) * 0.14;
        return Math.abs(next - p) < 0.0005 ? t : next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Move + rotate the spaceship along the curve.
  useEffect(() => {
    if (!pathRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(progress * pathLength);
    const nextPoint = pathRef.current.getPointAtLength(Math.min(progress * pathLength + 10, pathLength));
    const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI) + 90;

    setSpaceshipPos({ x: point.x, y: point.y, angle });
  }, [progress]);

  // Uneven wave path - varied amplitudes and wavelengths
  const wavePath =
    'M 30 150 ' +
    'C 90 70, 140 90, 185 120 ' +
    'C 235 160, 270 240, 335 145 ' +
    'C 400 40, 445 55, 495 135 ' +
    'C 545 210, 610 185, 655 105 ' +
    'C 700 25, 740 85, 780 150';

  return (
    <section ref={containerRef} className="relative min-h-screen">
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
