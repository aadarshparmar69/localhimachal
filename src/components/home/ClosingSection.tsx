import { motion, useScroll, useTransform, useReducedMotion, useSpring } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BlurIn } from "@/components/animations/ScrollReveal";

export const ClosingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rawBackgroundY = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
  const backgroundY = useSpring(rawBackgroundY, { stiffness: 80, damping: 30 });
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.9, 1], [0, 1, 1, 0.8]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with enhanced Parallax */}
      <motion.div
        style={{ 
          y: prefersReducedMotion ? "0%" : backgroundY,
          scale: prefersReducedMotion ? 1 : backgroundScale,
        }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1920&q=80"
          alt="Misty Himalayan mountains at dawn"
          className="w-full h-[130%] object-cover"
          loading="lazy"
        />
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/60 to-foreground/30" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: prefersReducedMotion ? 1 : contentOpacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl py-20"
      >
        <BlurIn delay={0.1}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="text-sm tracking-[0.2em] uppercase text-primary-foreground/50 mb-5"
          >
            The journey awaits
          </motion.p>
        </BlurIn>

        <motion.h2
          initial={{ opacity: 0, y: 40, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-responsive-title text-primary-foreground mb-6"
        >
          Let the mountains find you
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="font-body text-base sm:text-lg text-primary-foreground/70 mb-10 sm:mb-12 leading-relaxed"
        >
          Some places change you. Himachal is one of them.
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>
          Come as a traveler, leave as someone who understands why these mountains are sacred.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link to="/plan">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg"
                className="bg-[#3c431e] text-white hover:bg-[#3c431e]/90 font-medium shadow-lg px-8"
              >
                Start Planning
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
