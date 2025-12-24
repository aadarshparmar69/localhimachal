import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Instagram, Facebook, Youtube, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
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
    name: "Temples",
    path: "/temples"
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
  return <footer className="bg-foreground text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Stories from the Mountains
            </h3>
            <p className="text-primary-foreground/70 mb-8 font-body">
              Get hidden gems, local insights, and travel stories delivered to your inbox. 
              No spam, just mountain magic.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary-foreground/40 font-body" />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Local Himachal Logo" 
                className="h-10 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-display text-xl font-semibold tracking-tight">
                  Local Himachal
                </span>
                <span className="text-xs text-primary-foreground/70 font-body">
                  Travel Like a Local
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 mb-6 font-body max-w-sm">
              Discover the real Himachal through the eyes of locals. 
              Hidden villages, sacred temples, ancient treks, and authentic homestays.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Explore</h4>
            <ul className="space-y-3">
              {footerLinks.explore.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Culture */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Culture</h4>
            <ul className="space-y-3">
              {footerLinks.culture.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Plan */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Plan Your Trip</h4>
            <ul className="space-y-3">
              {footerLinks.plan.map(link => <li key={link.path}>
                  <Link to={link.path} className="text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-wrap items-center justify-center gap-8 text-primary-foreground/70 font-body text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dharamshala, Himachal Pradesh, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>contact@localhimachal.in</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9015931203 </span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-primary-foreground/50 font-body text-sm">
          <p>© 2025 Local Himachal </p>
        </div>
      </div>
    </footer>;
};