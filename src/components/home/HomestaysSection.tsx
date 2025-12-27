import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users } from "lucide-react";
import { homestays } from "@/data/homestays";

const featuredHomestays = homestays.slice(0, 4);

export const HomestaysSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">
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

        {/* Homestays Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {featuredHomestays.map((homestay, index) => (
            <motion.div
              key={homestay.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/homestays/${homestay.slug}`}
                className="group flex flex-col sm:flex-row bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-shadow"
              >
                {/* Image */}
                <div className="sm:w-2/5 aspect-[16/10] sm:aspect-auto overflow-hidden">
                  <img
                    src={homestay.image}
                    alt={homestay.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{homestay.village}, {homestay.district}</span>
                  </div>
                  
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
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
