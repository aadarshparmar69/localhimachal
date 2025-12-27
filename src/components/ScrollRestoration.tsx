import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollRestoration = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there's a hash, scroll to that element with offset for header
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
        return;
      }
    }

    // For new page navigations (not back/forward), scroll to top
    // The browser handles back/forward scroll restoration automatically
    if (window.history.scrollRestoration) {
      window.history.scrollRestoration = "manual";
    }

    // Only scroll to top for new navigations, not popstate (back/forward)
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    };

    // Use a small timeout to let the page render first
    const timeoutId = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timeoutId);
  }, [pathname, hash]);

  return null;
};

export default ScrollRestoration;
