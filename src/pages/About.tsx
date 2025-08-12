import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Target, Globe, ArrowRight, PlayCircle, Mic } from "lucide-react";

const stats = [
  { number: "500+", label: "OFWs Interviewed", icon: <Mic className="h-6 w-6" /> },
  { number: "50+", label: "Success Stories", icon: <Heart className="h-6 w-6" /> },
  { number: "15", label: "EU Countries", icon: <Globe className="h-6 w-6" /> },
  { number: "100+", label: "Businesses Helped", icon: <Target className="h-6 w-6" /> }
];

const values = [
  {
    icon: <Users className="h-8 w-8" />,
    title: "Community First",
    description: "Building authentic connections among Filipino workers across Europe through shared experiences and mutual support."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Authentic Stories",
    description: "Sharing real, unfiltered experiences that inspire, educate, and create meaningful impact in the OFW community."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Digital Empowerment",
    description: "Providing cutting-edge digital solutions to help OFW businesses thrive and compete in the European market."
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Global Impact",
    description: "Creating positive change that extends from Europe back to the Philippines, supporting families and communities."
  }
];

const About = () => {
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
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              About <span className="text-accent-foreground">Diary of an OFW</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              More than just a podcast - we're a movement empowering Filipino overseas workers through stories, connections, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We started Diary of an OFW to bridge the gap between Filipino overseas workers and the digital opportunities available in Europe. Every interview, every story, and every service we provide is designed to uplift our community.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Through authentic storytelling and professional digital services, we help OFWs build successful businesses, share their experiences, and create lasting connections across Europe.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-base">Authentic OFW stories that inspire and educate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-base">Professional digital solutions for business growth</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-base">Community building across European countries</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {stats.map((stat, index) => (
                <Card key={index} className="card-elegant text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do in serving the OFW community across Europe.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="card-elegant p-8 hover:scale-105 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="pt-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-6 animate-pulse-glow">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Quote Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100">
              <blockquote className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
                "Every OFW has a story worth telling. Every business has potential worth unlocking. We're here to make both happen."
              </blockquote>
              <div className="text-primary font-semibold text-lg">
                - The Diary of an OFW Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Share Your Story?</h2>
            <p className="text-xl mb-8 opacity-90">
              Whether you want to be interviewed on our podcast or need digital solutions for your business, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" size="lg" asChild>
                <a href="/#screening">
                  Get Interviewed
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href="https://youtube.com/%40diaryofanofw%3Fsi%3DkQW85veqiwAgd7cn" target="_blank" rel="noopener noreferrer">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Watch Our Content
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;