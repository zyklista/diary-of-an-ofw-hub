import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/ofw-professional-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Large Image with Overlapping Title */}
        <div className="relative max-w-6xl mx-auto animate-fade-in-up">
          <img 
            src={heroImage} 
            alt="Professional podcast and video production tools for Filipino content creators"
            className="rounded-3xl shadow-elegant w-full h-96 md:h-[500px] lg:h-[600px] object-cover animate-float"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl"></div>
          
          {/* Overlapping Title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-primary leading-tight text-center animate-scale-bounce">
              Diary of an <span className="text-primary">OFW</span>
            </h1>
          </div>
        </div>
        
        {/* Tagline and Buttons Below Image */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Empowering Filipino overseas workers in Europe through stories, insights, and digital solutions
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
    </section>
  );
};

export default HeroSection;