import amazonLogo from "@/assets/logos/amazon.png";

const clients = [
  { name: "Amazon", logo: amazonLogo },
  { name: "JioHotstar", logo: "https://static.vecteezy.com/system/resources/previews/056/505/637/large_2x/jiohotstar-app-icon-on-transparent-background-free-png.png" },
  { name: "Philips", logo: "https://brandslogos.com/wp-content/uploads/images/philips-logo.png" },
  { name: "Tata", logo: "https://1000logos.net/wp-content/uploads/2022/07/Tata-Group-Logo.png" },
  { name: "Myntra", logo: "https://1000logos.net/wp-content/uploads/2021/04/Myntra-logo.png" },
  { name: "CRED", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/CRED_Logo.png/640px-CRED_Logo.png" },
  { name: "IRCTC", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/IRCTC_Logo.svg/1200px-IRCTC_Logo.svg.png" },
  { name: "Rapido", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Rapido_logo.svg/1200px-Rapido_logo.svg.png" },
  { name: "Jeevansathi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Jeevansathi_logo.svg/1200px-Jeevansathi_logo.svg.png" },
];

const ClientShowcase = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-background/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-lg md:text-xl text-muted-foreground mb-12">
          Trusted by clients including
        </h2>

        {/* Infinite scrolling carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* Double the logos for seamless loop */}
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 mx-8 w-32 md:w-40 h-16 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain filter brightness-200"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
