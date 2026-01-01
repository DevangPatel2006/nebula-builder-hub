import { useEffect, useRef, useState } from 'react';
import { Rocket, UserPlus, ClipboardCheck, Trophy, PartyPopper } from 'lucide-react';

const timelineEvents = [
  { date: 'Feb 1', title: 'Registration Opens', description: 'Start your journey to innovation', icon: UserPlus },
  { date: 'Feb 20', title: 'Registration Closes', description: 'Last chance to join the mission', icon: ClipboardCheck },
  { date: 'Feb 28', title: 'Shortlisting', description: 'Selected teams announced', icon: Rocket },
  { date: 'Mar 14', title: 'Hackathon Begins', description: '36 hours of non-stop coding', icon: PartyPopper },
  { date: 'Mar 15', title: 'Results & Awards', description: 'Celebrate the champions', icon: Trophy },
];

export const TimelineSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If timeline is already completed, keep it at 100%
      if (isCompleted) return;
      
      if (!sectionRef.current || !timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on how much of the timeline is visible
      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      
      // Start animation when timeline enters viewport from bottom
      const startPoint = windowHeight * 0.8;
      const endPoint = windowHeight * 0.2;
      
      if (timelineTop > startPoint) {
        // Only reset to 0 if we haven't started yet
        if (progress === 0) {
          setProgress(0);
        }
      } else if (timelineTop + timelineHeight < endPoint) {
        // Timeline completed - lock it at 100%
        setProgress(1);
        setIsCompleted(true);
      } else {
        // Calculate progress as timeline scrolls through viewport
        const scrollableDistance = timelineHeight + (startPoint - endPoint);
        const scrolled = startPoint - timelineTop;
        const newProgress = Math.min(1, Math.max(0, scrolled / scrollableDistance));
        
        // Only update if new progress is higher (one-way animation)
        if (newProgress > progress) {
          setProgress(newProgress);
          
          // Mark as completed when reaching 100%
          if (newProgress >= 0.99) {
            setIsCompleted(true);
            setProgress(1);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isCompleted, progress]);

  // Calculate which milestones are active based on progress
  const getActiveIndex = () => {
    const step = 1 / timelineEvents.length;
    return Math.floor(progress / step);
  };

  const activeIndex = getActiveIndex();

  return (
    <section ref={sectionRef} className="relative py-20">
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
        <div ref={timelineRef} className="relative max-w-2xl mx-auto">
          {/* Background line (dim) */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-border/30" />
          
          {/* Animated glowing line that grows with scroll */}
          <div 
            className="absolute left-6 md:left-1/2 top-0 w-0.5 md:-translate-x-1/2 origin-top transition-all duration-100"
            style={{
              height: `${progress * 100}%`,
              background: 'linear-gradient(180deg, hsl(186 100% 50%), hsl(280 70% 50%), hsl(300 100% 50%))',
              boxShadow: '0 0 15px hsl(186 100% 50% / 0.6), 0 0 30px hsl(186 100% 50% / 0.3)',
            }}
          />

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              const isActive = index <= activeIndex;
              const isCurrentlyReached = index === activeIndex;
              const Icon = event.icon;
              
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
                      className={`glass-card p-6 inline-block transition-all duration-500 ${
                        isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-40'
                      }`}
                      style={{
                        boxShadow: isActive 
                          ? '0 0 30px hsl(186 100% 50% / 0.3), 0 0 60px hsl(186 100% 50% / 0.1)' 
                          : 'none',
                        borderColor: isActive ? 'hsl(186 100% 50% / 0.5)' : undefined,
                      }}
                    >
                      {/* Date Badge */}
                      <span 
                        className={`inline-block px-3 py-1 rounded-full text-xs font-display tracking-wider mb-3 transition-all duration-500`}
                        style={{
                          background: isActive 
                            ? 'linear-gradient(135deg, hsl(186 100% 50% / 0.3), hsl(300 100% 50% / 0.3))'
                            : 'hsl(252 40% 15% / 0.5)',
                          border: `1px solid ${isActive ? 'hsl(186 100% 50% / 0.5)' : 'hsl(252 40% 20% / 0.5)'}`,
                        }}
                      >
                        {event.date}
                      </span>
                      
                      <h3 
                        className={`font-display text-xl font-bold tracking-wider mb-2 transition-all duration-500 ${
                          isActive ? 'text-foreground' : 'text-muted-foreground'
                        }`}
                        style={{
                          textShadow: isCurrentlyReached 
                            ? '0 0 20px hsl(186 100% 50% / 0.8)' 
                            : 'none',
                        }}
                      >
                        {event.title}
                      </h3>
                      <p className={`text-sm transition-all duration-500 ${
                        isActive ? 'text-muted-foreground' : 'text-muted-foreground/50'
                      }`}>
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node with Glow */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                    {/* Outer glow ring - animated when active */}
                    <div 
                      className={`absolute w-14 h-14 rounded-full transition-all duration-500 ${
                        isCurrentlyReached ? 'animate-pulse' : ''
                      }`}
                      style={{
                        background: isActive 
                          ? 'radial-gradient(circle, hsl(186 100% 50% / 0.4) 0%, transparent 70%)'
                          : 'transparent',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                    {/* Node circle with icon */}
                    <div 
                      className={`relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        isCurrentlyReached ? 'scale-125' : 'scale-100'
                      }`}
                      style={{
                        background: isActive 
                          ? 'linear-gradient(135deg, hsl(186 100% 50%), hsl(300 80% 60%))'
                          : 'hsl(252 40% 20%)',
                        boxShadow: isActive 
                          ? '0 0 20px hsl(186 100% 50% / 0.8), 0 0 40px hsl(186 100% 50% / 0.4)'
                          : 'none',
                        border: `2px solid ${isActive ? 'hsl(186 100% 70%)' : 'hsl(252 40% 30%)'}`,
                      }}
                    >
                      <Icon 
                        size={18} 
                        className={`transition-colors duration-500 ${
                          isActive ? 'text-background' : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Empty space for alternating layout on desktop */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>

          {/* End glow */}
          <div 
            className={`absolute left-6 md:left-1/2 -bottom-4 transform -translate-x-1/2 transition-all duration-500 ${
              progress >= 0.95 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <div 
              className="w-8 h-8 rounded-full animate-pulse"
              style={{
                background: 'linear-gradient(135deg, hsl(280 70% 50%), hsl(300 100% 50%))',
                boxShadow: '0 0 25px hsl(300 100% 50% / 0.8), 0 0 50px hsl(300 100% 50% / 0.4)',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
