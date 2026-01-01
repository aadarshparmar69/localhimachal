import { motion, useReducedMotion } from "framer-motion";
import { regionalCulture } from "@/data/cultureContent";
import { MapPin } from "lucide-react";

interface RegionSectionProps {
  region: typeof regionalCulture.upperHimalayas;
  index: number;
}

const RegionSection = ({ region, index }: RegionSectionProps) => {
  const prefersReducedMotion = useReducedMotion();
  
  return (
    <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center py-12 sm:py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={region.image}
          alt={region.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/60 to-transparent" />
      </div>

      {/* Region Label */}
      <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/20 backdrop-blur-sm rounded-full"
        >
          <MapPin className="w-3 h-3 text-primary-foreground/70" />
          <span className="font-body text-xs text-primary-foreground/80 tracking-wide uppercase">
            {region.region}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block font-body text-accent text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3"
          >
            {region.subtitle}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-primary-foreground mb-3 sm:mb-4 leading-tight"
          >
            {region.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="font-body text-base sm:text-lg text-primary-foreground/90 italic mb-4 sm:mb-6"
          >
            {region.description}
          </motion.p>

          <div className="space-y-3 sm:space-y-4">
            {region.content.map((paragraph, pIndex) => (
              <motion.p
                key={pIndex}
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + pIndex * 0.08 }}
                viewport={{ once: true }}
                className="font-body text-sm sm:text-base text-primary-foreground/85 leading-[1.8]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const RegionalCulture = () => {
  const prefersReducedMotion = useReducedMotion();
  const regions = [
    regionalCulture.upperHimalayas,
    regionalCulture.midHimalayas,
    regionalCulture.lowerHills
  ];

  return (
    <div className="relative">
      {/* Section Header */}
      <section className="py-10 sm:py-14 bg-secondary/30 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block font-body text-primary text-xs sm:text-sm uppercase tracking-[0.2em] mb-2 sm:mb-3"
          >
            Culture by Regions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-2 sm:mb-3"
          >
            Three Worlds, One State
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
            className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto"
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
