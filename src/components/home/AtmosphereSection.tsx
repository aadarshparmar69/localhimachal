import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const atmosphereImages = [
  {
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    alt: "Mountain sunrise in Himachal",
    caption: "Where light meets stone"
  },
  {
    src: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=600&q=80",
    alt: "Misty valleys",
    caption: "Silence speaks here"
  },
  {
    src: "https://images.unsplash.com/photo-1545562083-c583d014b4f2?w=600&q=80",
    alt: "Prayer flags",
    caption: "Prayers carried by wind"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Snow peaks",
    caption: "Ancient guardians"
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    alt: "Forest path",
    caption: "Every path a story"
  },
  {
    src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
    alt: "Golden hour mountains",
    caption: "Time stands still"
  },
];

export const AtmosphereSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-2">
            Moments
          </p>
          <h2 className="font-display text-2xl sm:text-3xl text-foreground">
            The feeling of these mountains
          </h2>
        </motion.div>

        {/* Dense image grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {atmosphereImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 || index === 5 ? 'aspect-[4/3]' : 'aspect-square'
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-700 ease-out ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
                loading="lazy"
              />
              
              {/* Overlay with caption */}
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex items-end justify-center p-3 sm:p-4 transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="font-display text-sm sm:text-base text-primary-foreground text-center italic">
                  {image.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
