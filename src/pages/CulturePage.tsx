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
import { SEOHead } from "@/components/SEOHead";
import { PAGE_SEO, SITE_CONFIG, getBreadcrumbSchema, getArticleSchema } from "@/lib/seo";

const CulturePage = () => {
  const breadcrumbs = [
    { name: "Home", url: SITE_CONFIG.url },
    { name: "Culture", url: `${SITE_CONFIG.url}/culture` }
  ];

  const articleSchema = getArticleSchema({
    title: PAGE_SEO.culture.title,
    description: PAGE_SEO.culture.description,
    image: "https://images.unsplash.com/photo-1623850893288-37a04fa06d3e?auto=format&fit=crop&w=1200&q=80",
    datePublished: "2024-01-01",
    dateModified: new Date().toISOString().split('T')[0],
    url: `${SITE_CONFIG.url}/culture`
  });

  return (
    <>
      <SEOHead
        title={PAGE_SEO.culture.title}
        description={PAGE_SEO.culture.description}
        keywords={PAGE_SEO.culture.keywords}
        url="/culture"
        type="article"
        schemas={[getBreadcrumbSchema(breadcrumbs), articleSchema]}
      />

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
