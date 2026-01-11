import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  size?: "default" | "large";
}

export const SearchInput = ({ 
  value, 
  onChange, 
  placeholder = "Search destinations, treks, homestays...",
  autoFocus = false,
  size = "default"
}: SearchInputProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-full"
    >
      <div className={`relative flex items-center ${size === "large" ? "text-lg" : ""}`}>
        <Search className={`absolute left-4 text-muted-foreground ${size === "large" ? "w-6 h-6" : "w-5 h-5"}`} />
        <Input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`
            ${size === "large" ? "pl-14 pr-12 py-6 text-lg" : "pl-12 pr-10 py-3"}
            w-full rounded-2xl border-2 border-border/50 
            bg-background/80 backdrop-blur-sm
            focus:border-primary focus:ring-2 focus:ring-primary/20
            placeholder:text-muted-foreground/60
            transition-all duration-300
            shadow-sm hover:shadow-md focus:shadow-lg
          `}
        />
        {value && (
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onChange("")}
            className={`absolute right-2 ${size === "large" ? "w-10 h-10" : "w-8 h-8"} rounded-full hover:bg-secondary`}
          >
            <X className={size === "large" ? "w-5 h-5" : "w-4 h-4"} />
          </Button>
        )}
      </div>
    </motion.div>
  );
};
