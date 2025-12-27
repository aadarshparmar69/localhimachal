import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Home, Compass, BookOpen, Route, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Explore", path: "/explore", icon: MapPin },
  { name: "Hidden Gems", path: "/hidden-gems", icon: Gem },
  { name: "Treks", path: "/treks", icon: Route },
  { name: "Homestays", path: "/homestays", icon: Home },
  { name: "Culture", path: "/culture", icon: BookOpen },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
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
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || !isHome || isOpen
            ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-soft"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-h-[44px]">
              <div className="flex flex-col">
                <span
                  className={cn(
                    "font-display text-lg sm:text-xl font-semibold tracking-tight transition-colors",
                    scrolled || !isHome || isOpen ? "text-foreground" : "text-primary-foreground"
                  )}
                >
                  Local Himachal
                </span>
                <span
                  className={cn(
                    "text-[10px] sm:text-xs font-body transition-colors",
                    scrolled || !isHome || isOpen
                      ? "text-muted-foreground"
                      : "text-primary-foreground/70"
                  )}
                >
                  Travel Like a Local
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300 min-h-[44px] flex items-center",
                    location.pathname === item.path
                      ? scrolled || !isHome
                        ? "bg-primary/10 text-primary"
                        : "bg-primary-foreground/20 text-primary-foreground"
                      : scrolled || !isHome
                      ? "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:block">
              <Link to="/plan">
                <Button
                  variant={scrolled || !isHome ? "default" : "outline"}
                  size="default"
                  className={cn(
                    "gap-2 min-h-[44px]",
                    !scrolled && isHome && "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  )}
                >
                  <Compass className="w-4 h-4" />
                  Plan Your Trip
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "lg:hidden p-3 rounded-lg transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center",
                scrolled || !isHome || isOpen
                  ? "hover:bg-secondary text-foreground"
                  : "hover:bg-primary-foreground/10 text-primary-foreground"
              )}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
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
                        <item.icon className="w-5 h-5 flex-shrink-0" />
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
                      <Button variant="default" size="lg" className="w-full gap-2 min-h-[56px]">
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
