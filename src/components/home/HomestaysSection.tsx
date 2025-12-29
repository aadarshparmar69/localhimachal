import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { homestays } from "@/data/homestays";

const featuredHomestays = homestays.slice(0, 4);

export const HomestaysSection = () => {
  const prefersReducedMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Stay Local
          </p>
          <h2 className="font-display text-responsive-title text-foreground mb-4">
            A place at someone's table
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            The best way to know a place is through its people. These homestays offer 
            more than a bed—they offer belonging.
          </p>
        </motion.div>

        {/* Homestays Grid with fade + scale animation */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-10 sm:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {featuredHomestays.map((homestay) => (
            <motion.div
              key={homestay.id}
              variants={itemVariants}
            >
              <Link
                to={`/homestays/${homestay.slug}`}
                className="group flex flex-col sm:flex-row bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden">
                  <img
                    src={homestay.image}
                    alt={homestay.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{homestay.village}, {homestay.district}</span>
                  </div>
                  
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {homestay.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {homestay.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Users className="w-3 h-3" />
                      <span>{homestay.hostFamily}</span>
                    </div>
                    <span className="text-sm font-medium text-primary">
                      {homestay.priceRange}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link 
            to="/homestays" 
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
          >
            Browse all homestays
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
