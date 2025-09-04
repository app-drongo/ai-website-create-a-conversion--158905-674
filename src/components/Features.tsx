// Features Component
// Generated: 2025-09-04T09:12:38.821Z
// Template: features-c001
// Context: BaaS Platform
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Zap, 
  Shield, 
  CreditCard, 
  Globe, 
  BarChart3, 
  Settings,
  Code2,
  Headphones,
  Lock
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Zap,
      title: "Instant Account Creation",
      description: "Deploy virtual accounts and payment processing in real-time with our lightning-fast APIs.",
      badge: "Speed"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Multi-layered security with AES-256 encryption, fraud detection, and regulatory compliance.",
      badge: "Security"
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Accept payments, issue cards, and manage transactions with comprehensive payment rails.",
      badge: "Payments"
    },
    {
      icon: Globe,
      title: "Multi-Currency Support",
      description: "Process transactions in 150+ currencies with real-time exchange rates and settlement.",
      badge: "Global"
    },
    {
      icon: BarChart3,
      title: "Financial Analytics",
      description: "Real-time transaction monitoring, risk assessment, and comprehensive financial reporting.",
      badge: "Analytics"
    },
    {
      icon: Settings,
      title: "Flexible Configuration",
      description: "Customize banking products, set limits, and configure workflows to match your business needs.",
      badge: "Customization"
    },
    {
      icon: Code2,
      title: "Developer-First APIs",
      description: "RESTful APIs, webhooks, SDKs, and sandbox environment for seamless fintech integration.",
      badge: "Developer"
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "24/7 technical support from banking and fintech experts to ensure smooth operations.",
      badge: "Support"
    },
    {
      icon: Lock,
      title: "Regulatory Compliance",
      description: "Built-in KYC/AML, PCI compliance, and regulatory reporting across multiple jurisdictions.",
      badge: "Compliance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Banking Infrastructure
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Complete Financial Infrastructure
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Built for Scale
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to launch and scale financial products. From account management 
            to payment processing, we provide the banking backbone for your fintech innovation.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to build the future of finance?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Schedule API Demo
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Explore Documentation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}