import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { modernLife } from "@/data/cultureContent";

export const ModernLifeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Reduced parallax effect on mobile
  const leftImageX = useTransform(scrollYProgress, [0, 1], [-10, 10]);
  const rightImageX = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section 
      ref={sectionRef}
      className="py-16 sm:py-24 md:py-32 bg-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-16"
        >
          <span className="inline-block font-body text-primary text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4">
            Present & Future
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-5xl font-semibold text-foreground mb-3 sm:mb-4">
            {modernLife.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic mb-4 sm:mb-6">
            {modernLife.subtitle}
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
            {modernLife.description}
          </p>
        </motion.div>

        {/* Split Screen Images - Stacked on mobile */}
        <div className="relative mb-10 sm:mb-16 h-48 sm:h-64 md:h-96 rounded-xl sm:rounded-2xl overflow-hidden">
          {/* Mobile: Simple stacked images */}
          <div className="sm:hidden absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&q=80"
              alt="Traditional Himachal"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
              <span className="font-display text-xl text-primary-foreground/90 italic">
                Between worlds
              </span>
            </div>
          </div>
          
          {/* Desktop: Parallax split images */}
          <motion.div 
            className="absolute left-0 top-0 w-1/2 h-full hidden sm:block"
            style={{ x: leftImageX }}
          >
            <img
              src="https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&q=80"
              alt="Traditional Himachal"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/90" />
          </motion.div>
          
          <motion.div 
            className="absolute right-0 top-0 w-1/2 h-full hidden sm:block"
            style={{ x: rightImageX }}
          >
            <img
              src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80"
              alt="Modern Himachal"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/90" />
          </motion.div>

          {/* Center text - desktop only */}
          <div className="absolute inset-0 items-center justify-center hidden sm:flex">
            <span className="font-display text-2xl md:text-4xl text-foreground/80 italic">
              Between worlds
            </span>
          </div>
        </div>

        {/* Aspects - Single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
          {modernLife.aspects.map((aspect, index) => (
            <motion.div
              key={aspect.heading}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-soft"
            >
              <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">
                {aspect.heading}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base">
                {aspect.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};