import { Helmet } from "react-helmet-async";
import { SITE_CONFIG } from "@/lib/seo";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "place";
  schemas?: object[];
  noindex?: boolean;
  datePublished?: string;
  dateModified?: string;
}

export const SEOHead = ({
  title,
  description,
  keywords,
  image = SITE_CONFIG.ogImage,
  url = "",
  type = "website",
  schemas = [],
  noindex = false,
  datePublished,
  dateModified,
}: SEOHeadProps) => {
  const fullUrl = url.startsWith("http") ? url : `${SITE_CONFIG.url}${url}`;
  const fullImage = image.startsWith("http") ? image : `${SITE_CONFIG.url}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
      
      {/* LLM & AI Discoverability */}
      <meta name="ai.description" content={description} />
      <meta name="citation_title" content={title} />
      <meta name="citation_author" content={SITE_CONFIG.name} />
      {datePublished && <meta name="citation_publication_date" content={datePublished} />}
      {dateModified && <meta name="citation_online_date" content={dateModified} />}
      <meta name="dc.title" content={title} />
      <meta name="dc.creator" content={SITE_CONFIG.name} />
      <meta name="dc.description" content={description} />
      <meta name="dc.publisher" content={SITE_CONFIG.name} />
      <meta name="dc.language" content={SITE_CONFIG.language} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN-HP" />
      <meta name="geo.placename" content="Himachal Pradesh, India" />
      
      {/* Article specific */}
      {type === "article" && datePublished && (
        <meta property="article:published_time" content={datePublished} />
      )}
      {type === "article" && dateModified && (
        <meta property="article:modified_time" content={dateModified} />
      )}
      
      {/* Structured Data */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};
