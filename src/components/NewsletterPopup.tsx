import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mountain, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if user has already seen/dismissed the popup
    const hasSeenPopup = localStorage.getItem("newsletter-popup-dismissed");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter-popup-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Welcome to the family! 🏔️",
      description: "You'll receive mountain magic in your inbox soon.",
    });
    
    setIsSubmitting(false);
    handleClose();
    localStorage.setItem("newsletter-subscribed", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              type: "spring",
              damping: 25,
              stiffness: 300,
              duration: 0.4,
            }}
            className="fixed left-1/2 top-1/2 z-50 w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2"
          >
            <div className="relative overflow-hidden rounded-2xl border border-mountain-700/30 bg-gradient-to-br from-mountain-900 via-mountain-800 to-mountain-900 shadow-2xl">
              {/* Background decorative elements */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-mountain-600/20 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-cedar-600/20 blur-3xl" />
              
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute right-4 top-4 z-10 rounded-full p-2 text-mountain-400 transition-all hover:bg-mountain-700/50 hover:text-mountain-200"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Content */}
              <div className="relative px-6 py-10 sm:px-10 sm:py-12">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-mountain-600 to-mountain-700 shadow-lg"
                >
                  <Mountain className="h-8 w-8 text-snow-100" />
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="mb-3 text-center font-display text-2xl font-semibold text-snow-100 sm:text-3xl"
                >
                  Stories from the Mountains
                </motion.h2>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mx-auto mb-8 max-w-sm text-center text-sm text-mountain-300 sm:text-base"
                >
                  Get hidden gems, local insights, and travel stories delivered to your inbox. No spam, just mountain magic.
                </motion.p>

                {/* Form */}
                <motion.form
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="h-12 border-mountain-600/50 bg-mountain-800/50 px-4 text-snow-100 placeholder:text-mountain-400 focus:border-mountain-500 focus:ring-mountain-500/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 w-full bg-gradient-to-r from-mountain-600 to-mountain-700 text-snow-100 shadow-lg transition-all hover:from-mountain-500 hover:to-mountain-600 hover:shadow-xl disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="h-5 w-5" />
                      </motion.div>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </motion.form>

                {/* Footer note */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4 text-center text-xs text-mountain-500"
                >
                  Join 2,000+ mountain lovers. Unsubscribe anytime.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
