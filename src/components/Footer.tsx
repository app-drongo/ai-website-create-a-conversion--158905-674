// Footer Component
// Generated: 2025-09-04T09:12:38.821Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Shield,
  CreditCard,
  Building2,
  Users
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Banking Solutions",
      links: [
        { name: "Core Banking", href: "#features" },
        { name: "Payment Processing", href: "#features" },
        { name: "Digital Wallets", href: "#features" },
        { name: "Lending Platform", href: "#features" },
        { name: "Compliance Tools", href: "#features" },
        { name: "API Documentation", href: "/docs" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About CoreBank", href: "#about" },
        { name: "Security & Trust", href: "/security" },
        { name: "Careers", href: "/careers" },
        { name: "Press Center", href: "/press" },
        { name: "Partner Program", href: "/partners" },
        { name: "Contact Sales", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Developer Portal", href: "/developers" },
        { name: "Implementation Guide", href: "/implementation" },
        { name: "Webinars", href: "/webinars" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "System Status", href: "/status" }
      ]
    },
    {
      title: "Compliance",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "PCI DSS", href: "/pci-compliance" },
        { name: "SOC 2 Type II", href: "/soc2" },
        { name: "GDPR Compliance", href: "/gdpr" },
        { name: "Regulatory Info", href: "/regulatory" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/corebankconnect" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/company/corebank-connect" },
    { name: "GitHub", icon: Github, href: "https://github.com/corebank-connect" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Shield className="size-6 text-background" />
                </div>
                <span className="font-bold text-xl text-background">CoreBank Connect</span>
              </Link>
              <p className="text-background/80 text-sm leading-relaxed mb-6">
                Empowering financial institutions with cutting-edge banking-as-a-service solutions. 
                Trusted by over 500+ fintech companies and traditional banks worldwide.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">sales@corebankconnect.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">+1 (800) 555-BANK</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-accent flex-shrink-0" />
                <span className="text-background/80">Financial District, New York, NY</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm text-background">Industry Updates</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your business email"
                  className="flex-1 px-3 py-2 text-sm border border-primary/20 rounded-md bg-background/10 text-background placeholder:text-background/60 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                />
                <Button size="sm" className="px-3 bg-accent hover:bg-accent/90 text-secondary">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-background/70">
                Get fintech insights and product updates. Enterprise-focused content only.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm text-background">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-background/80 hover:text-accent transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-background/80">
              <span>© 2024 CoreBank Connect. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                <Shield className="size-3 text-accent" /> Bank-grade security
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-background/80 mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-primary/20 hover:bg-accent/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-background/80 group-hover:text-accent transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/certifications" className="text-xs text-background/70 hover:text-accent transition-colors">
              Certifications
            </Link>
            <Link href="/accessibility" className="text-xs text-background/70 hover:text-accent transition-colors">
              Accessibility
            </Link>
            <Link href="/cookie-policy" className="text-xs text-background/70 hover:text-accent transition-colors">
              Cookie Policy
            </Link>
            <Link href="/enterprise-support" className="text-xs text-background/70 hover:text-accent transition-colors">
              Enterprise Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}