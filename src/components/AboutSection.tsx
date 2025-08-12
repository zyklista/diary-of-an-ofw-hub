import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Target, Globe } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Empowering <span className="text-gradient">OFW Stories</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Diary of an OFW is more than just a podcast - we're a community dedicated to 
              sharing the real experiences, challenges, and successes of Filipino overseas 
              workers across Europe.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Through interviews and storytelling, we connect OFWs, share valuable insights, 
              and provide digital solutions to help our community members build and grow 
              their businesses abroad.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Stories Shared</div>
              </div>
              <div className="text-center p-4">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">EU Countries</div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Card className="card-elegant text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">
                  Building connections among Filipino workers across Europe
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant text-center p-6 mt-8">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Heart className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Stories</h3>
                <p className="text-sm text-muted-foreground">
                  Authentic experiences that inspire and educate
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant text-center p-6">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Growth</h3>
                <p className="text-sm text-muted-foreground">
                  Digital solutions to help businesses thrive
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-elegant text-center p-6 mt-8">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="font-semibold mb-2">Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Creating positive change in the OFW community
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;