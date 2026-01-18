import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
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
    if (emailError) setEmailError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = validateEmail(email);
    if (!validation.valid) {
      setEmailError(validation.error || "Invalid email");
      return;
    }

    setIsSubmitting(true);
    setEmailError(null);

    try {
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
          await supabase
            .from("newsletter_subscribers")
            .update({ is_active: true })
            .eq("id", existingSubscriber.id);
        }
      } else {
        const { error } = await supabase
          .from("newsletter_subscribers")
          .insert({
            email: email.toLowerCase().trim(),
            source: "popup",
          });

        if (error) throw error;
      }

      setIsSuccess(true);
      localStorage.setItem("newsletter-subscribed", "true");
      
      toast({
        title: "Welcome to the family! 🏔️",
        description: "You'll receive mountain magic in your inbox soon.",
      });

      setTimeout(() => {
        handleClose();
      }, 2500);

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
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={handleClose}
          />

          {/* Popup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 400,
            }}
            className="relative z-10 w-full max-w-2xl"
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -right-2 -top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#3d2b1f] text-[#a89080] shadow-lg transition-all hover:bg-[#4d3b2f] hover:text-white sm:right-4 sm:top-4"
              aria-label="Close popup"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Main Content Card */}
            <div className="overflow-hidden rounded-2xl bg-[#2a1f16] shadow-2xl">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center px-8 py-16 text-center sm:px-16 sm:py-20"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-600/20"
                    >
                      <CheckCircle className="h-10 w-10 text-green-400" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                      You're In!
                    </h3>
                    <p className="mt-3 text-[#a89080]">
                      Welcome to our mountain community.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="px-6 py-12 sm:px-16 sm:py-16"
                  >
                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="text-center font-display text-3xl font-semibold italic text-white sm:text-4xl md:text-5xl"
                    >
                      Stories from the Mountains
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="mx-auto mt-5 max-w-lg text-center text-base text-[#b8a898] sm:text-lg"
                    >
                      Get hidden gems, local insights, and travel stories delivered to your inbox. No spam, just mountain magic.
                    </motion.p>

                    {/* Form */}
                    <motion.form
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      onSubmit={handleSubmit}
                      className="mx-auto mt-10 max-w-md space-y-4"
                    >
                      {/* Email Input */}
                      <div>
                        <input
                          type="email"
                          placeholder="Your email address"
                          value={email}
                          onChange={handleEmailChange}
                          required
                          aria-invalid={!!emailError}
                          aria-describedby={emailError ? "email-error" : undefined}
                          className={`h-14 w-full rounded-lg border bg-[#3d2b1f]/60 px-5 text-base text-white placeholder:text-[#8a7a6a] transition-all focus:outline-none focus:ring-2 ${
                            emailError 
                              ? "border-red-500/60 focus:border-red-500 focus:ring-red-500/30" 
                              : "border-[#5a4a3a]/60 focus:border-[#7a6a5a] focus:ring-[#7a6a5a]/30"
                          }`}
                        />
                        {emailError && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            id="email-error"
                            className="mt-2 flex items-center justify-center gap-1.5 text-sm text-red-400"
                          >
                            <AlertCircle className="h-4 w-4" />
                            {emailError}
                          </motion.div>
                        )}
                      </div>

                      {/* Subscribe Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex h-14 w-full items-center justify-center rounded-lg border border-[#5a4a3a]/80 bg-[#3d2b1f] text-base font-medium text-white transition-all hover:bg-[#4d3b2f] hover:border-[#6a5a4a] disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <Loader2 className="h-5 w-5 animate-spin" />
                        ) : (
                          "Subscribe"
                        )}
                      </button>
                    </motion.form>

                    {/* Footer Note */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                      className="mt-6 text-center text-xs text-[#7a6a5a]"
                    >
                      Join 2,000+ mountain lovers. Unsubscribe anytime.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;
