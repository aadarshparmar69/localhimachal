import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { hiddenGems } from "@/data/hiddenGems";

const featuredGems = hiddenGems.slice(0, 4);

export const HiddenGemsSection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-10 sm:mb-16"
        >
          <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">
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

        {/* Gems - Vertical stack on mobile, horizontal on desktop */}
        <div className="space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 mb-10 sm:mb-12">
          {featuredGems.map((gem, index) => (
            <motion.div
              key={gem.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/hidden-gems/${gem.slug}`}
                className="group block bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-shadow"
              >
                {/* Image */}
                <div className="aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                  <img
                    src={gem.image !== "/placeholder.svg" ? gem.image : `https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80`}
                    alt={gem.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{gem.district}</span>
                    <span className="mx-1">•</span>
                    <span>{gem.altitude}</span>
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {gem.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {gem.shortDescription}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
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
