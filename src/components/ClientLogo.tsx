import { useTiltEffect } from "@/hooks/useTiltEffect";

interface ClientLogoProps {
  name: string;
  logo: string;
  bgColor: string;
  index: number;
}

const ClientLogo = ({ name, logo, bgColor, index }: ClientLogoProps) => {
  const [ref, tilt, handleMouseMove, handleMouseLeave] = useTiltEffect<HTMLDivElement>(15);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        aspect-square w-full 
        flex items-center justify-center 
        transition-all duration-300 
        rounded-3xl overflow-hidden 
        hover:shadow-2xl hover:shadow-primary/20
        p-8 md:p-12
        ${bgColor}
      `}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain filter drop-shadow-lg"
        loading="lazy"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = "none";
        }}
      />
    </div>
  );
};

export default ClientLogo;
