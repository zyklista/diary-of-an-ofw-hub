import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Diary of an <span className="text-accent-foreground">OFW</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Empowering Filipino overseas workers in Europe through stories, insights, and digital solutions
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Button className="btn-hero group">
            Get Interviewed
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 py-4 px-8 rounded-xl">
            <Play className="mr-2 h-5 w-5" />
            Watch Our Content
          </Button>
        </div>
        
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm opacity-70 mb-4">Trusted by OFWs across Europe</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">Interviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50K+</div>
              <div className="text-sm">Listeners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">Countries</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;