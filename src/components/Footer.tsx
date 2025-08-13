import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Youtube, Mic, Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Diary of an OFW</h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Connecting and empowering Filipino overseas workers across Europe through 
              stories, insights, and digital solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" asChild>
                <a href="https://www.facebook.com/diaryofanofw" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" asChild>
                <a href="https://instagram.com/diary_of_an_ofw" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" asChild>
                <a href="https://youtube.com/%40diaryofanofw%3Fsi%3DkQW85veqiwAgd7cn" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:scale-110 transition-all duration-300" asChild>
                <a href="https://open.spotify.com/show/5oJDj8gVSPa87Mds6Oe9ty" target="_blank" rel="noopener noreferrer" aria-label="Spotify">
                  <Mic className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="/services" className="animated-underline hover:text-white transition-colors">Services</a></li>
              <li><a href="/about" className="animated-underline hover:text-white transition-colors">About Us</a></li>
              <li><a href="/get-started" className="animated-underline hover:text-white transition-colors">Get Started</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">How can we help you</h4>
            <ul className="space-y-3 text-secondary-foreground/80">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:ask@diaryofanofw.com" className="text-sm hover:text-white transition-colors">
                  ask@diaryofanofw.com
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">Jihlava, Czechia 586 01</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <a href="tel:+420774900384" className="text-sm hover:text-white transition-colors">
                  +420 774 900 384
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-secondary-foreground/80 mb-4 text-sm">
              Get the latest OFW stories and business tips delivered to your inbox.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="btn-hero">Subscribe</Button>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-secondary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Diary of an OFW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;