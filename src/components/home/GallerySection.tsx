import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1585136917704-b2a58f9d8eed?w=800&q=80",
    caption: "Dawn breaks over Chitkul",
    size: "large",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    caption: "Where the trail disappears",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",
    caption: "Prayers at sunrise",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    caption: "Kath-Khuni traditions",
    size: "small",
  },
  {
    src: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80",
    caption: "The silence between peaks",
    size: "medium",
  },
  {
    src: "https://images.unsplash.com/photo-1581159959249-fd74c26a5b80?w=600&q=80",
    caption: "A monastery in the clouds",
    size: "small",
  },
];

export const GallerySection = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground tracking-tight mb-4">
            Moments, not memories
          </h2>
          <p className="font-body text-primary-foreground/60 text-lg">
            Some things can only be felt, never explained.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <GalleryItem
              key={index}
              image={image}
              index={index}
            />
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
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    small: "aspect-square",
    medium: "aspect-[4/5] md:row-span-1",
    large: "aspect-[4/5] md:row-span-2 md:col-span-1",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative overflow-hidden rounded-xl ${sizeClasses[image.size as keyof typeof sizeClasses]} ${
        index === 0 ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <motion.img
        src={image.src}
        alt={image.caption}
        className="w-full h-full object-cover"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        loading="lazy"
      />

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-foreground/60 flex items-end p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.p
          className="font-body text-sm md:text-base text-primary-foreground/90 italic"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {image.caption}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
