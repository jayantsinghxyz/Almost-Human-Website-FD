import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ClientLogo from "./ClientLogo";
import tataLogo from "@/assets/logos/tata.svg";
import irctcLogo from "@/assets/logos/irctc.svg";
import rapidoLogo from "@/assets/logos/rapido.svg";
import jeevansathiLogo from "@/assets/logos/jeevansathi.svg";
import philipsLogo from "@/assets/logos/philips.svg";
import credLogo from "@/assets/logos/cred.svg";
import myntraLogo from "@/assets/logos/myntra.svg";
import jiohotstarLogo from "@/assets/logos/jiohotstar.svg";

const clients = [
  { name: "Tata", logo: tataLogo },
  { name: "IRCTC", logo: irctcLogo },
  { name: "Rapido", logo: rapidoLogo },
  { name: "Jeevansathi", logo: jeevansathiLogo },
  { name: "Philips", logo: philipsLogo },
  { name: "CRED", logo: credLogo },
  { name: "Myntra", logo: myntraLogo },
  { name: "JioHotstar", logo: jiohotstarLogo },
];

const ClientShowcase = () => {
  const { targetRef, hasIntersected } = useIntersectionObserver();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      ref={targetRef as React.RefObject<HTMLElement>}
      className={`py-8 md:py-12 lg:py-16 px-4 sm:px-6 bg-black transition-opacity duration-700 relative overflow-hidden ${
        hasIntersected ? "animate-fade-in" : "opacity-0"
      }`}
      aria-label="Client showcase"
    >

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-10 lg:mb-12 text-white">
          Trusted by Leading Brands
        </h2>

        <div
          className="relative overflow-hidden"
          role="region"
          aria-label="Scrolling client logos"
        >
          <div
            className="inline-flex gap-4 md:gap-6 lg:gap-8"
            style={{
              animation: prefersReducedMotion ? 'none' : "scroll 10s linear infinite",
            }}
          >
            {/* First set */}
            {clients.map((client, index) => (
              <ClientLogo
                key={`${client.name}-1`}
                name={client.name}
                logo={client.logo}
                index={index}
              />
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <ClientLogo
                key={`${client.name}-2`}
                name={client.name}
                logo={client.logo}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
