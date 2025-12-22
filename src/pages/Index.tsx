import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { MapSection } from "@/components/home/MapSection";
import { TreksSection } from "@/components/home/TreksSection";
import { HomestaysSection } from "@/components/home/HomestaysSection";
import { CultureSection } from "@/components/home/CultureSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Local Himachal - Discover the Real Himachal | Travel Like a Local</title>
        <meta name="description" content="Explore hidden villages, ancient temples, breathtaking treks, and authentic homestays in Himachal Pradesh. Experience the mountains through the eyes of locals." />
        <meta name="keywords" content="Himachal Pradesh travel, hidden places Himachal, treks Himachal, homestays, local culture, Spiti, Kinnaur, Kullu, Manali" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <MapSection />
        <TreksSection />
        <HomestaysSection />
        <CultureSection />
        <TestimonialsSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
