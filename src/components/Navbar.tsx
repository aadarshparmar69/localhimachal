import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mountain, MapPin, Home, Compass, BookOpen, Route, Gem } from "lucide-react";
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled || !isHome
            ? "bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-soft"
            : "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className={cn(
                "p-2 rounded-xl transition-all duration-300 group-hover:scale-105",
                scrolled || !isHome ? "bg-primary/10" : "bg-primary-foreground/10"
              )}>
                <Mountain className={cn(
                  "w-6 h-6 transition-colors",
                  scrolled || !isHome ? "text-primary" : "text-primary-foreground"
                )} />
              </div>
              <div className="flex flex-col">
                <span className={cn(
                  "font-display text-xl font-semibold tracking-tight transition-colors",
                  scrolled || !isHome ? "text-foreground" : "text-primary-foreground"
                )}>
                  Local Himachal
                </span>
                <span className={cn(
                  "text-xs font-body transition-colors",
                  scrolled || !isHome ? "text-muted-foreground" : "text-primary-foreground/70"
                )}>
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
                    "px-4 py-2 rounded-lg font-body text-sm font-medium transition-all duration-300",
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

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/plan">
                <Button
                  variant={scrolled || !isHome ? "default" : "hero"}
                  size="default"
                  className="gap-2"
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
                "lg:hidden p-2 rounded-lg transition-colors",
                scrolled || !isHome
                  ? "hover:bg-secondary text-foreground"
                  : "hover:bg-primary-foreground/10 text-primary-foreground"
              )}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-20 z-40 lg:hidden bg-background/95 backdrop-blur-xl border-b border-border shadow-elevated"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl font-body text-base font-medium transition-all",
                        location.pathname === item.path
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link to="/plan">
                    <Button variant="default" size="lg" className="w-full gap-2">
                      <Compass className="w-5 h-5" />
                      Plan Your Trip
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
