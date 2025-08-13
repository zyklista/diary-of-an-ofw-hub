import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/ofw-professional-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Large Image with Overlaid Content */}
        <div className="relative max-w-7xl mx-auto animate-fade-in-up">
          <img 
            src={heroImage} 
            alt="Professional podcast and video production tools for Filipino content creators"
            className="rounded-3xl shadow-elegant w-full h-[500px] md:h-[700px] lg:h-[800px] object-cover animate-float"
          />
          
          {/* Decorative overlay patterns */}
          <div className="absolute inset-0 rounded-3xl">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-primary/40 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute top-1/3 right-20 w-12 h-12 bg-accent/20 rounded-full animate-bounce"></div>
          </div>
          
          {/* Overlaid Title, Tagline and Buttons */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight mb-6 animate-scale-bounce drop-shadow-2xl">
              Diary of an <span className="text-primary">OFW</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white drop-shadow-lg">
              <span className="text-primary font-semibold">Empowering</span> Filipino overseas workers in Europe through stories, insights, and <span className="text-primary font-semibold">our</span> digital solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button className="btn-hero group" asChild>
                <a href="#screening">
                  Get Interviewed
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button className="btn-hero group" asChild>
                <a href="https://youtube.com/%40diaryofanofw%3Fsi%3DkQW85veqiwAgd7cn" target="_blank" rel="noopener noreferrer">
                  Watch Our Content
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;