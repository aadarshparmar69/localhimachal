import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { districts } from "@/data/districts";
import { ScrollReveal } from "@/components/animations/ScrollReveal";

const featuredDistricts = districts.slice(0, 6);

export const DistrictPreviewSection = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 sm:mb-16" blur>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.1 }}
            className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center"
          >
            <MapPin className="w-6 h-6 text-primary" />
          </motion.div>
          
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Explore by Region
          </p>
          <h2 className="font-display text-responsive-title text-foreground mb-4">
            Twelve districts, infinite stories
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Each region holds its own character—from the Buddhist monasteries of Spiti 
            to the colonial charm of Shimla.
          </p>
          
          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent mx-auto mt-6"
          />
        </ScrollReveal>

        {/* Districts Grid with staggered animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-12 sm:mb-14"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredDistricts.map((district, index) => (
            <motion.div
              key={district.id}
              variants={itemVariants}
              whileHover={{ y: prefersReducedMotion ? 0 : -8 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link
                to={`/district/${district.slug}`}
                className="group block relative aspect-[4/3] rounded-2xl overflow-hidden shadow-card"
              >
                <motion.img
                  src={district.image}
                  alt={district.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: prefersReducedMotion ? 1 : 1.08 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <motion.h3 
                    className="font-display text-xl sm:text-2xl text-primary-foreground mb-1"
                    initial={{ y: 0 }}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {district.name}
                  </motion.h3>
                  <p className="text-sm text-primary-foreground/70 line-clamp-1">
                    {district.tagline}
                  </p>
                </div>

                {/* Hover indicator with animation */}
                <motion.div 
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0.8, rotate: -45 }}
                  whileHover={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary-foreground/30 transition-colors">
                    <ArrowRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </motion.div>

                {/* Corner accent on hover */}
                <motion.div
                  className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary-foreground/30 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link 
            to="/explore" 
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/5 hover:bg-primary/10 border border-primary/20 text-foreground font-medium transition-all duration-300"
          >
            <span>View all 12 districts</span>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
