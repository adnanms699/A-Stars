import { Button } from "@/components/ui/button";
import { Activity, Sparkles, ArrowRight } from "lucide-react";
import wellnessHero from "@/assets/wellness-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${wellnessHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-wellness-mental/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-wellness-psychological/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-wellness-physical/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">A-Stars 2026 - Powered by AI</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Your University</span>
            <span className="block bg-gradient-wellness bg-clip-text text-transparent mt-2">
              Wellness Tracker
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Like a Fitbit for your academic journey. Track your mental, psychological, and physical wellness. 
            Discover opportunities. Grow holistically.
          </p>

          {/* Wellness Rings Preview */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full border-4 border-wellness-mental flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-wellness-mental">M</span>
              </div>
              <div className="text-sm font-medium text-foreground">Mental</div>
              <div className="text-xs text-muted-foreground">Challenge Your Brain</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full border-4 border-wellness-psychological flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-wellness-psychological">P</span>
              </div>
              <div className="text-sm font-medium text-foreground">Psychological</div>
              <div className="text-xs text-muted-foreground">Balance Your Mind</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full border-4 border-wellness-physical flex items-center justify-center group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-wellness-physical">P</span>
              </div>
              <div className="text-sm font-medium text-foreground">Physical</div>
              <div className="text-xs text-muted-foreground">Move Your Body</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="text-lg group">
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg group">
              <Activity className="w-5 h-5" />
              See How It Works
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 animate-bounce">
            <div className="mx-auto w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
