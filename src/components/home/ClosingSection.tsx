import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ClosingSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);
  const textOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8, 1], [0, 1, 1, 0.3]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 0.6]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-width Background Image */}
      <motion.div
        style={{ scale: imageScale }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80"
          alt="Mountain Vista"
          className="w-full h-full object-cover"
        />
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-foreground"
        />
      </motion.div>

      {/* Centered Text */}
      <motion.div
        style={{ opacity: textOpacity }}
        className="relative z-10 container mx-auto px-4 lg:px-8 text-center max-w-4xl"
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="font-display text-2xl md:text-4xl lg:text-5xl text-primary-foreground leading-relaxed tracking-tight"
        >
          Travel slowly.
          <br />
          Listen carefully.
          <br />
          <span className="text-accent">Leave lightly.</span>
        </motion.p>
      </motion.div>

      {/* Fade to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
