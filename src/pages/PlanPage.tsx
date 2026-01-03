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
import { SEOHead } from "@/components/SEOHead";
import { PAGE_SEO, SITE_CONFIG, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo";

const planFaqs = [
  {
    question: "What is the best time to visit Himachal Pradesh?",
    answer: "March to June offers pleasant weather for sightseeing. December to February is ideal for snow experiences. June to October is best for trekking. Monsoon (July-August) brings lush greenery but also landslides."
  },
  {
    question: "How many days are enough for a Himachal trip?",
    answer: "A minimum of 5-7 days is recommended for a single region. For multiple districts like Kullu-Manali and Spiti, plan for 10-14 days. Add 2-3 buffer days for weather and road conditions."
  },
  {
    question: "Do I need special permits in Himachal Pradesh?",
    answer: "Inner Line Permits are required for areas near the Indo-Tibetan border, including parts of Spiti, Kinnaur, and Lahaul. These can be obtained online or at district headquarters."
  },
  {
    question: "What should I pack for Himachal Pradesh?",
    answer: "Layer your clothing regardless of season. Essentials include warm jacket, rain gear, comfortable walking shoes, sunscreen, sunglasses, medications, and cash (ATMs are scarce in remote areas)."
  },
  {
    question: "Is solo travel safe in Himachal Pradesh?",
    answer: "Himachal is generally safe for solo travelers. However, inform someone of your itinerary, avoid isolated areas after dark, and be cautious during monsoon season due to landslides."
  }
];

const PlanPage = () => {
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Plan Your Trip", url: `${SITE_CONFIG.url}/plan` }
  ];

  return (
    <>
      <SEOHead
        title={PAGE_SEO.plan.title}
        description={PAGE_SEO.plan.description}
        keywords={PAGE_SEO.plan.keywords}
        url="/plan"
        schemas={[getBreadcrumbSchema(breadcrumbs), getFAQSchema(planFaqs)]}
      />

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
