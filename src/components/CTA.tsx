import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-accent to-secondary p-1">
          <div className="bg-background rounded-3xl p-12 md:p-16 text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Ready to Vibe Code?
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Join thousands of developers already building with AI assistance. 
                Start your journey with Alibaba Cloud's Tongyi Lingma today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button variant="hero" size="lg" className="text-lg group">
                Start Coding Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg group">
                View Documentation
                <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
                Powered by Alibaba Cloud • Tongyi Lingma AI Assistant
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
