import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Lock, LogOut, Users, Calendar, MapPin, Wallet, 
  Heart, Phone, Mail, Clock, ChevronDown, ChevronUp,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";

interface ItineraryRequest {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  budget: string;
  travelers: string;
  duration: string;
  districts: string[];
  holiday_type: string;
  notes: string | null;
  created_at: string;
}

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [requests, setRequests] = useState<ItineraryRequest[]>([]);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [storedPassword, setStoredPassword] = useState("");

  // Check session storage for existing auth
  useEffect(() => {
    const savedAuth = sessionStorage.getItem("admin_authenticated");
    const savedPassword = sessionStorage.getItem("admin_password");
    if (savedAuth === "true" && savedPassword) {
      setIsAuthenticated(true);
      setStoredPassword(savedPassword);
    }
  }, []);

  // Fetch requests when authenticated
  useEffect(() => {
    if (isAuthenticated && storedPassword) {
      fetchRequests();
    }
  }, [isAuthenticated, storedPassword]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke('verify-admin', {
        body: { password }
      });

      if (error) throw error;

      if (data.valid) {
        setIsAuthenticated(true);
        setStoredPassword(password);
        sessionStorage.setItem("admin_authenticated", "true");
        sessionStorage.setItem("admin_password", password);
        toast({ title: "Welcome back!", description: "Successfully logged in." });
      } else {
        toast({ 
          title: "Invalid password", 
          description: "Please try again.",
          variant: "destructive" 
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      toast({ 
        title: "Login failed", 
        description: "Please try again later.",
        variant: "destructive" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setStoredPassword("");
    setPassword("");
    setRequests([]);
    sessionStorage.removeItem("admin_authenticated");
    sessionStorage.removeItem("admin_password");
  };

  const fetchRequests = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('get-itinerary-requests', {
        body: { password: storedPassword }
      });

      if (error) throw error;

      if (data.requests) {
        setRequests(data.requests);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      toast({ 
        title: "Failed to fetch requests", 
        description: "Please try again.",
        variant: "destructive" 
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getBudgetColor = (budget: string) => {
    switch (budget) {
      case "budget": return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "mid-range": return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "premium": return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getHolidayTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      honeymoon: "Honeymoon",
      family: "Family",
      solo: "Solo",
      friends: "Friends",
      adventure: "Adventure",
      spiritual: "Spiritual",
      slow: "Slow Travel"
    };
    return labels[type] || type;
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card className="shadow-xl">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-primary" />
              </div>
              <CardTitle className="font-display text-2xl">Admin Dashboard</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">
                Enter your password to access itinerary requests
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="h-12 mt-2"
                    autoFocus
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full h-12" 
                  disabled={isLoading || !password}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Access Dashboard"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Dashboard
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="font-display text-xl font-semibold text-foreground">
              Local Himachal Admin
            </h1>
            <p className="text-sm text-muted-foreground">
              {requests.length} itinerary request{requests.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={fetchRequests}
              disabled={isLoading}
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Refresh"}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="text-muted-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {isLoading && requests.length === 0 ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : requests.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <Users className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-display text-lg font-medium text-foreground mb-2">
                No requests yet
              </h3>
              <p className="text-muted-foreground">
                Itinerary requests will appear here when submitted.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            <AnimatePresence>
              {requests.map((request, index) => (
                <motion.div
                  key={request.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden">
                    <button
                      onClick={() => setExpandedId(expandedId === request.id ? null : request.id)}
                      className="w-full text-left"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-3 flex-wrap">
                              <CardTitle className="font-display text-lg truncate">
                                {request.full_name}
                              </CardTitle>
                              <Badge className={getBudgetColor(request.budget)}>
                                {request.budget}
                              </Badge>
                              <Badge variant="outline">
                                {getHolidayTypeLabel(request.holiday_type)}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground flex-wrap">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {format(new Date(request.created_at), "MMM d, yyyy 'at' h:mm a")}
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="w-3.5 h-3.5" />
                                {request.travelers} travelers
                              </span>
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3.5 h-3.5" />
                                {request.duration} days
                              </span>
                            </div>
                          </div>
                          {expandedId === request.id ? (
                            <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                          )}
                        </div>
                      </CardHeader>
                    </button>

                    <AnimatePresence>
                      {expandedId === request.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <CardContent className="pt-0 border-t">
                            <div className="grid md:grid-cols-2 gap-6 pt-4">
                              {/* Contact Info */}
                              <div className="space-y-3">
                                <h4 className="font-medium text-foreground flex items-center gap-2">
                                  <Mail className="w-4 h-4" />
                                  Contact Information
                                </h4>
                                <div className="space-y-2 text-sm">
                                  <p>
                                    <span className="text-muted-foreground">Email:</span>{" "}
                                    <a href={`mailto:${request.email}`} className="text-primary hover:underline">
                                      {request.email}
                                    </a>
                                  </p>
                                  <p>
                                    <span className="text-muted-foreground">Phone:</span>{" "}
                                    <a href={`tel:${request.phone}`} className="text-primary hover:underline">
                                      {request.phone}
                                    </a>
                                  </p>
                                </div>
                              </div>

                              {/* Trip Details */}
                              <div className="space-y-3">
                                <h4 className="font-medium text-foreground flex items-center gap-2">
                                  <Wallet className="w-4 h-4" />
                                  Trip Details
                                </h4>
                                <div className="space-y-2 text-sm">
                                  <p>
                                    <span className="text-muted-foreground">Budget:</span>{" "}
                                    <span className="capitalize">{request.budget}</span>
                                  </p>
                                  <p>
                                    <span className="text-muted-foreground">Travelers:</span>{" "}
                                    {request.travelers}
                                  </p>
                                  <p>
                                    <span className="text-muted-foreground">Duration:</span>{" "}
                                    {request.duration} days
                                  </p>
                                </div>
                              </div>

                              {/* Districts */}
                              <div className="space-y-3">
                                <h4 className="font-medium text-foreground flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  Selected Districts
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {request.districts.map((district) => (
                                    <Badge key={district} variant="secondary">
                                      {district}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Holiday Type */}
                              <div className="space-y-3">
                                <h4 className="font-medium text-foreground flex items-center gap-2">
                                  <Heart className="w-4 h-4" />
                                  Holiday Type
                                </h4>
                                <p className="text-sm">
                                  {getHolidayTypeLabel(request.holiday_type)}
                                </p>
                              </div>

                              {/* Notes */}
                              {request.notes && (
                                <div className="md:col-span-2 space-y-3">
                                  <h4 className="font-medium text-foreground">Additional Notes</h4>
                                  <p className="text-sm text-muted-foreground bg-muted/50 p-4 rounded-lg">
                                    {request.notes}
                                  </p>
                                </div>
                              )}
                            </div>
                          </CardContent>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPage;
