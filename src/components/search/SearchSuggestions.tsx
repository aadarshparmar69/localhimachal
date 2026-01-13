import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Star, 
  Sparkles, 
  Sun,
  MapPin,
  Mountain,
  Home,
  ArrowRight,
  Compass
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  trendingPlaces,
  popularDestinations,
  hiddenGemSuggestions,
  seasonalPicks,
  searchCategories,
  popularSearchTerms,
  type SuggestedPlace
} from "@/data/suggestedPlaces";

const typeIcons = {
  district: MapPin,
  trek: Mountain,
  homestay: Home,
  "hidden-gem": Sparkles,
};

const typeColors = {
  district: "bg-emerald-500/10 text-emerald-600",
  trek: "bg-orange-500/10 text-orange-600",
  homestay: "bg-blue-500/10 text-blue-600",
  "hidden-gem": "bg-purple-500/10 text-purple-600",
};

interface PlaceCardProps {
  place: SuggestedPlace;
  index: number;
  size?: "small" | "medium" | "large";
}

const PlaceCard = ({ place, index, size = "medium" }: PlaceCardProps) => {
  const Icon = typeIcons[place.type];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
    >
      <Link
        to={place.url}
        className={cn(
          "group block relative overflow-hidden rounded-xl transition-all duration-300",
          "hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1",
          "bg-card border border-border/50",
          size === "large" && "aspect-[4/3]",
          size === "medium" && "aspect-[3/2]",
          size === "small" && "aspect-[16/9]"
        )}
      >
        {/* Image */}
        <img
          src={place.image}
          alt={place.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        {/* Type Badge */}
        <div className="absolute top-3 left-3">
          <span className={cn(
            "inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium",
            "bg-white/90 backdrop-blur-sm shadow-sm",
            typeColors[place.type]
          )}>
            <Icon className="w-3 h-3" />
            {place.type === "hidden-gem" ? "Hidden Gem" : place.type.charAt(0).toUpperCase() + place.type.slice(1)}
          </span>
        </div>
        
        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className={cn(
            "font-display font-semibold text-white mb-1 group-hover:text-primary transition-colors",
            size === "large" ? "text-xl" : "text-lg"
          )}>
            {place.name}
          </h3>
          <p className="text-white/80 text-sm line-clamp-1">
            {place.subtitle}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

interface SectionHeaderProps {
  icon: typeof TrendingUp;
  title: string;
  subtitle?: string;
  iconColor?: string;
  viewAllLink?: string;
}

const SectionHeader = ({ icon: IconComponent, title, subtitle, iconColor = "text-primary", viewAllLink }: SectionHeaderProps) => (
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      <div className={cn("p-2 rounded-lg bg-primary/10", iconColor)}>
        <IconComponent className="w-5 h-5" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-foreground text-lg">{title}</h3>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
    {viewAllLink && (
      <Link
        to={viewAllLink}
        className="text-sm text-primary hover:text-primary/80 flex items-center gap-1 group"
      >
        View all
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    )}
  </div>
);

interface SearchSuggestionsProps {
  onSearchClick?: (term: string) => void;
}

export const SearchSuggestions = ({ onSearchClick }: SearchSuggestionsProps) => {
  return (
    <div className="space-y-12">
      {/* Quick Categories */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <SectionHeader 
          icon={Compass} 
          title="Explore by Category" 
          subtitle="Find exactly what you're looking for"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {searchCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={`/search?category=${cat.id}`}
                  className={cn(
                    "block p-4 rounded-xl border transition-all duration-300",
                    "hover:shadow-lg hover:-translate-y-1",
                    "bg-card",
                    cat.color
                  )}
                >
                  <Icon className="w-8 h-8 mb-3" />
                  <h4 className="font-semibold text-foreground mb-1">{cat.name}</h4>
                  <p className="text-sm text-muted-foreground">{cat.description}</p>
                  <span className="inline-block mt-2 text-xs font-medium opacity-70">
                    {cat.count} places
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Popular Search Terms */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
      >
        <p className="text-sm font-medium text-muted-foreground mb-3">Popular searches</p>
        <div className="flex flex-wrap gap-2">
          {popularSearchTerms.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.term}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => onSearchClick?.(item.term)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-sm transition-colors border border-border/50"
              >
                <Icon className="w-4 h-4 text-muted-foreground" />
                {item.term}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Trending Now */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.4 }}
      >
        <SectionHeader 
          icon={TrendingUp} 
          title="Trending Now" 
          subtitle="Most searched destinations this week"
          iconColor="text-rose-500"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trendingPlaces.map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} size="medium" />
          ))}
        </div>
      </motion.div>

      {/* Popular Destinations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <SectionHeader 
          icon={Star} 
          title="Popular Destinations" 
          subtitle="All-time favorites"
          iconColor="text-amber-500"
          viewAllLink="/explore"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {popularDestinations.map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} size="medium" />
          ))}
        </div>
      </motion.div>

      {/* Hidden Gems */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
      >
        <SectionHeader 
          icon={Sparkles} 
          title="Hidden Gems" 
          subtitle="Offbeat places away from crowds"
          iconColor="text-purple-500"
          viewAllLink="/hidden-gems"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {hiddenGemSuggestions.map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} size="medium" />
          ))}
        </div>
      </motion.div>

      {/* Seasonal Picks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <SectionHeader 
          icon={Sun} 
          title="Best for This Season" 
          subtitle="Perfect winter escapes"
          iconColor="text-sky-500"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {seasonalPicks.map((place, index) => (
            <PlaceCard key={place.id} place={place} index={index} size="large" />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
