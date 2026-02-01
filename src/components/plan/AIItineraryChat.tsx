import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Loader2, Download, RotateCcw, Sparkles, User, Mountain, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { ScrollArea } from "@/components/ui/scroll-area";
import jsPDF from "jspdf";

interface TripContext {
  fullName: string;
  email: string;
  phone: string;
  budget: string;
  travelers: string;
  duration: string;
  districts: string[];
  holidayType: string;
  notes?: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIItineraryChatProps {
  tripContext: TripContext;
  onReset: () => void;
}

export const AIItineraryChat = ({ tripContext, onReset }: AIItineraryChatProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-generate itinerary on mount
  useEffect(() => {
    if (!hasStarted) {
      generateInitialItinerary();
    }
  }, []);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateInitialItinerary = async () => {
    setHasStarted(true);
    setIsLoading(true);

    const initialMessage = "Please create a detailed travel itinerary based on my trip preferences.";
    setMessages([{ role: "user", content: initialMessage }]);

    try {
      const { data, error } = await supabase.functions.invoke("local-himachal-ai", {
        body: {
          messages: [{ role: "user", content: initialMessage }],
          tripContext,
        },
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      console.error("Error generating itinerary:", error);
      toast({
        title: "Generation Failed",
        description: "Unable to generate itinerary. Please try again.",
        variant: "destructive",
      });
      setMessages([]);
      setHasStarted(false);
    } finally {
      setIsLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("local-himachal-ai", {
        body: {
          messages: [...messages, { role: "user", content: userMessage }],
          tripContext,
        },
      });

      if (error) throw error;

      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.response }]);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Message Failed",
        description: "Unable to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const downloadPDF = () => {
    const itineraryContent = messages
      .filter((m) => m.role === "assistant")
      .map((m) => m.content)
      .join("\n\n---\n\n");

    if (!itineraryContent) {
      toast({
        title: "No Itinerary",
        description: "Generate an itinerary first before downloading.",
        variant: "destructive",
      });
      return;
    }

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;

    // Header with brand colors
    pdf.setFillColor(34, 82, 65); // Deep forest green
    pdf.rect(0, 0, pageWidth, 40, "F");

    // Brand title
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.text("LOCAL HIMACHAL", pageWidth / 2, 18, { align: "center" });

    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text("Custom Travel Itinerary", pageWidth / 2, 28, { align: "center" });

    // Decorative line
    pdf.setDrawColor(200, 162, 84); // Gold accent
    pdf.setLineWidth(0.5);
    pdf.line(margin, 35, pageWidth - margin, 35);

    // Trip details box
    let yPos = 50;
    pdf.setTextColor(34, 82, 65);
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.text(`Traveler: ${tripContext.fullName}`, margin, yPos);
    yPos += 6;
    pdf.setFont("helvetica", "normal");
    pdf.text(`Duration: ${tripContext.duration} days  |  Style: ${tripContext.holidayType}  |  Budget: ${tripContext.budget}`, margin, yPos);
    yPos += 6;
    pdf.text(`Districts: ${tripContext.districts.join(", ")}`, margin, yPos);
    yPos += 6;
    pdf.text(`Generated: ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`, margin, yPos);

    // Divider
    yPos += 8;
    pdf.setDrawColor(200, 162, 84);
    pdf.line(margin, yPos, pageWidth - margin, yPos);
    yPos += 10;

    // Main content
    pdf.setTextColor(51, 51, 51);
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");

    const lines = pdf.splitTextToSize(itineraryContent, contentWidth);

    for (const line of lines) {
      if (yPos > pageHeight - 30) {
        pdf.addPage();
        yPos = 20;
        
        // Add subtle header on new pages
        pdf.setFillColor(34, 82, 65);
        pdf.rect(0, 0, pageWidth, 15, "F");
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(10);
        pdf.text("LOCAL HIMACHAL - Travel Itinerary", pageWidth / 2, 10, { align: "center" });
        yPos = 25;
        pdf.setTextColor(51, 51, 51);
        pdf.setFontSize(10);
      }

      // Style DAY headers
      if (line.match(/^DAY \d+/i)) {
        yPos += 4;
        pdf.setFont("helvetica", "bold");
        pdf.setTextColor(34, 82, 65);
        pdf.text(line, margin, yPos);
        pdf.setFont("helvetica", "normal");
        pdf.setTextColor(51, 51, 51);
      } else {
        pdf.text(line, margin, yPos);
      }
      yPos += 5;
    }

    // Footer
    const footerY = pageHeight - 15;
    pdf.setFillColor(34, 82, 65);
    pdf.rect(0, footerY - 5, pageWidth, 20, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(9);
    pdf.text("Explore Himachal like a local — slow, soulful, and responsible.", pageWidth / 2, footerY + 3, { align: "center" });
    pdf.setFontSize(8);
    pdf.text("localhimachal.lovable.app", pageWidth / 2, footerY + 8, { align: "center" });

    pdf.save(`${tripContext.fullName.replace(/\s+/g, "-")}-himachal-itinerary.pdf`);

    toast({
      title: "PDF Downloaded",
      description: "Your branded itinerary has been saved.",
    });
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              <span className="font-body text-sm font-medium">Local Himachal Travel Expert</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
              Your Personalized Itinerary
            </h2>
            <p className="font-body text-muted-foreground">
              For {tripContext.fullName} • {tripContext.duration} days • {tripContext.holidayType} trip
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-card rounded-2xl md:rounded-3xl shadow-card border border-border overflow-hidden">
            {/* Messages Area */}
            <ScrollArea className="h-[500px] md:h-[600px]" ref={scrollRef}>
              <div className="p-4 md:p-6 space-y-4">
                {!hasStarted ? (
                  <div className="flex items-center justify-center h-full py-20">
                    <div className="text-center">
                      <Mountain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Loading your travel assistant...</p>
                    </div>
                  </div>
                ) : (
                  <AnimatePresence mode="popLayout">
                    {messages.map((message, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.role === "assistant" && (
                          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Mountain className="w-4 h-4 text-primary" />
                          </div>
                        )}
                        <div
                          className={`max-w-[85%] md:max-w-[75%] rounded-2xl px-4 py-3 ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-secondary/50"
                          }`}
                        >
                          <p className="font-body text-sm whitespace-pre-wrap leading-relaxed">
                            {message.content}
                          </p>
                        </div>
                        {message.role === "user" && (
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                            <User className="w-4 h-4 text-primary-foreground" />
                          </div>
                        )}
                      </motion.div>
                    ))}
                    {isLoading && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex gap-3 justify-start"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Mountain className="w-4 h-4 text-primary" />
                        </div>
                        <div className="bg-secondary/50 rounded-2xl px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin text-primary" />
                            <span className="font-body text-sm text-muted-foreground">
                              Crafting your itinerary...
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t border-border p-4 md:p-6 bg-card">
              <div className="flex gap-3">
                <Textarea
                  ref={textareaRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask to modify days, add treks, change pace, or request local tips..."
                  className="min-h-[48px] max-h-[120px] resize-none"
                  disabled={isLoading || !hasStarted}
                />
                <Button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading || !hasStarted}
                  size="icon"
                  className="h-12 w-12 bg-primary hover:bg-primary/90"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={downloadPDF}
                  disabled={messages.length < 2}
                  className="gap-2"
                >
                  <FileText className="w-4 h-4" />
                  Download PDF
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onReset}
                  className="gap-2 text-muted-foreground"
                >
                  <RotateCcw className="w-4 h-4" />
                  Start Over
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Prompts */}
          {messages.length >= 2 && !isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6"
            >
              <p className="font-body text-xs text-muted-foreground mb-3 text-center">
                Quick modifications
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {[
                  "Add more local food spots",
                  "Make it more budget-friendly",
                  "Include a short trek",
                  "Add offbeat villages",
                  "Suggest local homestays",
                ].map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => {
                      setInput(prompt);
                      textareaRef.current?.focus();
                    }}
                    className="px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary text-sm font-body text-foreground transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
