import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import ExplorePage from "./pages/ExplorePage";
import DistrictPage from "./pages/DistrictPage";
import TreksPage from "./pages/TreksPage";
import HomestaysPage from "./pages/HomestaysPage";
import CulturePage from "./pages/CulturePage";
import PlanPage from "./pages/PlanPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/district/:slug" element={<DistrictPage />} />
            <Route path="/treks" element={<TreksPage />} />
            <Route path="/homestays" element={<HomestaysPage />} />
            <Route path="/culture" element={<CulturePage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
