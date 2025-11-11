import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-wellness p-1">
          <div className="bg-background rounded-3xl p-12 md:p-16 text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Smartphone className="w-4 h-4" />
                Coming Soon - Early Access Available
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Ready to Transform Your University Experience?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join the waitlist for Zpire and be among the first students to experience holistic wellness tracking. 
                Your best university self awaits.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 py-6">
              <div className="p-4 rounded-xl bg-muted/30">
                <div className="text-2xl font-bold text-primary mb-1">AI-Powered</div>
                <div className="text-sm text-muted-foreground">Smart opportunity discovery</div>
              </div>
              <div className="p-4 rounded-xl bg-muted/30">
                <div className="text-2xl font-bold text-secondary mb-1">3 Rings</div>
                <div className="text-sm text-muted-foreground">Complete wellness tracking</div>
              </div>
              <div className="p-4 rounded-xl bg-muted/30">
                <div className="text-2xl font-bold text-accent mb-1">24/7</div>
                <div className="text-sm text-muted-foreground">Personalized support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-lg group">
                Join the Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg">
                Learn More
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                🎓 Built for students, by students • 🔒 Your data stays private • 🆓 Free for university students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
