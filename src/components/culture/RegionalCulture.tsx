import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { regionalCulture } from "@/data/cultureContent";

interface RegionSectionProps {
  region: typeof regionalCulture.upperHimalayas;
  index: number;
}

const RegionSection = ({ region, index }: RegionSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.6, 0.6, 0.3]);
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, -50]);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      {/* Background Image */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ opacity: imageOpacity }}
      >
        <img
          src={region.image}
          alt={region.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 ${
          index % 2 === 0 
            ? "bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" 
            : "bg-gradient-to-l from-foreground/95 via-foreground/80 to-foreground/40"
        }`} />
      </motion.div>

      {/* Sticky Region Label */}
      <div className={`absolute top-8 ${index % 2 === 0 ? 'left-8' : 'right-8'} z-10`}>
        <motion.div
          initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full"
        >
          <span className="font-body text-sm text-primary-foreground/80 tracking-wide uppercase">
            {region.region}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <motion.div 
        className={`container mx-auto px-4 lg:px-8 relative z-10 ${
          index % 2 === 0 ? '' : 'flex justify-end'
        }`}
        style={{ y: contentY }}
      >
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block font-body text-accent text-sm uppercase tracking-widest mb-4"
          >
            {region.subtitle}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl font-semibold text-primary-foreground mb-6"
          >
            {region.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-body text-lg text-primary-foreground/80 italic mb-8"
          >
            {region.description}
          </motion.p>

          <div className="space-y-6">
            {region.content.map((paragraph, pIndex) => (
              <motion.p
                key={pIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + pIndex * 0.1 }}
                viewport={{ once: true }}
                className="font-body text-primary-foreground/70 leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const RegionalCulture = () => {
  const regions = [
    regionalCulture.upperHimalayas,
    regionalCulture.midHimalayas,
    regionalCulture.lowerHills
  ];

  return (
    <div className="relative">
      {/* Section Header */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block font-body text-primary text-sm uppercase tracking-widest mb-4"
          >
            Culture by Regions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4"
          >
            Three Worlds, One State
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground max-w-2xl mx-auto"
          >
            From the Buddhist highlands to the Hindu heartlands to the transitional lower hills, 
            Himachal contains cultural universes within its mountain folds.
          </motion.p>
        </div>
      </section>

      {/* Regional Sections */}
      {regions.map((region, index) => (
        <RegionSection key={region.title} region={region} index={index} />
      ))}
    </div>
  );
};
