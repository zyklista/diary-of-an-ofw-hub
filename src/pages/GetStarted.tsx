import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Zap, Clock, Users, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Complete Our Screening",
    description: "Fill out our comprehensive questionnaire so we can understand your business needs and goals.",
    icon: <CheckCircle className="h-8 w-8" />,
    time: "5-10 minutes"
  },
  {
    number: "02", 
    title: "Free Consultation Call",
    description: "If we're a good fit, we'll schedule a detailed consultation to discuss your project requirements.",
    icon: <Users className="h-8 w-8" />,
    time: "30-45 minutes"
  },
  {
    number: "03",
    title: "Custom Proposal",
    description: "Receive a tailored proposal with timeline, pricing, and detailed project specifications.",
    icon: <Zap className="h-8 w-8" />,
    time: "24-48 hours"
  },
  {
    number: "04",
    title: "Project Kickoff",
    description: "Once approved, we begin your project with regular updates and milestone deliveries.",
    icon: <Shield className="h-8 w-8" />,
    time: "Varies by project"
  }
];

const benefits = [
  "Professional consultation at no cost",
  "Customized solutions for your specific needs",
  "Transparent pricing with no hidden fees",
  "Regular project updates and communication",
  "Post-launch support and maintenance",
  "Opportunity for podcast interview feature"
];

const GetStarted = () => {
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
              Let's Get Started
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Your Journey to <span className="text-accent-foreground">Digital Success</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Transform your OFW business with our proven process. From consultation to launch, we're with you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A simple, transparent approach to building your digital presence. Just like a doctor's consultation, we diagnose before we prescribe.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <Card 
                key={index} 
                className="card-elegant hover:scale-105 transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl font-bold text-primary/20">{step.number}</div>
                    <Badge variant="secondary" className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span className="text-xs">{step.time}</span>
                    </Badge>
                  </div>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-white mb-4 animate-pulse-glow">
                    {step.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{step.title}</CardTitle>
                  <CardDescription className="text-base text-muted-foreground">
                    {step.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="text-gradient">Our Process</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We understand the unique challenges faced by Filipino overseas workers in Europe. Our approach is designed specifically for OFW entrepreneurs who want to build successful digital businesses.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-base">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <Card className="card-elegant p-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl text-gradient">Ready to Begin?</CardTitle>
                <CardDescription className="text-base">
                  Start your digital transformation journey today with our comprehensive screening process.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-primary/5 rounded-xl p-6 border border-primary/10">
                  <h4 className="font-semibold text-primary mb-2">What You'll Get:</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Detailed project assessment</li>
                    <li>• Custom solution recommendation</li>
                    <li>• Transparent pricing proposal</li>
                    <li>• Timeline and milestone planning</li>
                  </ul>
                </div>
                <Button className="btn-hero w-full" size="lg" asChild>
                  <a href="/#screening">
                    Start Your Screening
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <p className="text-xs text-center text-muted-foreground">
                  No obligation • Free consultation • Quick response
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gradient">Frequently Asked Questions</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-lg">How long does the screening process take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">The screening form takes 5-10 minutes to complete. We review applications within 24 hours and respond with next steps.</p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-lg">Is the consultation really free?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Yes, absolutely! Our initial consultation is completely free with no obligations. We believe in understanding your needs before proposing any solutions.</p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant">
              <CardHeader>
                <CardTitle className="text-lg">What if I'm not sure what I need?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">That's perfectly fine! Our screening process is designed to help identify the best solutions for your specific situation. We'll guide you through the options during our consultation.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;