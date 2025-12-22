import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { homestays } from "@/data/homestays";
import { MapPin, Users, Utensils, ArrowRight } from "lucide-react";

export const HomestaysSection = () => {
  const featuredHomestays = homestays.slice(0, 4);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-body mb-4">
            Stay Like a Local
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Village Homestays
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Experience authentic Himachali hospitality. Wake up to mountain views, 
            share meals with local families, and become part of village life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuredHomestays.map((homestay, index) => (
            <motion.div
              key={homestay.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/homestay/${homestay.slug}`}
                className="group flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
              >
                <div className="relative md:w-2/5 aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img
                    src={homestay.image}
                    alt={homestay.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-body font-medium text-foreground">
                    {homestay.priceRange}
                  </div>
                </div>
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground font-body mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{homestay.village}, {homestay.district.charAt(0).toUpperCase() + homestay.district.slice(1)}</span>
                    </div>
                    <h3 className="font-display text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {homestay.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                      {homestay.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary text-xs font-body text-secondary-foreground">
                      <Users className="w-3 h-3" />
                      {homestay.hostFamily}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-secondary text-xs font-body text-secondary-foreground">
                      <Utensils className="w-3 h-3" />
                      Home-cooked meals
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/homestays"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-body font-medium hover:bg-primary/90 transition-colors"
          >
            View All Homestays
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
