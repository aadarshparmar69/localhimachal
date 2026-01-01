import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const COOKIE_CONSENT_KEY = "cookie-consent";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to prevent flash on initial load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "declined");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-[100] bg-[#3c431e] border-t border-border shadow-elevated safe-padding-bottom"
          role="dialog"
          aria-modal="true"
          aria-label="Cookie consent"
        >
          <div className="safe-container py-3 sm:py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
              {/* Text */}
              <p className="text-sm text-foreground/90 leading-relaxed">
                This website uses cookies to provide necessary site functionality and to improve your experience. 
                By using this website, you agree to our use of cookies.
              </p>
              
              {/* Buttons */}
              <div className="flex items-center gap-3 flex-shrink-0">
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="bg-foreground text-white hover:bg-foreground/90 px-5 font-medium"
                >
                  Accept
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:bg-foreground/10 px-5 font-medium"
                >
                  Decline
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
