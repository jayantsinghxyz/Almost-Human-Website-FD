import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ClientLogo from "./ClientLogo";
import amazonLogo from "@/assets/logos/amazon.webp";
import hotstarLogo from "@/assets/logos/hotstar.webp";
import philipsLogo from "@/assets/logos/philips.webp";
import tataLogo from "@/assets/logos/tata.png";
import myntraLogo from "@/assets/logos/myntra.webp";
import credLogo from "@/assets/logos/cred.webp";
import irctcLogo from "@/assets/logos/irctc.png";
import rapidoLogo from "@/assets/logos/rapido.webp";
import jeevansathiLogo from "@/assets/logos/jeevansathi.webp";

const clients = [
  { name: "Amazon", logo: amazonLogo, bgColor: "bg-gradient-to-br from-[#1a4d7a] to-[#0d2d4a]" },
  { name: "JioHotstar", logo: hotstarLogo, bgColor: "bg-gradient-to-br from-[#1c3a70] to-[#0f2350]" },
  { name: "Philips", logo: philipsLogo, bgColor: "bg-gradient-to-br from-[#2563eb] to-[#1e40af]" },
  { name: "Tata", logo: tataLogo, bgColor: "bg-gradient-to-br from-[#1e40af] to-[#1e3a8a]" },
  { name: "Myntra", logo: myntraLogo, bgColor: "bg-gradient-to-br from-[#ec4899] to-[#be185d]" },
  { name: "CRED", logo: credLogo, bgColor: "bg-gradient-to-br from-[#a855f7] to-[#7c3aed]" },
  { name: "IRCTC", logo: irctcLogo, bgColor: "bg-gradient-to-br from-[#ef4444] to-[#dc2626]" },
  { name: "Rapido", logo: rapidoLogo, bgColor: "bg-gradient-to-br from-[#10b981] to-[#059669]" },
  { name: "Jeevansathi", logo: jeevansathiLogo, bgColor: "bg-gradient-to-br from-[#f59e0b] to-[#d97706]" },
];

const ClientShowcase = () => {
  const { targetRef, hasIntersected } = useIntersectionObserver();

  return (
    <section
      ref={targetRef as React.RefObject<HTMLElement>}
      className={`py-12 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-background transition-opacity duration-700 ${
        hasIntersected ? "animate-fade-in" : "opacity-0"
      }`}
      aria-label="Client showcase"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
            Our Clients
          </h2>
          <span className="text-4xl sm:text-5xl md:text-6xl">✨</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <ClientLogo
              key={client.name}
              name={client.name}
              logo={client.logo}
              bgColor={client.bgColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
