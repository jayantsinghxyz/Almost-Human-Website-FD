import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToContent}
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Scroll to content"
    >
      <ChevronDown className="w-8 h-8 text-foreground/80 animate-bounce-slow" />
    </button>
  );
};

export default ScrollIndicator;
