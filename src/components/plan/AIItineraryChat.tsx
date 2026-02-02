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
      .join("\n\n");

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
    const margin = 18;
    const contentWidth = pageWidth - margin * 2;

    // Premium Cover Page
    // Full page gradient background simulation
    pdf.setFillColor(24, 54, 44); // Deep forest green
    pdf.rect(0, 0, pageWidth, pageHeight, "F");
    
    // Decorative top border
    pdf.setFillColor(194, 154, 76); // Gold
    pdf.rect(0, 0, pageWidth, 3, "F");
    
    // Main title area
    pdf.setTextColor(194, 154, 76); // Gold
    pdf.setFontSize(14);
    pdf.setFont("helvetica", "normal");
    pdf.text("— YOUR JOURNEY AWAITS —", pageWidth / 2, 60, { align: "center" });
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(42);
    pdf.setFont("helvetica", "bold");
    pdf.text("LOCAL", pageWidth / 2, 85, { align: "center" });
    pdf.text("HIMACHAL", pageWidth / 2, 100, { align: "center" });
    
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(194, 154, 76);
    pdf.text("Personalized Travel Itinerary", pageWidth / 2, 115, { align: "center" });
    
    // Decorative divider
    pdf.setDrawColor(194, 154, 76);
    pdf.setLineWidth(0.8);
    pdf.line(pageWidth / 2 - 40, 125, pageWidth / 2 + 40, 125);
    
    // Trip details card
    const cardY = 145;
    const cardHeight = 70;
    pdf.setFillColor(34, 64, 54); // Slightly lighter green
    pdf.roundedRect(margin + 10, cardY, contentWidth - 20, cardHeight, 4, 4, "F");
    
    pdf.setTextColor(194, 154, 76);
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.text("PREPARED FOR", margin + 20, cardY + 15);
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(18);
    pdf.text(tripContext.fullName, margin + 20, cardY + 28);
    
    pdf.setDrawColor(194, 154, 76);
    pdf.setLineWidth(0.3);
    pdf.line(margin + 20, cardY + 35, pageWidth - margin - 30, cardY + 35);
    
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    const detailsY = cardY + 48;
    pdf.text(`Duration: ${tripContext.duration} Days`, margin + 20, detailsY);
    pdf.text(`Style: ${tripContext.holidayType}`, margin + 75, detailsY);
    pdf.text(`Budget: ${tripContext.budget}`, margin + 130, detailsY);
    pdf.text(`Districts: ${tripContext.districts.join(", ")}`, margin + 20, detailsY + 12);
    
    // Quote
    pdf.setTextColor(194, 154, 76);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "italic");
    pdf.text('"Explore Himachal like a local —', pageWidth / 2, pageHeight - 60, { align: "center" });
    pdf.text('slow, soulful, and responsible."', pageWidth / 2, pageHeight - 50, { align: "center" });
    
    // Footer on cover
    pdf.setFillColor(194, 154, 76);
    pdf.rect(0, pageHeight - 25, pageWidth, 25, "F");
    pdf.setTextColor(24, 54, 44);
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.text("localhimachal.lovable.app", pageWidth / 2, pageHeight - 12, { align: "center" });
    pdf.setFontSize(8);
    pdf.setFont("helvetica", "normal");
    pdf.text(`Generated on ${new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}`, pageWidth / 2, pageHeight - 6, { align: "center" });
    
    // Start content pages
    pdf.addPage();
    
    // Content page header
    const addPageHeader = () => {
      pdf.setFillColor(24, 54, 44);
      pdf.rect(0, 0, pageWidth, 22, "F");
      pdf.setFillColor(194, 154, 76);
      pdf.rect(0, 22, pageWidth, 1.5, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFontSize(12);
      pdf.setFont("helvetica", "bold");
      pdf.text("LOCAL HIMACHAL", margin, 14);
      pdf.setTextColor(194, 154, 76);
      pdf.setFontSize(9);
      pdf.setFont("helvetica", "normal");
      pdf.text("Travel Itinerary", pageWidth - margin, 14, { align: "right" });
    };
    
    // Content page footer
    const addPageFooter = (pageNum: number) => {
      pdf.setFillColor(245, 243, 240);
      pdf.rect(0, pageHeight - 15, pageWidth, 15, "F");
      pdf.setDrawColor(194, 154, 76);
      pdf.setLineWidth(0.5);
      pdf.line(0, pageHeight - 15, pageWidth, pageHeight - 15);
      pdf.setTextColor(100, 100, 100);
      pdf.setFontSize(8);
      pdf.text(`Page ${pageNum}`, pageWidth / 2, pageHeight - 6, { align: "center" });
      pdf.text("localhimachal.lovable.app", pageWidth - margin, pageHeight - 6, { align: "right" });
    };
    
    addPageHeader();
    let yPos = 35;
    let currentPage = 1;
    
    // Process content with improved styling
    const lines = itineraryContent.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      // Check for page break
      if (yPos > pageHeight - 25) {
        addPageFooter(currentPage);
        pdf.addPage();
        currentPage++;
        addPageHeader();
        yPos = 35;
      }
      
      // Style different content types
      if (line.match(/^DAY \d+/i) || line.match(/^DAY \d+ —/i)) {
        // Day headers - make them prominent
        yPos += 6;
        pdf.setFillColor(24, 54, 44);
        pdf.roundedRect(margin - 2, yPos - 5, contentWidth + 4, 10, 2, 2, "F");
        pdf.setTextColor(255, 255, 255);
        pdf.setFontSize(12);
        pdf.setFont("helvetica", "bold");
        pdf.text(line, margin + 2, yPos + 2);
        yPos += 12;
      } else if (line.match(/^(Route|Stay|Hidden Gem|Local Flavours|Explore|Insider Tips|TRAVELER|IMPORTANT|Weather|Altitude|Permits|Packing)/i)) {
        // Section headers
        yPos += 3;
        pdf.setTextColor(194, 154, 76);
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "bold");
        pdf.text(line, margin, yPos);
        yPos += 6;
      } else if (line.match(/^[═─•]/)) {
        // Decorative lines - skip or add subtle divider
        if (line.includes('═')) {
          pdf.setDrawColor(194, 154, 76);
          pdf.setLineWidth(0.3);
          pdf.line(margin, yPos, pageWidth - margin, yPos);
          yPos += 4;
        }
      } else if (line.length > 0) {
        // Regular content
        pdf.setTextColor(60, 60, 60);
        pdf.setFontSize(10);
        pdf.setFont("helvetica", "normal");
        
        const wrappedLines = pdf.splitTextToSize(line, contentWidth);
        for (const wrappedLine of wrappedLines) {
          if (yPos > pageHeight - 25) {
            addPageFooter(currentPage);
            pdf.addPage();
            currentPage++;
            addPageHeader();
            yPos = 35;
          }
          pdf.text(wrappedLine, margin, yPos);
          yPos += 5;
        }
      } else {
        yPos += 2; // Empty line spacing
      }
    }
    
    // Add final footer
    addPageFooter(currentPage);
    
    // Back cover page
    pdf.addPage();
    pdf.setFillColor(24, 54, 44);
    pdf.rect(0, 0, pageWidth, pageHeight, "F");
    
    pdf.setTextColor(194, 154, 76);
    pdf.setFontSize(24);
    pdf.setFont("helvetica", "bold");
    pdf.text("Thank You", pageWidth / 2, pageHeight / 2 - 30, { align: "center" });
    
    pdf.setTextColor(255, 255, 255);
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text("for choosing Local Himachal", pageWidth / 2, pageHeight / 2 - 15, { align: "center" });
    pdf.text("as your travel companion.", pageWidth / 2, pageHeight / 2 - 3, { align: "center" });
    
    pdf.setDrawColor(194, 154, 76);
    pdf.setLineWidth(0.5);
    pdf.line(pageWidth / 2 - 30, pageHeight / 2 + 10, pageWidth / 2 + 30, pageHeight / 2 + 10);
    
    pdf.setTextColor(200, 200, 200);
    pdf.setFontSize(10);
    pdf.text("Questions about your itinerary?", pageWidth / 2, pageHeight / 2 + 25, { align: "center" });
    pdf.text("Reach us at localhimachal.lovable.app", pageWidth / 2, pageHeight / 2 + 35, { align: "center" });
    
    pdf.setFillColor(194, 154, 76);
    pdf.rect(0, pageHeight - 20, pageWidth, 20, "F");
    pdf.setTextColor(24, 54, 44);
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "bold");
    pdf.text("LOCAL HIMACHAL", pageWidth / 2, pageHeight - 8, { align: "center" });

    pdf.save(`${tripContext.fullName.replace(/\s+/g, "-")}-himachal-itinerary.pdf`);

    toast({
      title: "Itinerary Downloaded",
      description: "Your premium travel guide has been saved.",
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
