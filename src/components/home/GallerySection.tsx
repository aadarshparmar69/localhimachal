import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1585136917704-b2a58f9d8eed?w=800&q=80", caption: "Dawn breaks over Chitkul", size: "large" },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", caption: "Where the trail disappears", size: "small" },
  { src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80", caption: "Prayers at sunrise", size: "medium" },
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", caption: "Kath-Khuni traditions", size: "small" },
  { src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80", caption: "The silence between peaks", size: "medium" },
  { src: "https://images.unsplash.com/photo-1581159959249-fd74c26a5b80?w=600&q=80", caption: "A monastery in the clouds", size: "small" },
];

export const GallerySection = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary-foreground tracking-tight mb-3 sm:mb-4">
            Moments, not memories
          </h2>
          <p className="font-body text-primary-foreground/60 text-base sm:text-lg">
            Some things can only be felt, never explained.
          </p>
        </motion.div>

        {/* Responsive Grid - stacks to 1 column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <GalleryItem key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface GalleryItemProps {
  image: typeof galleryImages[0];
  index: number;
}

const GalleryItem = ({ image, index }: GalleryItemProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative overflow-hidden rounded-lg sm:rounded-xl aspect-[4/3] sm:aspect-square ${
        index === 0 ? "sm:col-span-2 sm:row-span-2 sm:aspect-square" : ""
      }`}
      onClick={() => setIsActive(!isActive)}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <img
        src={image.src}
        alt={image.caption}
        className={`w-full h-full object-cover transition-transform duration-500 ${isActive ? 'scale-105' : 'scale-100'}`}
        loading="lazy"
      />
      <motion.div
        className="absolute inset-0 bg-foreground/60 flex items-end p-4 sm:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <p className="font-body text-sm sm:text-base text-primary-foreground/90 italic">
          {image.caption}
        </p>
      </motion.div>
    </motion.div>
  );
};
