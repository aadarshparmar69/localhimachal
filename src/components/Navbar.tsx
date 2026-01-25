import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass, Search } from "lucide-react";
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

  return (
    <>
      <nav className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#3c431e]/95 backdrop-blur-md shadow-lg" : "bg-[#3c431e]"
      )}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group min-h-[44px] flex-shrink-0">
              <img 
                src={logoImage} 
                alt="Local Himachal" 
                className="h-9 sm:h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="flex flex-col">
                <span className="text-white font-display text-base sm:text-lg font-bold tracking-tight leading-tight">
                  Local <span className="font-light italic">Himachal</span>
                </span>
                <span className="text-[9px] sm:text-[10px] font-body text-white/70 tracking-[0.2em] uppercase">
                  Travel Like a Local
                </span>
              </div>
            </Link>

            {/* Desktop Nav - Pill Container */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center bg-white/10 rounded-full px-1.5 py-1.5">
                {navItems.map(item => (
                  <Link 
                    key={item.path} 
                    to={item.path} 
                    className={cn(
                      "px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-200 whitespace-nowrap flex items-center justify-center leading-none",
                      location.pathname === item.path 
                        ? "bg-white/20 text-white shadow-sm" 
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Search & CTA Button - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <HeaderSearch variant="desktop" />
              
              <Link to="/plan">
                <button className="group relative flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-[#4a5223] border border-white/25 text-white font-medium text-sm overflow-hidden transition-all duration-300 hover:bg-[#525a28] hover:border-white/40 hover:shadow-lg hover:shadow-black/20">
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <Compass className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
                  <span className="relative">Plan Your Trip</span>
                </button>
              </Link>
            </div>

            {/* Mobile: Search & Menu Button */}
            <div className="flex items-center gap-1 lg:hidden">
              <button 
                onClick={() => setMobileSearchOpen(!mobileSearchOpen)} 
                className="p-3 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:bg-white/10"
                aria-label="Search"
              >
                {mobileSearchOpen ? <X className="w-5 h-5" /> : <Search className="w-5 h-5" />}
              </button>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-3 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center text-white hover:bg-white/10" 
                aria-label={isOpen ? "Close menu" : "Open menu"} 
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" 
              onClick={() => setIsOpen(false)} 
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, y: -10 }} 
              transition={{ duration: 0.2 }} 
              className="fixed inset-x-0 top-16 z-40 lg:hidden bg-[#3c431e] border-t border-white/10 max-h-[calc(100vh-4rem)] overflow-y-auto"
            >
              <div className="container mx-auto px-4 py-4">
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
                          "flex items-center gap-3 px-4 py-3.5 rounded-xl font-body text-base font-medium transition-all min-h-[48px]", 
                          location.pathname === item.path 
                            ? "bg-white/20 text-white" 
                            : "text-white/80 hover:text-white hover:bg-white/10"
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
                    className="pt-4 mt-2 border-t border-white/20"
                  >
                    <Link to="/plan" onClick={() => setIsOpen(false)}>
                      <button className="group relative w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#4a5223] border border-white/25 text-white font-medium overflow-hidden transition-all duration-300 hover:bg-[#525a28] hover:border-white/40">
                        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <Compass className="w-5 h-5 transition-transform duration-300 group-hover:rotate-45" />
                        <span className="relative">Plan Your Trip</span>
                      </button>
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
