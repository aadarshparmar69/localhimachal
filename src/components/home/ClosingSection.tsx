import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ClosingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.05, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.7, 0.9], [0, 1, 1, 0.5]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ scale: imageScale }} className="absolute inset-0 will-change-transform">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="Mountain Vista"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/50 sm:bg-foreground/40" />
      </motion.div>

      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl"
      >
        <p className="font-display text-xl sm:text-2xl md:text-4xl lg:text-5xl text-primary-foreground leading-relaxed tracking-tight">
          Travel slowly.<br />
          Listen carefully.<br />
          <span className="text-accent">Leave lightly.</span>
        </p>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
