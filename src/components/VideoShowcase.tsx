import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useRef, useEffect } from "react";
import showcaseReel from "@/assets/showcase-reel.mp4";

const VideoShowcase = () => {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (hasIntersected && videoRef.current && !prefersReducedMotion) {
      videoRef.current.play().catch(err => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, [hasIntersected, prefersReducedMotion]);

  return (
    <section
      ref={targetRef as React.RefObject<HTMLElement>}
      className="relative w-full h-screen bg-black"
      aria-label="Video showreel"
    >
      <div className="absolute inset-0">
        {hasIntersected && (
          <video
            ref={videoRef}
            src={showcaseReel}
            className="w-full h-full object-cover"
            autoPlay={!prefersReducedMotion}
            loop
            muted
            playsInline
            preload="none"
            aria-label="AlmostHuman Showreel Video"
          />
        )}
      </div>
    </section>
  );
};

export default VideoShowcase;
