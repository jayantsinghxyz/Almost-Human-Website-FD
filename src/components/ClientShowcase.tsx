import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ClientLogo from "./ClientLogo";
import amazonLogo from "@/assets/logos/amazon.webp";
import hotstarLogo from "@/assets/logos/hotstar.webp";
import philipsLogo from "@/assets/logos/philips.png";
import tataLogo from "@/assets/logos/tata.png";
import myntraLogo from "@/assets/logos/myntra.webp";
import credLogo from "@/assets/logos/cred.png";
import irctcLogo from "@/assets/logos/irctc.png";
import rapidoLogo from "@/assets/logos/rapido.png";
import jeevansathiLogo from "@/assets/logos/jeevansathi.png";

const clients = [
  { name: "Amazon", logo: amazonLogo, width: "240px" },
  { name: "JioHotstar", logo: hotstarLogo, width: "240px" },
  { name: "Philips", logo: philipsLogo, width: "280px" },
  { name: "Tata", logo: tataLogo, width: "240px" },
  { name: "Myntra", logo: myntraLogo, width: "240px" },
  { name: "CRED", logo: credLogo, width: "280px" },
  { name: "IRCTC", logo: irctcLogo, width: "240px" },
  { name: "Rapido", logo: rapidoLogo, width: "240px" },
  { name: "Jeevansathi", logo: jeevansathiLogo, width: "240px" },
];

const ClientShowcase = () => {
  const [isPaused, setIsPaused] = useState(false);
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const { targetRef, hasIntersected } = useIntersectionObserver();

  return (
    <section
      ref={targetRef as React.RefObject<HTMLElement>}
      className={`py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 transition-opacity duration-700 relative overflow-hidden ${
        hasIntersected ? "animate-fade-in" : "opacity-0"
      }`}
      aria-label="Client showcase"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12">
          Trusted by Leading Brands
        </h2>

        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Scrolling client logos"
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <div
            className="flex gap-6 md:gap-8 lg:gap-12"
            style={{
              animation: prefersReducedMotion ? 'none' : "scroll 30s linear infinite",
              animationPlayState: isPaused ? 'paused' : 'running',
              width: "fit-content",
            }}
          >
            {/* First set */}
            {clients.map((client, index) => (
              <ClientLogo
                key={`${client.name}-1`}
                name={client.name}
                logo={client.logo}
                index={index}
                width={client.width}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <ClientLogo
                key={`${client.name}-2`}
                name={client.name}
                logo={client.logo}
                index={index}
                width={client.width}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
