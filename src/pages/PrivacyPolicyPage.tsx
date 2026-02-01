import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { ScrollReveal } from "@/components/animations/ScrollReveal";
import { Shield, Database, Cookie, Lock, Eye, UserCheck, Globe, Mail, Clock } from "lucide-react";
const PrivacyPolicyPage = () => {
  const sections = [{
    icon: Database,
    title: "Information We Collect",
    content: `We collect information you provide directly to us, including:

Personal Information:
• Full name, email address, and phone number
• Travel preferences and itinerary requirements
• Budget ranges and group sizes
• Special requests and accommodation preferences

Automatically Collected Information:
• Device and browser information
• IP address and approximate location
• Pages visited and time spent on our site
• Referring websites and search terms

We only collect information necessary to provide our travel planning services and improve your experience.`
  }, {
    icon: Eye,
    title: "How We Use Your Information",
    content: `We use the information we collect to:

• Process and respond to your itinerary requests
• Provide personalized travel recommendations
• Communicate with you about your inquiries
• Send you relevant travel updates and offers (with consent)
• Improve our website and services
• Analyze usage patterns to enhance user experience
• Comply with legal obligations

We will never sell your personal information to third parties for marketing purposes.`
  }, {
    icon: UserCheck,
    title: "Information Sharing",
    content: `We may share your information with:

Service Partners:
• Homestay owners and accommodation providers
• Local guides and tour operators
• Transportation services
Only when necessary to fulfill your travel requests and with your implicit consent.

Service Providers:
• Analytics platforms (Google Analytics)
• Email service providers
• Hosting and cloud services
These partners are bound by confidentiality agreements.

Legal Requirements:
We may disclose information if required by law, court order, or government regulation.`
  }, {
    icon: Cookie,
    title: "Cookies & Tracking",
    content: `We use cookies and similar technologies to:

• Remember your preferences
• Understand how you use our site
• Provide personalized content
• Measure the effectiveness of our marketing

Types of Cookies We Use:
• Essential Cookies: Required for site functionality
• Analytics Cookies: Help us understand site usage
• Marketing Cookies: Used for targeted advertising (with consent)

You can manage cookie preferences through your browser settings or our cookie consent banner. Disabling certain cookies may affect site functionality.`
  }, {
    icon: Lock,
    title: "Data Security",
    content: `We implement appropriate security measures to protect your information:

• Encrypted data transmission (SSL/TLS)
• Secure data storage with access controls
• Regular security audits and updates
• Limited employee access to personal data
• Row-level security on our databases

While we strive to protect your information, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to maintaining industry-standard protections.`
  }, {
    icon: Clock,
    title: "Data Retention",
    content: `We retain your personal information for as long as necessary to:

• Fulfill the purposes for which it was collected
• Provide our services to you
• Comply with legal obligations
• Resolve disputes and enforce agreements

Itinerary request data is typically retained for up to 3 years for service improvement and follow-up purposes. You may request deletion of your data at any time by contacting us.`
  }, {
    icon: Shield,
    title: "Your Rights",
    content: `You have the right to:

• Access: Request a copy of your personal data
• Correction: Update or correct inaccurate information
• Deletion: Request removal of your personal data
• Opt-out: Unsubscribe from marketing communications
• Portability: Receive your data in a portable format
• Restriction: Limit how we process your data

To exercise any of these rights, please contact us at contact@localhimachal.in. We will respond to your request within 30 days.`
  }, {
    icon: Globe,
    title: "International Data Transfers",
    content: `Our services are primarily operated from India. If you access our website from outside India, your information may be transferred to, stored, and processed in India where our servers are located.

By using our services, you consent to the transfer of your information to India. We ensure that appropriate safeguards are in place to protect your data in accordance with applicable data protection laws.`
  }];
  return <>
      <SEOHead title="Privacy Policy | Local Himachal" description="Learn how Local Himachal collects, uses, and protects your personal information. Read our comprehensive privacy policy for travel planning services." keywords="privacy policy, data protection, personal information, Local Himachal privacy" url="/privacy-policy" />

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-24 bg-gradient-to-b from-muted/50 to-background overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="max-w-3xl mx-auto text-center">
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-foreground mb-6">
                  Privacy Policy
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                  We are committed to protecting your privacy and being transparent about how we handle your personal information.
                </p>
                <p className="text-sm text-muted-foreground mt-6">
                  Last updated: January 12, 2026
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <ScrollReveal>
                <div className="bg-gradient-to-r from-primary/5 via-transparent to-primary/5 rounded-2xl border border-border p-6 sm:p-8">
                  <p className="text-muted-foreground font-body leading-relaxed text-sm sm:text-base">
                    At Local Himachal, we respect your privacy and are committed to protecting your personal data. 
                    This privacy policy explains how we collect, use, disclose, and safeguard your information when 
                    you visit our website and use our travel planning services. Please read this policy carefully 
                    to understand our practices regarding your personal data.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
              {sections.map((section, index) => <ScrollReveal key={section.title} delay={index * 0.08}>
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
                </ScrollReveal>)}

              {/* Contact Section */}
              <ScrollReveal delay={0.7}>
                <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20 p-6 sm:p-8 text-center">
                  <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h2 className="text-xl sm:text-2xl font-display font-semibold text-foreground mb-3">
                    Privacy Concerns?
                  </h2>
                  <p className="text-muted-foreground mb-4 max-w-lg mx-auto">
                    If you have any questions about this Privacy Policy or wish to exercise your data rights, please reach out to us.
                  </p>
                  <a href="mailto:contact@localhimachal.in" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
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
    </>;
};
export default PrivacyPolicyPage;