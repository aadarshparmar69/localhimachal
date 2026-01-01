import { motion } from "framer-motion";
import { useState } from "react";

const galleryImages = [
  { src: "https://s7ap1.scene7.com/is/image/incredibleindia/baspa-rever-himachal-pradesh-rural-unique?qlt=82&ts=1726642254388", caption: "Dawn breaks over Chitkul", size: "large" },
  { src: "https://media.istockphoto.com/id/1371289822/photo/himalayan-village-town-of-kalpa-with-kailash-mountain-snow-peaks-at-himachal-pradesh-india.jpg?s=612x612&w=0&k=20&c=ibz1ktqV34YlHk0FeSyBcoykG2IVViXNUxU2NLCGsg8=", caption: "Where the trail disappears", size: "small" },
  { src: "https://travellinghigh.wordpress.com/wp-content/uploads/2014/05/dsc0132.jpg", caption: "Prayers at sunrise", size: "medium" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Sarahan_-_Bhimakali_Temple.jpg", caption: "Kath-Khuni traditions", size: "small" },
  { src: "https://s7ap1.scene7.com/is/image/incredibleindia/sangla-valley-himachal-pradesh-rural-unique?qlt=82&ts=1726642072212", caption: "The silence between peaks", size: "medium" },
  { src: "https://mysterioushimachal.wordpress.com/wp-content/uploads/2016/05/spiti-lead-image-866x487.jpg", caption: "A monastery in the clouds", size: "small" },
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
