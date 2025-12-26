import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Rocket, Download } from 'lucide-react';
import heroSpaceBg from '@/assets/hero-space-bg.jpg';
import spacecraft from '@/assets/spacecraft.png';

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
      { delay: 500, phase: 1 },   // Stars appear
      { delay: 1500, phase: 2 },  // Spacecraft flies
      { delay: 3500, phase: 3 },  // Title appears
      { delay: 5000, phase: 4 },  // Subtitle appears
      { delay: 6500, phase: 5 },  // Buttons appear, intro complete
    ];

    phases.forEach(({ delay, phase }) => {
      setTimeout(() => setIntroPhase(phase), delay);
    });

    setTimeout(() => {
      setShowIntro(false);
      sessionStorage.setItem('hasSeenIntro', 'true');
    }, 7500);
  }, []);

  const skipIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem('hasSeenIntro', 'true');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroSpaceBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background" />

      {/* Intro Animation Overlay */}
      {showIntro && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
          {/* Stars Animation */}
          <div 
            className={`absolute inset-0 transition-opacity duration-1000 ${
              introPhase >= 1 ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-star-white animate-twinkle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </div>

          {/* Spacecraft Animation */}
          {introPhase >= 2 && introPhase < 5 && (
            <img
              src={spacecraft}
              alt="Spacecraft"
              className="absolute w-40 md:w-64 lg:w-80 object-contain animate-ship-fly"
              style={{
                filter: 'drop-shadow(0 0 40px hsl(186 100% 50% / 0.9)) drop-shadow(0 0 80px hsl(186 100% 50% / 0.5))',
              }}
            />
          )}

          {/* Title Animation */}
          <div className="text-center z-10 px-4">
            <h1 
              className={`font-display text-5xl md:text-8xl font-bold tracking-wider transition-all duration-1000 ${
                introPhase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                textShadow: '0 0 30px hsl(186 100% 50%), 0 0 60px hsl(186 100% 50% / 0.5)',
              }}
            >
              <span className="text-gradient-neon">HACK THE SPRING</span>
              <br />
              <span className="text-foreground">2026</span>
            </h1>
            
            <p 
              className={`font-display text-xl md:text-3xl tracking-[0.3em] text-muted-foreground mt-6 transition-all duration-1000 delay-300 ${
                introPhase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}
            >
              INNOVATE • BUILD • COMPETE
            </p>
          </div>

          {/* Skip Button */}
          <button
            onClick={skipIntro}
            className="absolute bottom-10 right-10 text-muted-foreground hover:text-primary transition-colors font-display text-sm tracking-wider"
          >
            Skip Animation →
          </button>
        </div>
      )}

      {/* Main Hero Content */}
      <div className={`relative z-10 container mx-auto px-4 text-center transition-opacity duration-1000 ${showIntro ? 'opacity-0' : 'opacity-100'}`}>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border/50 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-display tracking-wider">
              NATIONAL LEVEL HACKATHON • 500+ PARTICIPANTS
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-wider animate-fade-in-up delay-200">
            <span className="text-gradient-neon">HACK THE SPRING</span>
            <br />
            <span className="text-foreground">2026</span>
          </h1>

          {/* Subtitle */}
          <p className="font-display text-xl md:text-2xl tracking-[0.3em] text-muted-foreground animate-fade-in-up delay-300">
            INNOVATE • BUILD • COMPETE
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up delay-400">
            Join the ultimate 36-hour coding marathon. Transform your ideas into reality, 
            connect with industry experts, and compete for amazing prizes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in-up delay-500">
            <Button variant="hero" size="xl" className="group">
              <Rocket className="w-5 h-5 group-hover:animate-bounce" />
              Register Now
            </Button>
            <Button variant="glass" size="xl">
              <Download className="w-5 h-5" />
              Download Brochure
            </Button>
          </div>

          {/* Event Date */}
          <div className="pt-8 animate-fade-in-up delay-700">
            <p className="font-display text-lg tracking-wider text-primary text-glow-cyan">
              MARCH 2026 • GEC GANDHINAGAR
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};
