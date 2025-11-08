import { ReactNode, useRef, useEffect, useState } from "react";

interface ScrollStackItemProps {
  children: ReactNode;
  index?: number;
}

export const ScrollStackItem = ({ children }: ScrollStackItemProps) => {
  return (
    <div className="scroll-stack-item min-h-[400px] sticky top-0 will-change-transform">
      {children}
    </div>
  );
};

interface ScrollStackProps {
  children: ReactNode;
}

const ScrollStack = ({ children }: ScrollStackProps) => {
  const stackRef = useRef<HTMLDivElement>(null);
  const [itemCount] = useState(() => {
    const childArray = Array.isArray(children) ? children : [children];
    return childArray.filter(Boolean).length;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!stackRef.current) return;

      const items = stackRef.current.querySelectorAll(".scroll-stack-item");
      const stackTop = stackRef.current.offsetTop;
      const scrollY = window.scrollY;

      items.forEach((item, index) => {
        const htmlItem = item as HTMLElement;
        const itemTop = stackTop + index * 100;
        const progress = Math.max(0, Math.min(1, (scrollY - itemTop) / 300));
        
        const scale = 1 - progress * 0.05 * (itemCount - index - 1);
        const translateY = progress * 20 * (index + 1);
        
        htmlItem.style.transform = `translateY(${translateY}px) scale(${scale})`;
        htmlItem.style.zIndex = `${itemCount - index}`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [itemCount]);

  return (
    <div ref={stackRef} className="scroll-stack relative">
      {children}
    </div>
  );
};

export default ScrollStack;
