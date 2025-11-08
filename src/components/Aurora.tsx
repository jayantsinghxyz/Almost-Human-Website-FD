import { useEffect, useRef } from 'react';

interface AuroraProps {
  colorStops: string[];
  blend?: number;
  amplitude?: number;
  speed?: number;
}

const Aurora = ({ 
  colorStops, 
  blend = 0.5, 
  amplitude = 1.0, 
  speed = 0.5 
}: AuroraProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationId: number;
    let time = 0;

    const animate = () => {
      time += speed * 0.01;
      
      if (canvas) {
        const gradient = `
          radial-gradient(
            ellipse ${100 + Math.sin(time) * 20 * amplitude}% ${100 + Math.cos(time * 1.2) * 20 * amplitude}% at ${50 + Math.sin(time * 0.8) * 30}% ${50 + Math.cos(time * 0.6) * 30}%,
            ${colorStops[0]} 0%,
            transparent 50%
          ),
          radial-gradient(
            ellipse ${100 + Math.cos(time * 1.1) * 25 * amplitude}% ${100 + Math.sin(time * 0.9) * 25 * amplitude}% at ${50 + Math.cos(time * 0.7) * 35}% ${50 + Math.sin(time * 0.5) * 35}%,
            ${colorStops[1] || colorStops[0]} 0%,
            transparent 50%
          ),
          radial-gradient(
            ellipse ${100 + Math.sin(time * 0.9) * 30 * amplitude}% ${100 + Math.cos(time) * 30 * amplitude}% at ${50 + Math.sin(time * 0.6) * 40}% ${50 + Math.cos(time * 0.8) * 40}%,
            ${colorStops[2] || colorStops[0]} 0%,
            transparent 50%
          )
        `;
        
        canvas.style.backgroundImage = gradient;
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [colorStops, amplitude, speed]);

  return (
    <div 
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ 
        opacity: blend,
        filter: 'blur(60px)',
        mixBlendMode: 'screen'
      }}
      aria-hidden="true"
    />
  );
};

export default Aurora;
