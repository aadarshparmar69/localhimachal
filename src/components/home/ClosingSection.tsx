import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const ClosingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-5%", prefersReducedMotion ? "-5%" : "10%"]);
  const contentOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0, 1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src="https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=1920&q=80"
          alt="Misty Himalayan mountains at dawn"
          className="w-full h-[120%] object-cover"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/60 to-foreground/40" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: prefersReducedMotion ? 1 : contentOpacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl py-16"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-[0.2em] uppercase text-primary-foreground/50 mb-4"
        >
          The journey awaits
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-responsive-title text-primary-foreground mb-5"
        >
          Let the mountains find you
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-body text-base sm:text-lg text-primary-foreground/70 mb-8 sm:mb-10 leading-relaxed"
        >
          Some places change you. Himachal is one of them.
          <span className="hidden sm:inline"><br /></span>
          <span className="sm:hidden"> </span>
          Come as a traveler, leave as someone who understands why these mountains are sacred.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/plan">
            <Button 
              size="lg"
              className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90 font-medium shadow-lg"
            >
              Start Planning
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};
