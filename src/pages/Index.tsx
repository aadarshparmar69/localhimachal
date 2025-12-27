import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { ExperiencesSection } from "@/components/home/ExperiencesSection";
import { CultureQuoteSection } from "@/components/home/CultureQuoteSection";
import { GallerySection } from "@/components/home/GallerySection";
import { TreksMotionSection } from "@/components/home/TreksMotionSection";
import { DistrictGridSection } from "@/components/home/DistrictGridSection";
import { ResponsibleTravelSection } from "@/components/home/ResponsibleTravelSection";
import { ClosingSection } from "@/components/home/ClosingSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Local Himachal - Where Mountains Hold Stories</title>
        <meta name="description" content="A journey into the heart of Himachal Pradesh. Discover hidden villages, ancient temples, breathtaking treks, and authentic homestays through the eyes of locals." />
        <meta name="keywords" content="Himachal Pradesh travel, hidden places Himachal, treks Himachal, homestays, local culture, Spiti, Kinnaur, Kullu, Manali" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <IntroSection />
        <ExperiencesSection />
        <CultureQuoteSection />
        <GallerySection />
        <TreksMotionSection />
        <DistrictGridSection />
        <ResponsibleTravelSection />
        <ClosingSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
