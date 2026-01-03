import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { DistrictPreviewSection } from "@/components/home/DistrictPreviewSection";
import { HiddenGemsSection } from "@/components/home/HiddenGemsSection";
import { TreksSection } from "@/components/home/TreksSection";
import { HomestaysSection } from "@/components/home/HomestaysSection";
import { CulturePreviewSection } from "@/components/home/CulturePreviewSection";
import { PlanTripSection } from "@/components/home/PlanTripSection";
import { AtmosphereSection } from "@/components/home/AtmosphereSection";
import { ClosingSection } from "@/components/home/ClosingSection";
import { SEOHead } from "@/components/SEOHead";
import { 
  PAGE_SEO, 
  SITE_CONFIG,
  getOrganizationSchema, 
  getWebsiteSchema, 
  getTravelAgencySchema,
  getFAQSchema 
} from "@/lib/seo";

const homeFaqs = [
  {
    question: "What is the best time to visit Himachal Pradesh?",
    answer: "The best time depends on your interests. March-June for pleasant weather, December-February for snow, June-October for trekking. Monsoon brings lush greenery but also landslides."
  },
  {
    question: "How can I reach Himachal Pradesh?",
    answer: "Himachal is accessible by air (Dharamshala, Kullu, Shimla airports), rail (Kalka-Shimla toy train), and well-connected highways from Delhi and Chandigarh."
  },
  {
    question: "What are the hidden gems of Himachal Pradesh?",
    answer: "Beyond popular spots, discover Shangarh meadows, Dodra-Kwar villages, Chitkul, Jibhi, Barot, Bir-Billing, and remote valleys of Spiti and Kinnaur."
  },
  {
    question: "Are homestays available in remote areas?",
    answer: "Yes, authentic homestays are available throughout Himachal, including remote villages, offering genuine cultural experiences and local cuisine."
  },
  {
    question: "Do I need permits for any areas in Himachal?",
    answer: "Inner Line Permits are required for certain areas near the Indo-Tibetan border, including parts of Spiti Valley, Kinnaur, and some areas in Lahaul."
  }
];

const Index = () => {
  const schemas = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getTravelAgencySchema(),
    getFAQSchema(homeFaqs)
  ];

  return (
    <>
      <SEOHead
        title={PAGE_SEO.home.title}
        description={PAGE_SEO.home.description}
        keywords={PAGE_SEO.home.keywords}
        url="/"
        image={SITE_CONFIG.ogImage}
        schemas={schemas}
      />
      
      <Navbar />
      
      <main>
        <HeroSection />
        <IntroSection />
        <DistrictPreviewSection />
        <HiddenGemsSection />
        <TreksSection />
        <HomestaysSection />
        <CulturePreviewSection />
        <PlanTripSection />
        <AtmosphereSection />
        <ClosingSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
