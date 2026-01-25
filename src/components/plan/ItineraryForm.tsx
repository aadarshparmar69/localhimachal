import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { 
  User, Mail, Phone, Wallet, Users, Calendar, MapPin, 
  Heart, MessageSquare, ArrowRight, ArrowLeft, Check, Loader2, Send, Sparkles
} from "lucide-react";
import { AIItineraryChat } from "./AIItineraryChat";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const districts = [
  "Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu",
  "Lahaul & Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"
];

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  budget: z.enum(["budget", "mid-range", "premium"]),
  travelers: z.enum(["1-2", "3-5", "6+"]),
  duration: z.enum(["3-5", "6-9", "10+"]),
  districts: z.array(z.string()).min(1, "Please select at least one district"),
  holidayType: z.enum(["honeymoon", "family", "solo", "friends", "adventure", "spiritual", "slow"]),
  notes: z.string().max(1000).optional()
});

type FormData = z.infer<typeof formSchema>;

const steps = [
  { id: 1, title: "Personal Details", icon: User },
  { id: 2, title: "Trip Preferences", icon: Calendar },
  { id: 3, title: "Destinations", icon: MapPin },
  { id: 4, title: "Additional Info", icon: MessageSquare }
];

export const ItineraryForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAIChat, setShowAIChat] = useState(false);
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      budget: "mid-range",
      travelers: "1-2",
      duration: "6-9",
      districts: [],
      holidayType: "solo",
      notes: ""
    }
  });

  const { register, watch, setValue, formState: { errors } } = form;
  const watchedDistricts = watch("districts");

  const handleDistrictToggle = (district: string) => {
    const current = watchedDistricts || [];
    if (current.includes(district)) {
      setValue("districts", current.filter(d => d !== district));
    } else {
      setValue("districts", [...current, district]);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('itinerary_requests')
        .insert({
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          budget: data.budget,
          travelers: data.travelers,
          duration: data.duration,
          districts: data.districts,
          holiday_type: data.holidayType,
          notes: data.notes || null
        });

      if (error) throw error;

      setSubmittedData(data);
      setIsSubmitted(true);
      setShowAIChat(true);
      toast({
        title: "Request Submitted!",
        description: "Your AI travel assistant is now creating your personalized itinerary.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetChat = () => {
    setShowAIChat(false);
    setIsSubmitted(false);
    setSubmittedData(null);
    setCurrentStep(1);
    form.reset();
  };

  // Show AI Chat after form submission
  if (isSubmitted && showAIChat && submittedData) {
    return (
      <AIItineraryChat
        tripContext={{
          fullName: submittedData.fullName,
          email: submittedData.email,
          phone: submittedData.phone,
          budget: submittedData.budget,
          travelers: submittedData.travelers,
          duration: submittedData.duration,
          districts: submittedData.districts,
          holidayType: submittedData.holidayType,
          notes: submittedData.notes,
        }}
        onReset={handleResetChat}
      />
    );
  }

  // Show success state without AI chat (fallback)
  if (isSubmitted && !showAIChat) {
    return (
      <section id="itinerary-form" className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-primary" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Request Received!
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8">
              Thank you for your interest. Our travel experts will craft a personalized 
              itinerary based on your preferences and get back to you within 24 hours.
            </p>
            <Button 
              onClick={handleResetChat}
              variant="outline"
              className="gap-2"
            >
              Submit Another Request
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="itinerary-form" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block font-body text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Get Personalized Help
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Create Your Custom Itinerary
          </h2>
          <p className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tell us about your dream trip, and our local experts will design 
            a personalized itinerary tailored just for you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-10 md:mb-12">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div 
                      className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        currentStep >= step.id 
                          ? 'bg-[#3c431e] text-white' 
                          : 'bg-secondary text-muted-foreground'
                      }`}
                    >
                      {currentStep > step.id ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <step.icon className="w-5 h-5" />
                      )}
                    </div>
                    <span className={`mt-2 font-body text-xs hidden md:block ${
                      currentStep >= step.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 md:w-24 h-0.5 mx-2 transition-all duration-300 ${
                      currentStep > step.id ? 'bg-[#3c431e]' : 'bg-border'
                    }`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="bg-card rounded-2xl md:rounded-3xl shadow-card p-6 md:p-10">
              <AnimatePresence mode="wait">
                {/* Step 1: Personal Details */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4" />
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                        {...register("fullName")}
                        className="h-12"
                      />
                      {errors.fullName && (
                        <p className="text-sm text-destructive mt-1">{errors.fullName.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                        <Mail className="w-4 h-4" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        {...register("email")}
                        className="h-12"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 9876543210"
                        {...register("phone")}
                        className="h-12"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </motion.div>
                )}

                {/* Step 2: Trip Preferences */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <Label className="flex items-center gap-2 mb-4">
                        <Wallet className="w-4 h-4" />
                        Budget *
                      </Label>
                      <RadioGroup
                        value={watch("budget")}
                        onValueChange={(value) => setValue("budget", value as FormData["budget"])}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { value: "budget", label: "Budget", desc: "₹1,500-2,500/day" },
                          { value: "mid-range", label: "Mid-Range", desc: "₹3,000-5,000/day" },
                          { value: "premium", label: "Premium", desc: "₹6,000+/day" }
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`flex flex-col items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              watch("budget") === option.value
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <RadioGroupItem value={option.value} className="sr-only" />
                            <span className="font-body text-sm font-medium text-foreground">{option.label}</span>
                            <span className="font-body text-xs text-muted-foreground mt-1">{option.desc}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="flex items-center gap-2 mb-4">
                        <Users className="w-4 h-4" />
                        Number of Travelers *
                      </Label>
                      <RadioGroup
                        value={watch("travelers")}
                        onValueChange={(value) => setValue("travelers", value as FormData["travelers"])}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { value: "1-2", label: "1-2" },
                          { value: "3-5", label: "3-5" },
                          { value: "6+", label: "6+" }
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              watch("travelers") === option.value
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <RadioGroupItem value={option.value} className="sr-only" />
                            <span className="font-body text-sm font-medium text-foreground">{option.label}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="flex items-center gap-2 mb-4">
                        <Calendar className="w-4 h-4" />
                        Trip Duration *
                      </Label>
                      <RadioGroup
                        value={watch("duration")}
                        onValueChange={(value) => setValue("duration", value as FormData["duration"])}
                        className="grid grid-cols-3 gap-4"
                      >
                        {[
                          { value: "3-5", label: "3-5 Days" },
                          { value: "6-9", label: "6-9 Days" },
                          { value: "10+", label: "10+ Days" }
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all ${
                              watch("duration") === option.value
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <RadioGroupItem value={option.value} className="sr-only" />
                            <span className="font-body text-sm font-medium text-foreground">{option.label}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </div>
                  </motion.div>
                )}

                {/* Step 3: Destinations */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-8"
                  >
                    <div>
                      <Label className="flex items-center gap-2 mb-4">
                        <MapPin className="w-4 h-4" />
                        Select Districts (Choose one or more) *
                      </Label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {districts.map((district) => (
                          <label
                            key={district}
                            className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-all ${
                              watchedDistricts?.includes(district)
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <Checkbox
                              checked={watchedDistricts?.includes(district)}
                              onCheckedChange={() => handleDistrictToggle(district)}
                            />
                            <span className="font-body text-sm text-foreground">{district}</span>
                          </label>
                        ))}
                      </div>
                      {errors.districts && (
                        <p className="text-sm text-destructive mt-2">{errors.districts.message}</p>
                      )}
                    </div>

                    <div>
                      <Label className="flex items-center gap-2 mb-4">
                        <Heart className="w-4 h-4" />
                        Type of Holiday *
                      </Label>
                      <RadioGroup
                        value={watch("holidayType")}
                        onValueChange={(value) => setValue("holidayType", value as FormData["holidayType"])}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
                      >
                        {[
                          { value: "honeymoon", label: "Honeymoon" },
                          { value: "family", label: "Family" },
                          { value: "solo", label: "Solo" },
                          { value: "friends", label: "Friends" },
                          { value: "adventure", label: "Adventure" },
                          { value: "spiritual", label: "Spiritual" },
                          { value: "slow", label: "Slow Travel" }
                        ].map((option) => (
                          <label
                            key={option.value}
                            className={`flex items-center justify-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                              watch("holidayType") === option.value
                                ? 'border-primary bg-primary/5'
                                : 'border-border hover:border-primary/50'
                            }`}
                          >
                            <RadioGroupItem value={option.value} className="sr-only" />
                            <span className="font-body text-sm font-medium text-foreground">{option.label}</span>
                          </label>
                        ))}
                      </RadioGroup>
                    </div>
                  </motion.div>
                )}

                {/* Step 4: Additional Info */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: prefersReducedMotion ? 0 : -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div>
                      <Label htmlFor="notes" className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4" />
                        Additional Notes (Optional)
                      </Label>
                      <Textarea
                        id="notes"
                        placeholder="Tell us about any specific interests, dietary requirements, mobility considerations, or special requests..."
                        {...register("notes")}
                        rows={6}
                        className="resize-none"
                      />
                      {errors.notes && (
                        <p className="text-sm text-destructive mt-1">{errors.notes.message}</p>
                      )}
                    </div>

                    {/* Summary */}
                    <div className="p-4 bg-secondary/50 rounded-xl">
                      <h4 className="font-display text-sm font-semibold text-foreground mb-3">Summary</h4>
                      <div className="grid grid-cols-2 gap-2 font-body text-sm">
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="text-foreground capitalize">{watch("budget")}</span>
                        <span className="text-muted-foreground">Travelers:</span>
                        <span className="text-foreground">{watch("travelers")}</span>
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-foreground">{watch("duration")} days</span>
                        <span className="text-muted-foreground">Type:</span>
                        <span className="text-foreground capitalize">{watch("holidayType")}</span>
                        <span className="text-muted-foreground">Districts:</span>
                        <span className="text-foreground">{watchedDistricts?.join(", ") || "None selected"}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>

                {currentStep < 4 ? (
                  <Button type="button" onClick={nextStep} className="gap-2 bg-[#3c431e] text-white hover:bg-[#3c431e]/90">
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting} className="gap-2 bg-[#3c431e] text-white hover:bg-[#3c431e]/90">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Request Custom Itinerary
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
