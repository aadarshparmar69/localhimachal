import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export const CultureQuoteSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const textureX = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-48 overflow-hidden"
    >
      {/* Muted Background */}
      <div className="absolute inset-0 bg-secondary/40" />
      
      {/* Subtle Moving Texture */}
      <motion.div
        style={{ x: textureX }}
        className="absolute inset-0 opacity-[0.03]"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("https://peakvisor.com/img/news/Himachal-Pradesh-Himalaya.jpg")`,
          }}
        />
      </motion.div>

      <motion.div style={{ opacity }} className="container mx-auto px-4 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Quote Mark */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="block font-display text-[200px] md:text-[300px] leading-none text-foreground select-none absolute -top-20 left-1/2 -translate-x-1/2"
          >
            "
          </motion.span>

          {/* Main Quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <p className="font-display text-2xl md:text-4xl lg:text-5xl text-foreground leading-relaxed tracking-tight">
              Culture here is not{" "}
              <span className="text-muted-foreground italic">performed</span>.
              <br />
              It is <span className="text-accent">lived</span>.
            </p>
          </motion.blockquote>

          {/* Subtle Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Link
              to="/culture"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
            >
              <span>Explore the living heritage</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
