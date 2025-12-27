import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { districts } from "@/data/districts";
import { MapPin, Mountain, Calendar } from "lucide-react";

export const DistrictGridSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium tracking-widest text-sm uppercase">
            Explore the Land
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mt-3 mb-4">
            12 Districts, Infinite Stories
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Each district holds its own rhythm—ancient temples, hidden valleys, and communities 
            that have lived with mountains for centuries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {districts.map((district, index) => (
            <motion.div
              key={district.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link
                to={`/explore/${district.slug}`}
                className="group block h-full"
              >
                <div className="relative h-full bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={district.image}
                      alt={district.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                    
                    {/* Altitude Badge */}
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs font-medium text-foreground">
                      <Mountain className="w-3 h-3 text-primary" />
                      {district.altitude}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {district.name}
                    </h3>
                    <p className="text-primary/80 text-sm font-medium mt-1 mb-3">
                      {district.tagline}
                    </p>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {district.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{district.bestTime}</span>
                      </div>
                    </div>

                    {/* Famous For Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {district.famousFor.slice(0, 3).map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary/80"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-300"
          >
            Explore All Districts
            <MapPin className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
