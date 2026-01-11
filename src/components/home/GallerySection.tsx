import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useState, useRef } from "react";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const galleryImages = [
  { src: "https://s7ap1.scene7.com/is/image/incredibleindia/baspa-rever-himachal-pradesh-rural-unique?qlt=82&ts=1726642254388", caption: "Dawn breaks over Chitkul", size: "large" },
  { src: "https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=", caption: "Where the trail disappears", size: "small" },
  { src: "https://travellinghigh.wordpress.com/wp-content/uploads/2014/05/dsc0132.jpg", caption: "Prayers at sunrise", size: "medium" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sarahan_-_Bhimakali_Temple.jpg", caption: "Kath-Khuni traditions", size: "small" },
  { src: "https://s7ap1.scene7.com/is/image/incredibleindia/sangla-valley-himachal-pradesh-rural-unique?qlt=82&ts=1726642072212", caption: "The silence between peaks", size: "medium" },
  { src: "https://mysterioushimachal.wordpress.com/wp-content/uploads/2016/05/spiti-lead-image-866x487.jpg", caption: "A monastery in the clouds", size: "small" },
];

export const GallerySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : -50]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, prefersReducedMotion ? 0 : 50]);

  return (
    <section 
      ref={containerRef}
      className="py-16 sm:py-24 md:py-32 bg-foreground overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-10 sm:mb-16" blur>
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-sm uppercase text-primary-foreground/50 mb-3"
          >
            Visual Stories
          </motion.p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground tracking-tight mb-3 sm:mb-4">
            Moments, not memories
          </h2>
          <p className="font-body text-primary-foreground/60 text-base sm:text-lg">
            Some things can only be felt, never explained.
          </p>
        </ScrollReveal>

        {/* Enhanced Grid with parallax rows */}
        <div className="space-y-3 sm:space-y-4 md:space-y-6">
          {/* Row 1 - moves left on scroll */}
          <motion.div 
            style={{ x: x1 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          >
            {galleryImages.slice(0, 3).map((image, index) => (
              <GalleryItem 
                key={index} 
                image={image} 
                index={index} 
                isLarge={index === 0}
              />
            ))}
          </motion.div>

          {/* Row 2 - moves right on scroll */}
          <motion.div 
            style={{ x: x2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          >
            {galleryImages.slice(3, 6).map((image, index) => (
              <GalleryItem 
                key={index + 3} 
                image={image} 
                index={index + 3}
                isLarge={false}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface GalleryItemProps {
  image: typeof galleryImages[0];
  index: number;
  isLarge?: boolean;
}

const GalleryItem = ({ image, index, isLarge = false }: GalleryItemProps) => {
  const [isActive, setIsActive] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.7, 
        delay: prefersReducedMotion ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1]
      }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: prefersReducedMotion ? 0 : -8 }}
      className={`relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer group ${
        isLarge ? "col-span-2 aspect-[2/1] sm:aspect-[16/9]" : "aspect-square"
      }`}
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <motion.img
        src={image.src}
        alt={image.caption}
        className="w-full h-full object-cover"
        animate={{ scale: isActive && !prefersReducedMotion ? 1.1 : 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        loading="lazy"
      />
      
      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Caption */}
      <motion.div
        className="absolute inset-x-0 bottom-0 p-4 sm:p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 20 }}
        transition={{ duration: 0.3 }}
      >
        <p className="font-body text-sm sm:text-base text-primary-foreground/90 italic">
          {image.caption}
        </p>
      </motion.div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-primary-foreground/30 rounded-tr-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};
