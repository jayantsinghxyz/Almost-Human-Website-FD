import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  text: string;
  speed?: number;
  delay?: number;
}

export const useTypewriter = ({ text, speed = 100, delay = 0 }: UseTypewriterOptions) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;

    const startTyping = () => {
      if (currentIndex < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex++;
          startTyping();
        }, speed);
      } else {
        setIsComplete(true);
      }
    };

    const initialDelay = setTimeout(() => {
      startTyping();
    }, delay);

    return () => {
      clearTimeout(timeout);
      clearTimeout(initialDelay);
    };
  }, [text, speed, delay]);

  return { displayedText, isComplete };
};
