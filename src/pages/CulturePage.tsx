import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CultureHero } from "@/components/culture/CultureHero";
import { CultureIntro } from "@/components/culture/CultureIntro";
import { RegionalCulture } from "@/components/culture/RegionalCulture";
import { FestivalsScroll } from "@/components/culture/FestivalsScroll";
import { FoodCulture } from "@/components/culture/FoodCulture";
import { ArchitectureSection } from "@/components/culture/ArchitectureSection";
import { LanguageSection } from "@/components/culture/LanguageSection";
import { ClothingSection } from "@/components/culture/ClothingSection";
import { SpiritualSection } from "@/components/culture/SpiritualSection";
import { ModernLifeSection } from "@/components/culture/ModernLifeSection";
import { ResponsibleTravelSection } from "@/components/culture/ResponsibleTravelSection";
import { CultureClosing } from "@/components/culture/CultureClosing";

const CulturePage = () => {
  return (
    <>
      <Helmet>
        <title>Culture That Lives, Not Performs - Himachal Pradesh | Local Himachal</title>
        <meta name="description" content="Explore the living cultural heritage of Himachal Pradesh. Festivals, folk traditions, Kath-Khuni architecture, mountain cuisine, and spiritual practices of Dev Bhumi." />
        <meta name="keywords" content="Himachal culture, Kullu Dussehra, Nati dance, Kath-Khuni architecture, Himachali food, Dev Bhumi traditions, Spiti Buddhist culture" />
      </Helmet>

      <Navbar />

      <main>
        <CultureHero />
        <CultureIntro />
        <RegionalCulture />
        <FestivalsScroll />
        <FoodCulture />
        <ArchitectureSection />
        <LanguageSection />
        <ClothingSection />
        <SpiritualSection />
        <ModernLifeSection />
        <ResponsibleTravelSection />
        <CultureClosing />
      </main>

      <Footer />
    </>
  );
};

export default CulturePage;
