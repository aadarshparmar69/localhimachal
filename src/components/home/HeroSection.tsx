import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

// Letter-by-letter animation component
const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const letters = text.split("");
  
  return (
    <span className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + index * 0.03,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className="inline-block"
          style={{ whiteSpace: letter === " " ? "pre" : "normal" }}
        >
          {letter}
        </motion.span>
      ))}
    </span>
  );
};

export const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Cinematic Background with Slow Parallax */}
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1920&q=80"
          alt="Himalayan Valley"
          className="w-full h-full object-cover"
        />
        {/* Grain Texture Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/50 to-foreground/90" />
      </motion.div>

      {/* Subtle Mist Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: ["-20%", "20%"],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 left-0 w-full h-48 bg-gradient-to-r from-transparent via-snow-white/10 to-transparent blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-5xl"
      >
        {/* Poetic Headline */}
        <div className="overflow-hidden mb-4">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium text-primary-foreground tracking-tight leading-[1.1]">
            <AnimatedText text="Where mountains" delay={0.3} />
          </h1>
        </div>
        <div className="overflow-hidden mb-8">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight leading-[1.1]">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-accent"
            >
              <AnimatedText text="hold stories" delay={0.8} />
            </motion.span>
          </h1>
        </div>

        {/* Emotional Sub-line */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
          className="font-body text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto leading-relaxed tracking-wide"
        >
          A journey into the heart of Himachal Pradesh. 
          <br className="hidden md:block" />
          Slow, silent, and unforgettable.
        </motion.p>
      </motion.div>

      {/* Minimal Scroll Hint */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors cursor-pointer z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" strokeWidth={1} />
        </motion.div>
      </motion.button>
    </section>
  );
};
