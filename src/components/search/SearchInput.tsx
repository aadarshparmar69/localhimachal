import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoFocus?: boolean;
  size?: "default" | "large";
  className?: string;
}

export const SearchInput = ({ 
  value, 
  onChange, 
  placeholder = "Search destinations, treks, homestays...",
  autoFocus = false,
  size = "default",
  className,
}: SearchInputProps) => {
  return (
    <div className={cn("relative w-full", className)}>
      <Search className={cn(
        "absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground",
        size === "large" ? "w-5 h-5" : "w-4 h-4"
      )} />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={cn(
          "w-full rounded-xl border-2 border-border/50",
          "bg-background/80 backdrop-blur-sm",
          "focus:border-primary focus:ring-2 focus:ring-primary/20",
          "placeholder:text-muted-foreground/60",
          "transition-all duration-200",
          size === "large" 
            ? "pl-12 pr-12 py-5 text-lg h-14" 
            : "pl-10 pr-10 py-3 h-11"
        )}
      />
      {value && (
        <button
          onClick={() => onChange("")}
          className={cn(
            "absolute top-1/2 -translate-y-1/2 p-1.5 rounded-full",
            "hover:bg-secondary transition-colors",
            size === "large" ? "right-3" : "right-2"
          )}
        >
          <X className={size === "large" ? "w-5 h-5" : "w-4 h-4"} />
        </button>
      )}
    </div>
  );
};
