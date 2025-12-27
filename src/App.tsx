import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollRestoration from "./components/ScrollRestoration";
import Index from "./pages/Index";
import ExplorePage from "./pages/ExplorePage";
import DistrictPage from "./pages/DistrictPage";
import TreksPage from "./pages/TreksPage";
import TrekDetailPage from "./pages/TrekDetailPage";
import HomestaysPage from "./pages/HomestaysPage";
import CulturePage from "./pages/CulturePage";
import PlanPage from "./pages/PlanPage";
import HiddenPlacePage from "./pages/HiddenPlacePage";
import HiddenGemsPage from "./pages/HiddenGemsPage";
import HiddenGemDetailPage from "./pages/HiddenGemDetailPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollRestoration />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/district/:slug" element={<DistrictPage />} />
            <Route path="/district/:districtSlug/:placeSlug" element={<HiddenPlacePage />} />
            <Route path="/hidden-gems" element={<HiddenGemsPage />} />
            <Route path="/hidden-gems/:slug" element={<HiddenGemDetailPage />} />
            <Route path="/treks" element={<TreksPage />} />
            <Route path="/trek/:slug" element={<TrekDetailPage />} />
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
