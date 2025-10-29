import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { NAV_LINKS, SITE_CONFIG } from "@/config/constants";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id), 100);
  const { scrollY } = useScrollPosition();
  
  const isScrolled = scrollY > 100;
  const showDesktopNav = scrollY > 200;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
      >
        Skip to main content
      </a>

      {/* Header - Mobile always visible */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 md:hidden ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg shadow-lg' : 'bg-gradient-to-b from-background/40 via-background/20 to-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl sm:text-2xl font-bold hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2"
            aria-label="Go to top"
          >
            {SITE_CONFIG.name}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-accent rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Desktop Navigation */}
      <nav 
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          showDesktopNav 
            ? 'translate-y-0 opacity-100 bg-background/95 backdrop-blur-lg shadow-lg' 
            : '-translate-y-full opacity-0'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 w-full flex justify-between items-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-2xl font-bold hover:text-primary transition-colors"
            aria-label="Go to top"
          >
            {SITE_CONFIG.name}
          </button>

          <div className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                  activeSection === link.id ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary animate-fade-in" />
                )}
              </button>
            ))}

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SITE_CONFIG.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors border border-primary px-4 py-2 rounded-lg hover-glow"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <nav
        id="mobile-menu"
        className={`fixed inset-0 z-40 bg-background transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8 px-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-4xl md:text-6xl font-bold text-white hover:text-primary transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-4"
            >
              {link.label}
            </button>
          ))}

          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${SITE_CONFIG.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 text-xl text-primary hover:text-primary/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2"
          >
            {SITE_CONFIG.email}
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
