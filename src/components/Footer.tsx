import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
const footerLinks = {
  explore: [{
    name: "Districts",
    path: "/explore"
  }, {
    name: "Treks",
    path: "/treks"
  }, {
    name: "Homestays",
    path: "/homestays"
  }, {
    name: "Hidden Gems",
    path: "/hidden-gems"
  }],
  culture: [{
    name: "Festivals",
    path: "/culture#festivals"
  }, {
    name: "Folk Music",
    path: "/culture#music"
  }, {
    name: "Architecture",
    path: "/culture#architecture"
  }, {
    name: "Local Food",
    path: "/culture#food"
  }],
  plan: [{
    name: "Best Time to Visit",
    path: "/plan#seasons"
  }, {
    name: "Packing Guide",
    path: "/plan#packing"
  }, {
    name: "Budget Tips",
    path: "/plan#budget"
  }, {
    name: "Responsible Travel",
    path: "/plan#responsible"
  }]
};
export const Footer = () => {
  return <footer className="text-primary-foreground bg-[#321a01]">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10 bg-[#321a01]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#321a01]">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold mb-3 sm:mb-4">
              Stories from the Mountains
            </h3>
            <p className="text-primary-foreground/70 mb-6 sm:mb-8 font-body text-sm sm:text-base px-4">
              Get hidden gems, local insights, and travel stories delivered to your inbox.
              No spam, just mountain magic.
            </p>
            <div className="flex flex-col gap-3 max-w-md mx-auto px-4 sm:px-0">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 font-body min-h-[48px]" />
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 min-h-[48px]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-[#321a01]">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand - Full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 mb-4 lg:mb-0">
            <Link to="/" className="inline-flex items-center gap-3 mb-4 sm:mb-6">
              <div className="flex flex-col">
                <span className="font-display text-lg sm:text-xl font-semibold tracking-tight">
                  Local Himachal
                </span>
                <span className="text-[10px] sm:text-xs text-primary-foreground/70 font-body">
                  Travel Like a Local
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-4 sm:mb-6 font-body text-sm sm:text-base max-w-sm">
              Discover the real Himachal through the eyes of locals.
              Hidden villages, sacred temples, ancient treks, and authentic homestays.
            </p>
            <div className="flex items-center gap-3">
              {[{
              icon: Instagram,
              href: "https://www.instagram.com/localhimachal.in?igsh=N2JsOW5ybmRkZjg5",
              label: "Instagram"
            }, {
              icon: Linkedin,
              href: "https://www.linkedin.com/company/localhimachal/",
              label: "LinkedIn"
            }, {
              icon: Twitter,
              href: "https://x.com/LocalHimachal",
              label: "X (Twitter)"
            }].map(({
              icon: Icon,
              href,
              label
            }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center" aria-label={label}>
                  <Icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Explore</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.explore.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base py-1 inline-block min-h-[44px] flex items-center">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Culture */}
          <div>
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Culture</h4>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.culture.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base py-1 inline-block min-h-[44px] flex items-center">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Plan - Hidden on smallest screens, shown on sm+ */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-base sm:text-lg font-semibold mb-4 sm:mb-6">Plan Your Trip</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:space-y-3">
              {footerLinks.plan.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-sm sm:text-base py-1 inline-block min-h-[44px] flex items-center">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 sm:gap-8 text-primary-foreground/70 font-body text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 flex-shrink-0" />
              <span>Dharamshala, Himachal Pradesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span>contact@localhimachal.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 flex-shrink-0" />
              <span>+91 9015931203</span>
            </div>
          </div>
        </div>

        {/* Legal Links & Copyright */}
        <div className="mt-6 sm:mt-8 text-center safe-padding-bottom">
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4">
            <Link 
              to="/terms-of-service" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-xs sm:text-sm"
            >
              Terms of Service
            </Link>
            <span className="text-primary-foreground/30">|</span>
            <Link 
              to="/privacy-policy" 
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body text-xs sm:text-sm"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="text-primary-foreground/50 font-body text-xs sm:text-sm">
            © 2025 Local Himachal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};