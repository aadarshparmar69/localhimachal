import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Only load if we have a measurement ID
    if (!GA_MEASUREMENT_ID) {
      console.warn("Google Analytics: No measurement ID configured");
      return;
    }

    // Load Google Analytics script
    const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag"]`);
    
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      script.async = true;
      document.head.appendChild(script);

      // Initialize dataLayer and gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID, {
        send_page_view: false, // We'll handle this manually
      });
    }
  }, []);

  // Track page views on route change
  useEffect(() => {
    if (GA_MEASUREMENT_ID && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.search,
        page_location: window.location.href,
        page_title: document.title,
      });
    }
  }, [location]);

  return null;
};

// Event tracking helper
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>
) => {
  if (GA_MEASUREMENT_ID && window.gtag) {
    window.gtag("event", eventName, params);
  }
};

// Predefined events for common actions
export const analyticsEvents = {
  clickCTA: (ctaName: string, location: string) =>
    trackEvent("cta_click", { cta_name: ctaName, location }),
  
  viewDistrict: (districtName: string) =>
    trackEvent("view_district", { district: districtName }),
  
  viewTrek: (trekName: string, difficulty: string) =>
    trackEvent("view_trek", { trek: trekName, difficulty }),
  
  viewHiddenGem: (gemName: string, district: string) =>
    trackEvent("view_hidden_gem", { gem: gemName, district }),
  
  viewHomestay: (homestayName: string, location: string) =>
    trackEvent("view_homestay", { homestay: homestayName, location }),
  
  submitItinerary: (districts: string[], duration: string) =>
    trackEvent("submit_itinerary", { 
      districts: districts.join(","), 
      duration 
    }),
  
  clickExternalLink: (url: string, linkType: string) =>
    trackEvent("external_link_click", { url, type: linkType }),
  
  searchPerformed: (query: string, resultCount: number) =>
    trackEvent("search", { query, result_count: resultCount }),
};
