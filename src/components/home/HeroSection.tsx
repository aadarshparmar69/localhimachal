import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Layers */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <motion.div style={{ y: y1 }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
            alt="Himalayan Mountains Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/60 to-foreground/95" />
      </motion.div>

      {/* Mountain Silhouette Layer */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute bottom-0 left-0 right-0 h-[40vh] pointer-events-none"
      >
        <svg
          viewBox="0 0 1440 320"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="hsl(var(--background))"
            fillOpacity="0.3"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Floating Mist Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -100 }}
            animate={{
              opacity: [0, 0.3, 0],
              x: ["-10%", "110%"],
            }}
            transition={{
              duration: 20 + i * 5,
              delay: i * 3,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-96 h-48 rounded-full blur-3xl"
            style={{
              top: `${20 + i * 12}%`,
              background: `radial-gradient(ellipse, hsl(var(--mist) / 0.3), transparent)`,
            }}
          />
        ))}
      </div>

      {/* Floating Accent Orbs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-accent/30 blur-[80px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-1/3 right-16 w-56 h-56 rounded-full bg-primary/25 blur-[100px]"
      />

      {/* Content */}
      <motion.div style={{ y: y3, opacity }} className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 mb-8"
        >
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-accent"
          />
          <span className="text-primary-foreground/90 text-sm font-body tracking-wide">
            Your authentic Himalayan journey begins here
          </span>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-primary-foreground mb-6 tracking-tight"
          >
            Discover the
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 tracking-tight"
          >
            <span className="text-accent relative">
              Real Himachal
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="absolute -bottom-2 left-0 right-0 h-1 bg-accent/50 origin-left rounded-full"
              />
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Hidden villages, ancient temples, breathtaking treks, and authentic homestays. 
          Experience Himachal through the eyes of locals.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/explore">
            <Button 
              variant="hero" 
              size="xl" 
              className="gap-2 min-w-[200px] group shadow-xl shadow-accent/25 hover:shadow-accent/40 transition-shadow"
            >
              Explore Places
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link to="/plan">
            <Button 
              variant="heroOutline" 
              size="xl" 
              className="gap-2 min-w-[200px] group backdrop-blur-sm"
            >
              <Play className="w-5 h-5 transition-transform group-hover:scale-110" />
              Plan Your Trip
            </Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { number: "12", label: "Districts", delay: 0 },
            { number: "100+", label: "Hidden Places", delay: 0.1 },
            { number: "50+", label: "Treks", delay: 0.2 },
            { number: "30+", label: "Homestays", delay: 0.3 },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 + stat.delay }}
              whileHover={{ scale: 1.05 }}
              className="text-center group cursor-default"
            >
              <motion.div
                className="font-display text-4xl md:text-5xl font-semibold text-primary-foreground mb-2 group-hover:text-accent transition-colors"
              >
                {stat.number}
              </motion.div>
              <div className="font-body text-sm text-primary-foreground/60 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors cursor-pointer z-20"
      >
        <span className="text-xs font-body uppercase tracking-[0.2em]">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};
