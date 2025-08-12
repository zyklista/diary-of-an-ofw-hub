import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, Smartphone, RefreshCw, BarChart3, Mic, Video, ArrowRight, Check } from "lucide-react";

const services = [
  {
    icon: <Globe className="h-12 w-12" />,
    title: "Website Development",
    description: "Custom websites that represent your business professionally and attract your target audience in Europe.",
    features: ["Responsive Design", "SEO Optimized", "Modern UI/UX", "Multi-language Support"],
    price: "From €1,500",
    popular: false
  },
  {
    icon: <Smartphone className="h-12 w-12" />,
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile applications to reach your customers on any device.",
    features: ["iOS & Android", "User-Friendly", "Scalable", "App Store Optimization"],
    price: "From €3,000",
    popular: true
  },
  {
    icon: <RefreshCw className="h-12 w-12" />,
    title: "Website & App Renovation",
    description: "Modernize your existing digital presence with updated design and improved functionality.",
    features: ["Performance Boost", "Modern Design", "Enhanced Security", "Mobile Optimization"],
    price: "From €800",
    popular: false
  },
  {
    icon: <BarChart3 className="h-12 w-12" />,
    title: "Digital Administration",
    description: "Complete management of your digital assets, from content updates to performance monitoring.",
    features: ["Content Management", "Analytics", "Maintenance", "Regular Updates"],
    price: "From €300/month",
    popular: false
  },
  {
    icon: <Video className="h-12 w-12" />,
    title: "Advertisement & Marketing",
    description: "Strategic digital marketing campaigns to grow your brand and reach your target market in Europe.",
    features: ["Social Media", "PPC Campaigns", "Brand Strategy", "ROI Tracking"],
    price: "From €500/month",
    popular: false
  },
  {
    icon: <Mic className="h-12 w-12" />,
    title: "Podcast Interviews",
    description: "Share your OFW story and insights on our platform to inspire and connect with the community.",
    features: ["Professional Production", "Wide Reach", "Community Impact", "Content Distribution"],
    price: "Free",
    popular: false
  }
];

const Services = () => {
  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-accent-foreground">Services</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Comprehensive digital solutions tailored for Filipino overseas workers and entrepreneurs in Europe
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="text-gradient">Digital Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Just like a doctor's prescription, we provide customized solutions after understanding your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`card-elegant hover:scale-105 transition-all duration-500 animate-fade-in-up relative ${
                  service.popular ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {service.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-4 mx-auto animate-pulse-glow">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground text-base">
                    {service.description}
                  </CardDescription>
                  <div className="text-2xl font-bold text-primary mt-4">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="btn-hero w-full group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's start with our screening process to understand your needs and create the perfect solution for your business.
            </p>
            <Button className="btn-hero" size="lg" asChild>
              <a href="/#screening">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;