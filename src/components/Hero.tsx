import { Button } from "@/components/ui/button";
import { Code2, Sparkles, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Alibaba Cloud Presents</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block text-foreground">Zpire 2026</span>
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mt-2">
              Vibe Coding Challenge
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience the future of software development with AI-powered coding. Build smarter, ship faster, and collaborate effortlessly using Alibaba Cloud's Tongyi Lingma.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-4">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">2026</div>
              <div className="text-sm text-muted-foreground">Year of AI Coding</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">∞</div>
              <div className="text-sm text-muted-foreground">Possibilities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent">24/7</div>
              <div className="text-sm text-muted-foreground">AI Assistance</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="hero" size="lg" className="text-lg group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-lg group">
              <Code2 className="w-5 h-5" />
              Learn More
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
