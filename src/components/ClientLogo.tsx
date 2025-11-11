interface ClientLogoProps {
  name: string;
  logo: string;
  index: number;
  scale?: number;
}

const ClientLogo = ({ name, logo, index, scale = 1 }: ClientLogoProps) => {
  return (
    <div
      className="flex-shrink-0 w-[180px] h-[120px] sm:w-[200px] sm:h-[130px] md:w-[230px] md:h-[150px] lg:w-[260px] lg:h-[170px] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:z-10 rounded-2xl overflow-hidden px-4 md:px-6"
      style={{
        transform: `scale(${scale})`,
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-full h-full object-contain filter brightness-100 hover:brightness-125 transition-all"
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
