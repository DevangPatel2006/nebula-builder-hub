import { useEffect, useState, useMemo } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDuration: number;
  animationDelay: number;
}

export const StarField = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight * 3,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const stars = useMemo(() => {
    if (dimensions.width === 0) return [];
    
    const starCount = Math.floor((dimensions.width * dimensions.height) / 8000);
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      animationDuration: Math.random() * 3 + 2,
      animationDelay: Math.random() * 5,
    }));
  }, [dimensions]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-star-white animate-twinkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            animationDelay: `${star.animationDelay}s`,
          }}
        />
      ))}
      {/* Nebula effects */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(280 70% 50% / 0.4) 0%, transparent 70%)',
          top: '10%',
          left: '20%',
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(186 100% 50% / 0.3) 0%, transparent 70%)',
          top: '50%',
          right: '10%',
        }}
      />
      <div 
        className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(300 100% 50% / 0.3) 0%, transparent 70%)',
          bottom: '20%',
          left: '5%',
        }}
      />
    </div>
  );
};
