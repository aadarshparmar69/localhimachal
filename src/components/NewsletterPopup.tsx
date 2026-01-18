import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mountain, Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

// Email validation regex
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

const validateEmail = (email: string): { valid: boolean; error?: string } => {
  if (!email.trim()) {
    return { valid: false, error: "Email is required" };
  }
  if (email.length > 254) {
    return { valid: false, error: "Email is too long" };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { valid: false, error: "Please enter a valid email address" };
  }
  return { valid: true };
};

const NewsletterPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check if user has already seen/dismissed the popup or subscribed
    const hasSeenPopup = localStorage.getItem("newsletter-popup-dismissed");
    const hasSubscribed = localStorage.getItem("newsletter-subscribed");
    if (hasSeenPopup || hasSubscribed) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem("newsletter-popup-dismissed", "true");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Clear error when user starts typing
    if (emailError) {
      setEmailError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate email
    const validation = validateEmail(email);
    if (!validation.valid) {
      setEmailError(validation.error || "Invalid email");
      return;
    }

    setIsSubmitting(true);
    setEmailError(null);

    try {
      // Check if email already exists
      const { data: existingSubscriber } = await supabase
        .from("newsletter_subscribers")
        .select("id, is_active")
        .eq("email", email.toLowerCase().trim())
        .maybeSingle();

      if (existingSubscriber) {
        if (existingSubscriber.is_active) {
          setEmailError("You're already subscribed!");
          setIsSubmitting(false);
          return;
        } else {
          // Reactivate subscription
          await supabase
            .from("newsletter_subscribers")
            .update({ is_active: true })
            .eq("id", existingSubscriber.id);
        }
      } else {
        // Insert new subscriber
        const { error } = await supabase
          .from("newsletter_subscribers")
          .insert({
            email: email.toLowerCase().trim(),
            source: "popup",
          });

        if (error) {
          throw error;
        }
      }

      // Success
      setIsSuccess(true);
      localStorage.setItem("newsletter-subscribed", "true");
      
      toast({
        title: "Welcome to the family! 🏔️",
        description: "You'll receive mountain magic in your inbox soon.",
      });

      // Close popup after success animation
      setTimeout(() => {
        handleClose();
      }, 2000);

    } catch (error: any) {
      console.error("Newsletter subscription error:", error);
      setEmailError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex flex-col items-center py-8"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                        className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-500/20"
                      >
                        <CheckCircle className="h-10 w-10 text-green-400" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-snow-100">You're In!</h3>
                      <p className="mt-2 text-center text-mountain-300">
                        Welcome to our mountain community.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
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
                            onChange={handleEmailChange}
                            required
                            aria-invalid={!!emailError}
                            aria-describedby={emailError ? "email-error" : undefined}
                            className={`h-12 border-mountain-600/50 bg-mountain-800/50 px-4 text-snow-100 placeholder:text-mountain-400 focus:border-mountain-500 focus:ring-mountain-500/20 ${
                              emailError ? "border-red-500/50 focus:border-red-500" : ""
                            }`}
                          />
                          {emailError && (
                            <motion.div
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              id="email-error"
                              className="mt-2 flex items-center gap-1.5 text-sm text-red-400"
                            >
                              <AlertCircle className="h-4 w-4" />
                              {emailError}
                            </motion.div>
                          )}
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
