import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Compass, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

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
            <div className="hidden lg:flex items-center gap-3">
              {/* Integrated Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center bg-white/10 rounded-full overflow-hidden border border-white/20 hover:border-white/30 focus-within:border-white/40 transition-colors">
                  <Search className="w-4 h-4 text-white/60 ml-4" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search places, treks..."
                    className="bg-transparent text-white placeholder:text-white/50 text-sm py-2.5 px-3 w-44 focus:w-52 transition-all duration-300 outline-none"
                  />
                </div>
              </form>
              
              <Link to="/plan">
                <Button 
                  size="default" 
                  className="gap-2 rounded-full bg-white/10 border border-white/30 text-white hover:bg-white/20 hover:border-white/50 transition-all duration-200 font-medium"
                >
                  <Compass className="w-4 h-4" />
                  Plan Your Trip
                </Button>
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
              className="lg:hidden border-t border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-4 py-3">
                <form onSubmit={handleSearch} className="relative">
                  <div className="flex items-center bg-white/10 rounded-full overflow-hidden border border-white/20">
                    <Search className="w-4 h-4 text-white/60 ml-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search places, treks, homestays..."
                      className="bg-transparent text-white placeholder:text-white/50 text-sm py-3 px-3 w-full outline-none"
                      autoFocus
                    />
                  </div>
                </form>
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
                      <Button 
                        variant="default" 
                        size="lg" 
                        className="w-full gap-2 min-h-[52px] rounded-xl bg-white/10 border border-white/30 text-white hover:bg-white/20"
                      >
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
