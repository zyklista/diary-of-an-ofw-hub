import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ScreeningForm from "@/components/ScreeningForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen pt-20">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div id="screening">
        <ScreeningForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
