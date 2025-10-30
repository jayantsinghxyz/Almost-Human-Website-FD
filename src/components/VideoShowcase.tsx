import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import showcaseReel from "@/assets/showcase-reel.gif";

const VideoShowcase = () => {
  const { targetRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <section
      ref={targetRef as React.RefObject<HTMLElement>}
      className="relative w-full h-screen bg-black"
      aria-label="Video showreel"
    >
      <div className="absolute inset-0">
        {hasIntersected && (
          <img
            src={showcaseReel}
            alt="AlmostHuman Showreel"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        )}
      </div>
    </section>
  );
};

export default VideoShowcase;
