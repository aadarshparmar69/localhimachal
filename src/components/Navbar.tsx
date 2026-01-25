import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { HeaderSearch } from "@/components/search/HeaderSearch";
import logoImage from "@/assets/local-himachal-logo.png";

const navItems = [{
  name: "Home",
  path: "/"
}, {
  name: "Explore",
  path: "/explore"
}, {
  name: "Hidden Gems",
  path: "/hidden-gems"
}, {
  name: "Treks",
  path: "/treks"
}, {
  name: "Homestays",
  path: "/homestays"
}, {
  name: "Culture",
  path: "/culture"
}];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setMobileSearchOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isHome = location.pathname === "/";

  return (
    <>
      <nav className="bg-[#3c431e] sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-[#3c431e]">
          <div className="flex items-center justify-between h-16 sm:h-20 bg-[#3c431e]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group min-h-[44px]">
              <img 
                src={logoImage} 
                alt="Local Himachal" 
                className="h-10 sm:h-12 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="text-white font-display text-lg sm:text-xl font-bold tracking-tight leading-tight drop-shadow-sm">
                  Local <span className="font-light italic">Himachal</span>
                </span>
                <span className="text-[10px] sm:text-xs font-body text-white/80 tracking-widest uppercase font-medium">
                  Travel Like a Local
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map(item => (
                <Link 
                  key={item.path} 
                  to={item.path} 
                  className={cn(
                    "px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 min-h-[44px] flex items-center text-white hover:bg-white/10", 
                    location.pathname === item.path && "bg-white/20"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Search & CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-3">
              <HeaderSearch variant="desktop" />
              <Link to="/plan">
                <Button size="default" className="gap-2 min-h-[44px] bg-[#3d441e] text-white hover:bg-[#3d441e]/90 border border-white/60">
                  <Compass className="w-4 h-4" />
                  Plan Your Trip
                </Button>
              </Link>
            </div>

            {/* Mobile: Search & Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button 
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)} 
                className="p-3 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:bg-white/10"
                aria-label="Search"
              >
                {mobileSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-3 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:bg-white/10" 
                aria-label={isOpen ? "Close menu" : "Open menu"} 
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <AnimatePresence>
          {mobileSearchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-white/10 overflow-visible"
            >
              <div className="container mx-auto px-4 py-3">
                <HeaderSearch variant="mobile" onClose={() => setMobileSearchOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }} 
              transition={{ duration: 0.2 }} 
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden" 
              onClick={() => setIsOpen(false)} 
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }} 
              transition={{ duration: 0.2 }} 
              className="fixed inset-x-0 top-16 sm:top-20 z-40 lg:hidden bg-background border-b border-border shadow-elevated max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-4 safe-padding-bottom">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => (
                    <motion.div 
                      key={item.path} 
                      initial={{ opacity: 0, x: -10 }} 
                      animate={{ opacity: 1, x: 0 }} 
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link 
                        to={item.path} 
                        className={cn(
                          "flex items-center gap-3 px-4 py-4 rounded-xl font-body text-base font-medium transition-all min-h-[56px]", 
                          location.pathname === item.path 
                            ? "bg-primary/10 text-primary" 
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary active:bg-secondary"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: navItems.length * 0.05 }} 
                    className="pt-4 mt-2 border-t border-border"
                  >
                    <Link to="/plan" onClick={() => setIsOpen(false)}>
                      <Button variant="default" size="lg" className="w-full gap-2 min-h-[56px] bg-[#3c431e] hover:bg-[#3c431e]/90 text-white">
                        <Compass className="w-5 h-5" />
                        Plan Your Trip
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
