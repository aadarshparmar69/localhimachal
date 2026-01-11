import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "@/pages/Index";
import ExplorePage from "@/pages/ExplorePage";
import DistrictPage from "@/pages/DistrictPage";
import TreksPage from "@/pages/TreksPage";
import TrekDetailPage from "@/pages/TrekDetailPage";
import HomestaysPage from "@/pages/HomestaysPage";
import CulturePage from "@/pages/CulturePage";
import PlanPage from "@/pages/PlanPage";
import HiddenPlacePage from "@/pages/HiddenPlacePage";
import HiddenGemsPage from "@/pages/HiddenGemsPage";
import HiddenGemDetailPage from "@/pages/HiddenGemDetailPage";
import SearchPage from "@/pages/SearchPage";
import AdminPage from "@/pages/AdminPage";
import NotFound from "@/pages/NotFound";

const pageTransition = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={pageTransition}
    initial="initial"
    animate="animate"
    exit="exit"
    className="min-h-screen"
  >
    {children}
  </motion.div>
);

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedPage><Index /></AnimatedPage>} />
        <Route path="/explore" element={<AnimatedPage><ExplorePage /></AnimatedPage>} />
        <Route path="/search" element={<AnimatedPage><SearchPage /></AnimatedPage>} />
        <Route path="/district/:slug" element={<AnimatedPage><DistrictPage /></AnimatedPage>} />
        <Route path="/district/:districtSlug/:placeSlug" element={<AnimatedPage><HiddenPlacePage /></AnimatedPage>} />
        <Route path="/hidden-gems" element={<AnimatedPage><HiddenGemsPage /></AnimatedPage>} />
        <Route path="/hidden-gems/:slug" element={<AnimatedPage><HiddenGemDetailPage /></AnimatedPage>} />
        <Route path="/treks" element={<AnimatedPage><TreksPage /></AnimatedPage>} />
        <Route path="/trek/:slug" element={<AnimatedPage><TrekDetailPage /></AnimatedPage>} />
        <Route path="/homestays" element={<AnimatedPage><HomestaysPage /></AnimatedPage>} />
        <Route path="/culture" element={<AnimatedPage><CulturePage /></AnimatedPage>} />
        <Route path="/plan" element={<AnimatedPage><PlanPage /></AnimatedPage>} />
        <Route path="/admin" element={<AnimatedPage><AdminPage /></AnimatedPage>} />
        <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
