import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Music, Building2, Utensils, PartyPopper, ArrowRight } from "lucide-react";

const cultureItems = [
  {
    icon: PartyPopper,
    title: "Festivals",
    description: "From Kullu Dussehra to local village fairs, experience celebrations that have continued for centuries.",
    image: "https://images.unsplash.com/photo-1594815619395-ab0c70c62b86?w=600&q=80",
  },
  {
    icon: Music,
    title: "Folk Music & Dance",
    description: "Nati, the world's largest folk dance, and soulful pahari melodies that echo through the valleys.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
  },
  {
    icon: Building2,
    title: "Kath-Khuni Architecture",
    description: "Ancient wooden architecture that has survived earthquakes for centuries, a testament to local wisdom.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    icon: Utensils,
    title: "Local Cuisine",
    description: "Siddu, Dham, Aktori, and more – taste recipes passed down through generations of mountain families.",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?w=600&q=80",
  },
];

export const CultureSection = () => {
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
            <span className="inline-block px-4 py-2 rounded-full bg-cedar-brown/10 text-cedar-brown text-sm font-body mb-4">
              Living Heritage
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-4">
              Culture & Stories
            </h2>
            <p className="font-body text-muted-foreground max-w-xl">
              Dive deep into the living traditions, ancient customs, and 
              untold stories that make Himachal's soul unique.
            </p>
          </div>
          <Link
            to="/culture"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-primary font-body font-medium hover:gap-4 transition-all"
          >
            Explore Culture
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cultureItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/culture#${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-2">
                      <item.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
