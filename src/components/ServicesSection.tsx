import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Smartphone, RefreshCw, BarChart3, Mic, Video } from "lucide-react";

const services = [
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Website Development",
    description: "Custom websites that represent your business professionally and attract your target audience.",
    features: ["Responsive Design", "SEO Optimized", "Modern UI/UX"]
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: "Mobile App Development", 
    description: "Native and cross-platform mobile applications to reach your customers on any device.",
    features: ["iOS & Android", "User-Friendly", "Scalable"]
  },
  {
    icon: <RefreshCw className="h-8 w-8" />,
    title: "Website & App Renovation",
    description: "Modernize your existing digital presence with updated design and improved functionality.",
    features: ["Performance Boost", "Modern Design", "Enhanced Security"]
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Digital Administration",
    description: "Complete management of your digital assets, from content updates to performance monitoring.",
    features: ["Content Management", "Analytics", "Maintenance"]
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Advertisement & Marketing",
    description: "Strategic digital marketing campaigns to grow your brand and reach your target market.",
    features: ["Social Media", "PPC Campaigns", "Brand Strategy"]
  },
  {
    icon: <Mic className="h-8 w-8" />,
    title: "Podcast Interviews",
    description: "Share your OFW story and insights on our platform to inspire and connect with the community.",
    features: ["Professional Production", "Wide Reach", "Community Impact"]
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Just like a doctor doesn't prescribe immediately, we carefully assess your business needs 
            before recommending the right digital solutions for your success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="card-elegant hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white mb-4 animate-pulse-glow">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Our Approach</h3>
            <p className="text-lg text-muted-foreground">
              "If you come to a doctor, they will not prescribe immediately - and so is your business. 
              We'll see what we can do for you through our comprehensive screening process."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;