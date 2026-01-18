import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollRestoration from "./components/ScrollRestoration";
import CookieConsent from "./components/CookieConsent";
import NewsletterPopup from "./components/NewsletterPopup";
import { GoogleAnalytics } from "./components/GoogleAnalytics";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ErrorBoundary } from "./components/ErrorBoundary";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <GoogleAnalytics />
            <ScrollRestoration />
            <CookieConsent />
            <NewsletterPopup />
            <AnimatedRoutes />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  </ErrorBoundary>
);

export default App;
