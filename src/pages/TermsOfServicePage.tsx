import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { FileText, Scale, AlertTriangle, Shield, Users, Globe, Mail } from "lucide-react";

const TermsOfServicePage = () => {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: `By accessing and using Local Himachal's website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our services.

These terms apply to all visitors, users, and others who access or use our platform. We reserve the right to update or modify these terms at any time without prior notice. Your continued use of the service following any changes constitutes acceptance of those changes.`
    },
    {
      icon: Globe,
      title: "Use of Services",
      content: `Our platform provides travel information, itinerary planning assistance, and booking facilitation for destinations in Himachal Pradesh. You agree to use our services only for lawful purposes and in accordance with these terms.

You must not:
• Use our services for any unlawful or fraudulent purpose
• Attempt to gain unauthorized access to our systems or networks
• Interfere with or disrupt the integrity of our services
• Reproduce, duplicate, or exploit any part of our service without permission
• Submit false or misleading information through our forms or booking systems`
    },
    {
      icon: Users,
      title: "User Accounts & Submissions",
      content: `When you submit information through our itinerary request forms or other contact methods, you agree to provide accurate, current, and complete information. You are responsible for maintaining the confidentiality of any account credentials.

All content you submit, including travel preferences, contact information, and feedback, may be used by Local Himachal to provide and improve our services. We handle all personal data in accordance with our Privacy Policy.`
    },
    {
      icon: Shield,
      title: "Intellectual Property",
      content: `All content on this website, including text, graphics, logos, images, photographs, and software, is the property of Local Himachal or its content suppliers and is protected by intellectual property laws.

You may not reproduce, distribute, modify, or create derivative works from any content on our platform without our express written consent. Limited use for personal, non-commercial purposes is permitted with proper attribution.`
    },
    {
      icon: AlertTriangle,
      title: "Disclaimer of Warranties",
      content: `Our services are provided on an "as is" and "as available" basis. While we strive to provide accurate and up-to-date travel information, we make no warranties or representations about:

• The accuracy or completeness of information on our platform
• The availability or quality of third-party services (homestays, guides, transport)
• Weather conditions, road accessibility, or safety of travel destinations
• The suitability of any recommendations for your specific circumstances

Travel in mountainous regions involves inherent risks. You acknowledge that you travel at your own risk and are responsible for your own safety.`
    },
    {
      icon: Scale,
      title: "Limitation of Liability",
      content: `To the maximum extent permitted by law, Local Himachal shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:

• Your use or inability to use our services
• Any errors or inaccuracies in our content
• Actions of third-party service providers
• Natural events, accidents, or circumstances beyond our control
• Delays, cancellations, or changes to travel plans

Our total liability for any claim arising from these terms shall not exceed the amount you paid to us for the specific service in question.`
    }
  ];

  return (
    <>
      <SEOHead
        title="Terms of Service | Local Himachal"
        description="Read the Terms of Service for Local Himachal. Understand our policies, user agreements, and guidelines for using our travel planning services."
        keywords="terms of service, user agreement, legal terms, Local Himachal policies"
        url="/terms-of-service"
      />

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
                  <Scale className="w-4 h-4" />
                  <span className="text-sm font-medium">Legal Agreement</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
                  Terms of Service
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Please read these terms carefully before using our services. They outline your rights and responsibilities when using Local Himachal.
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  Last updated: January 12, 2026
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
              {sections.map((section, index) => (
                <ScrollReveal key={section.title} delay={index * 0.1}>
                  <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-start gap-4 sm:gap-6">
                      <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                        <section.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-4">
                          {section.title}
                        </h2>
                        <div className="text-muted-foreground font-body leading-relaxed whitespace-pre-line text-sm sm:text-base">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}

              {/* Contact Section */}
              <ScrollReveal delay={0.6}>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6 sm:p-8 text-center">
                  <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">
                    Questions About These Terms?
                  </h2>
                  <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
                    If you have any questions about these Terms of Service, please contact us.
                  </p>
                  <a
                    href="mailto:contact@localhimachal.in"
                    className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    contact@localhimachal.in
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default TermsOfServicePage;
