import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/ofw-digital-hero.jpg";

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
        
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="relative max-w-4xl mx-auto">
            <img 
              src={heroImage} 
              alt="Modern digital illustration of Filipino overseas worker using technology for business growth"
              className="rounded-2xl shadow-2xl w-full h-64 md:h-80 object-cover animate-float"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;