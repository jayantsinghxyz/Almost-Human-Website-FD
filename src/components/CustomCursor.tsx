import { useMousePosition } from '@/hooks/useMousePosition';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsHidden(true);
      return;
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, input, textarea, [role="button"]');
      setIsPointer(!!isClickable);
    };

    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  if (isHidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference cursor-custom"
        style={{ x: x - 8, y: y - 8 }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.5,
        }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-2 border-primary/50 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ x: x - 16, y: y - 16 }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isPointer ? 0.6 : 0.3,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 300,
        }}
      />
      
      {/* Trail effect */}
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] mix-blend-difference bg-primary/30"
          style={{ 
            x: x - 4 - i, 
            y: y - 4 - i,
            width: 8 - i * 2,
            height: 8 - i * 2,
          }}
          transition={{
            type: 'spring',
            damping: 30 + i * 10,
            stiffness: 300 - i * 50,
            mass: 0.5 + i * 0.2,
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
