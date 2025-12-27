import { motion } from "framer-motion";
import { regionalCulture } from "@/data/cultureContent";

interface RegionSectionProps {
  region: typeof regionalCulture.upperHimalayas;
  index: number;
}

const RegionSection = ({ region, index }: RegionSectionProps) => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 md:opacity-50">
        <img
          src={region.image}
          alt={region.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/60" />
      </div>

      {/* Region Label */}
      <div className="absolute top-4 md:top-8 left-4 md:left-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="px-3 md:px-4 py-1.5 md:py-2 bg-primary/20 backdrop-blur-sm rounded-full"
        >
          <span className="font-body text-xs md:text-sm text-primary-foreground/80 tracking-wide uppercase">
            {region.region}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block font-body text-accent text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4"
          >
            {region.subtitle}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4 md:mb-6 leading-tight"
          >
            {region.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-body text-base md:text-lg text-primary-foreground/80 italic mb-6 md:mb-8"
          >
            {region.description}
          </motion.p>

          <div className="space-y-4 md:space-y-6">
            {region.content.map((paragraph, pIndex) => (
              <motion.p
                key={pIndex}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + pIndex * 0.1 }}
                viewport={{ once: true }}
                className="font-body text-sm md:text-base text-primary-foreground/70 leading-relaxed"
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
  const regions = [
    regionalCulture.upperHimalayas,
    regionalCulture.midHimalayas,
    regionalCulture.lowerHills
  ];

  return (
    <div className="relative">
      {/* Section Header */}
      <section className="py-12 md:py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block font-body text-primary text-xs md:text-sm uppercase tracking-widest mb-3 md:mb-4"
          >
            Culture by Regions
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground mb-3 md:mb-4"
          >
            Three Worlds, One State
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="font-body text-sm md:text-base text-muted-foreground max-w-2xl mx-auto"
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
