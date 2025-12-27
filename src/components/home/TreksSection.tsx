import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mountain, Clock } from "lucide-react";
import { treks } from "@/data/treks";
import { cn } from "@/lib/utils";
import { useRef } from "react";

const featuredTreks = treks.slice(0, 6);

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-100 text-green-700",
  Moderate: "bg-amber-100 text-amber-700", 
  Hard: "bg-red-100 text-red-700",
};

export const TreksSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-sm tracking-[0.15em] uppercase text-muted-foreground mb-3">
            Trails & Adventures
          </p>
          <h2 className="font-display text-responsive-title text-foreground mb-4">
            Walk the ancient paths
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            From gentle day hikes to challenging high-altitude expeditions, 
            these trails reveal the true majesty of the Himalayas.
          </p>
        </motion.div>

        {/* Horizontal scrollable on mobile */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:overflow-visible scrollbar-hide touch-action-pan-x"
        >
          {featuredTreks.map((trek, index) => (
            <motion.div
              key={trek.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[85%] sm:w-auto"
            >
              <Link
                to={`/trek/${trek.slug}`}
                className="group block bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-card transition-all"
              >
                {/* Image */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={trek.image}
                    alt={trek.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Difficulty Badge */}
                  <div className="absolute top-3 left-3">
                    <span className={cn(
                      "text-xs font-medium px-2.5 py-1 rounded-full",
                      difficultyColors[trek.difficulty]
                    )}>
                      {trek.difficulty}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {trek.name}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{trek.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mountain className="w-3.5 h-3.5" />
                      <span>{trek.altitude}</span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {trek.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint on mobile */}
        <div className="flex justify-center mt-4 sm:hidden">
          <span className="text-xs text-muted-foreground">← Swipe to explore →</span>
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 sm:mt-12"
        >
          <Link 
            to="/treks" 
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors group"
          >
            View all treks
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
