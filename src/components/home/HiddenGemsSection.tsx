import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { hiddenGems } from "@/data/hiddenGems";

const featuredGems = hiddenGems.slice(0, 4);

export const HiddenGemsSection = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 sm:mb-14"
        >
          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-3">
            Off the Map
          </p>
          <h2 className="font-display text-responsive-title text-foreground mb-4">
            Places that stay with you
          </h2>
          <p className="font-body text-muted-foreground">
            These are the valleys and villages where time moves differently—where every 
            footstep feels like a discovery.
          </p>
        </motion.div>

        {/* Alternating cards with left/right reveal */}
        <div className="space-y-4 sm:space-y-5 mb-10 sm:mb-12">
          {featuredGems.map((gem, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={gem.id}
                initial={{ 
                  opacity: 0, 
                  x: prefersReducedMotion ? 0 : (isEven ? -30 : 30)
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Link
                  to={`/hidden-gems/${gem.slug}`}
                  className={`group flex flex-col ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300`}
                >
                  {/* Image */}
                  <div className="sm:w-2/5 lg:w-1/3 aspect-[16/10] sm:aspect-auto overflow-hidden relative">
                    <img
                      src={gem.image !== "/placeholder.svg" ? gem.image : `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80`}
                      alt={gem.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    {/* Subtle overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-3">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{gem.district}</span>
                      <span className="mx-1.5">•</span>
                      <span>{gem.altitude}</span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {gem.name}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground line-clamp-2 mb-4">
                      {gem.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
                      <span>Discover more</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link 
            to="/hidden-gems" 
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
          >
            Explore all hidden gems
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
