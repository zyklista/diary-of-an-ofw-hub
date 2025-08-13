import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const ScreeningForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    profession: "",
    businessType: "",
    hasExistingWebsite: "",
    budget: "",
    timeline: "",
    goals: "",
    challenges: "",
    services: [] as string[]
  });
  
  const { toast } = useToast();

  const handleServiceChange = (service: string, checked: boolean) => {
    if (checked) {
      setFormData(prev => ({ ...prev, services: [...prev.services, service] }));
    } else {
      setFormData(prev => ({ ...prev, services: prev.services.filter(s => s !== service) }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application Submitted!",
      description: "We'll review your information and get back to you within 24 hours.",
    });
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's understand where you at right now
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete our screening questionnaire so we can understand your needs and determine 
            how we can best help your business grow.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Let's understand where you at right now</CardTitle>
              <CardDescription>
                Just like a doctor's consultation, we need to understand your situation first
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country">Country of Residence *</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, country: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="germany">Germany</SelectItem>
                        <SelectItem value="netherlands">Netherlands</SelectItem>
                        <SelectItem value="italy">Italy</SelectItem>
                        <SelectItem value="spain">Spain</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="other">Other EU Country</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profession">Your Profession/Work *</Label>
                    <Input
                      id="profession"
                      value={formData.profession}
                      onChange={(e) => setFormData(prev => ({ ...prev, profession: e.target.value }))}
                      placeholder="e.g., Nurse, Engineer, Entrepreneur"
                      required
                    />
                  </div>
                </div>

                {/* Business Information */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gradient">Business Information</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="businessType">Type of Business/Service *</Label>
                    <Textarea
                      id="businessType"
                      value={formData.businessType}
                      onChange={(e) => setFormData(prev => ({ ...prev, businessType: e.target.value }))}
                      placeholder="Describe your business or the service you want to promote"
                      required
                    />
                  </div>

                  <div className="space-y-4">
                    <Label>Do you currently have a website or mobile app?</Label>
                    <RadioGroup 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, hasExistingWebsite: value }))}
                      className="flex space-x-6"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="yes" />
                        <Label htmlFor="yes">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="no" />
                        <Label htmlFor="no">No</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="planning" id="planning" />
                        <Label htmlFor="planning">Planning to create</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                {/* Services Needed */}
                <div className="space-y-4">
                  <Label>What services are you interested in? (Select all that apply)</Label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Website Development",
                      "Mobile App Development", 
                      "Website/App Renovation",
                      "Digital Administration",
                      "Advertisement & Marketing",
                      "Podcast Interview"
                    ].map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                        />
                        <Label htmlFor={service} className="text-sm font-normal">
                          {service}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="budget">Estimated Budget Range</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="500-1000">€500 - €1,000</SelectItem>
                        <SelectItem value="1000-3000">€1,000 - €3,000</SelectItem>
                        <SelectItem value="3000-5000">€3,000 - €5,000</SelectItem>
                        <SelectItem value="5000+">€5,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="When do you need this?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="72hrs">Within 72 hours</SelectItem>
                        <SelectItem value="1week">Within 1 week</SelectItem>
                        <SelectItem value="1month">Within 1 month</SelectItem>
                        <SelectItem value="3months">Within 3 months</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">What are your main business goals?</Label>
                  <Textarea
                    id="goals"
                    value={formData.goals}
                    onChange={(e) => setFormData(prev => ({ ...prev, goals: e.target.value }))}
                    placeholder="e.g., Reach more Filipino clients, establish online presence, increase sales..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenges">What challenges are you currently facing?</Label>
                  <Textarea
                    id="challenges"
                    value={formData.challenges}
                    onChange={(e) => setFormData(prev => ({ ...prev, challenges: e.target.value }))}
                    placeholder="e.g., No online presence, outdated website, difficulty reaching target market..."
                  />
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold mb-2">What happens next?</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• We'll review your application within 72 hours</li>
                        <li>• If we're a good fit, we'll schedule a free consultation call</li>
                        <li>• We'll create a customized proposal for your needs</li>
                        <li>• You might also be invited for a podcast interview!</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <Button type="submit" className="btn-hero w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Submit My Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ScreeningForm;