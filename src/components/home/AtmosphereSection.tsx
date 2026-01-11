import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import { StaggerContainer, StaggerItem, ScrollReveal } from "@/components/animations/ScrollReveal";

const atmosphereImages = [
  {
    src: "https://s7ap1.scene7.com/is/image/incredibleindia/baspa-rever-himachal-pradesh-rural-unique?qlt=82&ts=1726642254388",
    alt: "Mountain sunrise in Himachal",
    caption: "Where light meets stone"
  },
  {
    src: "https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=",
    alt: "Misty valleys",
    caption: "Silence speaks here"
  },
  {
    src: "https://travellinghigh.wordpress.com/wp-content/uploads/2014/05/dsc0132.jpg",
    alt: "Prayer flags",
    caption: "Prayers carried by wind"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sarahan_-_Bhimakali_Temple.jpg",
    alt: "Snow peaks",
    caption: "Ancient guardians"
  },
  {
    src:"https://s7ap1.scene7.com/is/image/incredibleindia/sangla-valley-himachal-pradesh-rural-unique?qlt=82&ts=1726642072212",
    alt: "Forest path",
    caption: "Every path a story"
  },
  {
    src: "https://mysterioushimachal.wordpress.com/wp-content/uploads/2016/05/spiti-lead-image-866x487.jpg",
    alt: "Golden hour mountains",
    caption: "Time stands still"
  },
];

export const AtmosphereSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-28 bg-muted/30 overflow-hidden relative">
      {/* Subtle parallax background */}
      <motion.div 
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse at 30% 50%, hsl(var(--primary) / 0.05) 0%, transparent 60%)`
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16" blur scale>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7 }}
            className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3"
          >
            Moments
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 40, filter: "blur(15px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground"
          >
            The feeling of these mountains
          </motion.h2>
        </ScrollReveal>

        {/* Dense image grid with staggered animation */}
        <StaggerContainer 
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          staggerDelay={0.08}
          delayChildren={0.1}
        >
          {atmosphereImages.map((image, index) => (
            <StaggerItem key={index}>
              <motion.div
                className={`relative overflow-hidden rounded-xl cursor-pointer ${
                  index === 0 || index === 5 ? 'aspect-[4/3]' : 'aspect-square'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setHoveredIndex(null)}
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  animate={{
                    scale: hoveredIndex === index && !prefersReducedMotion ? 1.15 : 1,
                  }}
                  loading="lazy"
                />
                
                {/* Overlay with caption */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent flex items-end justify-center p-4 sm:p-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className="font-display text-sm sm:text-base text-primary-foreground text-center italic"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ 
                      y: hoveredIndex === index ? 0 : 20, 
                      opacity: hoveredIndex === index ? 1 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {image.caption}
                  </motion.p>
                </motion.div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
