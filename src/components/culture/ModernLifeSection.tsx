import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { modernLife } from "@/data/cultureContent";

export const ModernLifeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const leftImageX = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rightImageX = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section 
      ref={sectionRef}
      className="py-24 md:py-32 bg-secondary/20 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="inline-block font-body text-primary text-sm uppercase tracking-widest mb-4">
            Present & Future
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-foreground mb-4">
            {modernLife.title}
          </h2>
          <p className="font-body text-lg text-accent italic mb-6">
            {modernLife.subtitle}
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            {modernLife.description}
          </p>
        </motion.div>

        {/* Split Screen Images */}
        <div className="relative mb-16 h-64 md:h-96 rounded-2xl overflow-hidden">
          <motion.div 
            className="absolute left-0 top-0 w-1/2 h-full"
            style={{ x: leftImageX }}
          >
            <img
              src="https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&q=80"
              alt="Traditional Himachal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/90" />
          </motion.div>
          
          <motion.div 
            className="absolute right-0 top-0 w-1/2 h-full"
            style={{ x: rightImageX }}
          >
            <img
              src="https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=80"
              alt="Modern Himachal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/90" />
          </motion.div>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-2xl md:text-4xl text-foreground/80 italic">
              Between worlds
            </span>
          </div>
        </div>

        {/* Aspects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modernLife.aspects.map((aspect, index) => (
            <motion.div
              key={aspect.heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-soft"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {aspect.heading}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {aspect.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
