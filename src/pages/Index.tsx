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
        <DistrictPreviewSection />
        <HiddenGemsSection />
        <TreksSection />
        <HomestaysSection />
        <CulturePreviewSection />
        <PlanTripSection />
        <ClosingSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
