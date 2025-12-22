import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { treks } from "@/data/treks";
import { Clock, Mountain, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const difficultyColors = {
  Easy: "bg-primary/10 text-primary",
  Moderate: "bg-accent/10 text-accent",
  Hard: "bg-destructive/10 text-destructive",
};

export const TreksSection = () => {
  const featuredTreks = treks.slice(0, 6);

  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-body mb-4">
              Adventure Awaits
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Popular Treks
            </h2>
            <p className="font-body text-muted-foreground max-w-xl">
              From gentle forest walks to challenging high-altitude expeditions, 
              Himachal offers trails for every soul.
            </p>
          </div>
          <Link
            to="/treks"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary font-body font-medium hover:gap-4 transition-all"
          >
            View All Treks
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Treks Horizontal Scroll */}
        <div className="relative -mx-4 px-4">
          <div className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide">
            {featuredTreks.map((trek, index) => (
              <motion.div
                key={trek.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
              >
                <Link
                  to={`/trek/${trek.slug}`}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={trek.image}
                      alt={trek.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-body font-medium",
                        difficultyColors[trek.difficulty]
                      )}>
                        {trek.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                      {trek.name}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
                      {trek.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground font-body">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{trek.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Mountain className="w-4 h-4" />
                        <span>{trek.altitude}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
