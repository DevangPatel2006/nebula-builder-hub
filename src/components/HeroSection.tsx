import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Rocket, Download } from 'lucide-react';
import heroSpaceBg from '@/assets/hero-space-bg.jpg';

export const HeroSection = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introPhase, setIntroPhase] = useState(0);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (hasSeenIntro) {
      setShowIntro(false);
      return;
    }

    const phases = [
      { delay: 300, phase: 1 },   // Stars appear
      { delay: 1000, phase: 2 },  // Title appears
      { delay: 2000, phase: 3 },  // Subtitle appears
      { delay: 3000, phase: 4 },  // Buttons appear, intro complete
    ];

    phases.forEach(({ delay, phase }) => {
      setTimeout(() => setIntroPhase(phase), delay);
    });

    setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem('hasSeenIntro', 'true');
    }, 4000);
  }, []);

  const skipIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image - Simplified */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSpaceBg})` }}
      />
      <div className="absolute inset-0 bg-background/70" />

      {/* Intro Animation Overlay - Optimized */}
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
          {/* Simple Stars - Reduced count for performance */}
          <div 
            className={`absolute inset-0 transition-opacity duration-500 ${
              introPhase >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-foreground"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  opacity: Math.random() * 0.5 + 0.3,
                }}
              />
            ))}
          </div>

          {/* Title Animation */}
          <div className="text-center z-10 px-6">
            <h1 
              className={`font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider transition-all duration-700 ${
                introPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <span className="text-gradient-neon">HACK THE SPRING</span>
              <br />
              <span className="text-foreground">2026</span>
            </h1>
            
            <p 
              className={`font-heading text-base sm:text-xl md:text-2xl tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mt-4 sm:mt-6 transition-all duration-700 ${
                introPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              INNOVATE • BUILD • COMPETE
            </p>
          </div>

          {/* Skip Button */}
          <button
            onClick={skipIntro}
            className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 text-muted-foreground hover:text-primary transition-colors font-display text-xs sm:text-sm tracking-wider"
          >
            Skip →
          </button>
        </div>
      )}

      {/* Main Hero Content - ADDED pt-24 sm:pt-32 to create space from header */}
      <div className={`relative z-10 container mx-auto px-4 sm:px-6 text-center pt-24 sm:pt-32 transition-opacity duration-700 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Main Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-wider animate-fade-in-up delay-200 ">
            <span className="text-gradient-neon">HACK THE SPRING</span>
            <br />
            <span className="text-foreground">2026</span>
          </h1>

          {/* Subtitle */}
          <p className="font-heading text-base sm:text-xl md:text-2xl tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground animate-fade-in-up delay-300">
            INNOVATE • BUILD • COMPETE
          </p>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 animate-fade-in-up delay-400">
            Join the ultimate 36-hour coding marathon. Transform your ideas into reality, 
            connect with industry experts, and compete for amazing prizes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 animate-fade-in-up delay-500">
            <Button variant="hero" size="lg" className="w-full sm:w-auto group font-heading">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              Register Now
            </Button>
            <Button variant="glass" size="lg" className="w-full sm:w-auto font-heading">
              <Download className="w-4 h-4 sm:w-5 sm:h-5" />
              Download Brochure
            </Button>
          </div>

          {/* Event Date */}
          <div className="pt-6 sm:pt-8 animate-fade-in-up delay-700">
            <p className="font-heading text-sm sm:text-lg tracking-wider text-primary">
              MARCH 2026 • GEC GANDHINAGAR
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};