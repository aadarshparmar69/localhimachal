import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PlanHero } from "@/components/plan/PlanHero";
import { BestTimeToVisit } from "@/components/plan/BestTimeToVisit";
import { TripEssentials } from "@/components/plan/TripEssentials";
import { PackingGuide } from "@/components/plan/PackingGuide";
import { HowToReach } from "@/components/plan/HowToReach";
import { ResponsibleTravel } from "@/components/plan/ResponsibleTravel";
import { ItineraryForm } from "@/components/plan/ItineraryForm";
import { ContactSection } from "@/components/plan/ContactSection";

const PlanPage = () => {
  return (
    <>
      <Helmet>
        <title>Plan Your Himachal Trip - Complete Guide | Local Himachal</title>
        <meta name="description" content="Everything you need to plan your Himachal Pradesh trip. Best seasons, packing guide, how to reach, budget tips, and responsible travel advice for an authentic experience." />
        <meta name="keywords" content="plan Himachal trip, best time visit Himachal, Himachal travel guide, packing list, responsible travel, custom itinerary" />
      </Helmet>

      <Navbar />

      <main>
        <PlanHero />
        <ItineraryForm />
        <BestTimeToVisit />
        <TripEssentials />
        <PackingGuide />
        <HowToReach />
        <ResponsibleTravel />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default PlanPage;
