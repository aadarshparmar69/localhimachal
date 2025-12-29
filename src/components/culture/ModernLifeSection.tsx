import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { modernLife } from "@/data/cultureContent";
import { Layers } from "lucide-react";

export const ModernLifeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftImageX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-8, 8]);
  const rightImageX = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [8, -8]);

  return (
    <section 
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-secondary/20 overflow-hidden relative"
    >
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-10 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-primary/60" />
            <span className="font-body text-primary text-xs sm:text-sm uppercase tracking-[0.2em]">
              Present & Future
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground mb-3">
            {modernLife.title}
          </h2>
          <p className="font-body text-base sm:text-lg text-accent italic mb-3 sm:mb-4">
            {modernLife.subtitle}
          </p>
          <p className="font-body text-muted-foreground leading-relaxed text-sm sm:text-base max-w-2xl mx-auto">
            {modernLife.description}
          </p>
        </motion.div>

        {/* Split Screen Images */}
        <div className="relative mb-10 sm:mb-14 h-44 sm:h-56 md:h-80 rounded-xl overflow-hidden">
          {/* Mobile: Simple stacked images */}
          <div className="sm:hidden absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&q=80"
              alt="Traditional Himachal"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-foreground/50 flex items-center justify-center">
              <span className="font-display text-lg text-primary-foreground/90 italic">
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

          <div className="absolute inset-0 items-center justify-center hidden sm:flex">
            <span className="font-display text-xl md:text-3xl text-foreground/80 italic">
              Between worlds
            </span>
          </div>
        </div>

        {/* Aspects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {modernLife.aspects.map((aspect, index) => (
            <motion.div
              key={aspect.heading}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl p-5 sm:p-6 shadow-soft border border-border/30"
            >
              <h3 className="font-display text-lg font-semibold text-foreground mb-2 sm:mb-3">
                {aspect.heading}
              </h3>
              <p className="font-body text-muted-foreground leading-[1.7] text-sm sm:text-base">
                {aspect.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Section divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};