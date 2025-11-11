import { CheckCircle2 } from "lucide-react";

const benefits = [
  {
    title: "Code Smarter, Not Harder",
    description: "Generate clean, functional code in seconds from natural language descriptions. Focus on solving problems, not syntax.",
  },
  {
    title: "Ship Faster",
    description: "Accelerate development with intelligent autocomplete, instant debugging, and seamless cloud deployment.",
  },
  {
    title: "Learn Continuously",
    description: "Get clear explanations of unfamiliar code and best practices. Tongyi Lingma helps you grow as a developer.",
  },
  {
    title: "Enterprise Ready",
    description: "Built with security, compliance, and enterprise customization in mind. Scale from prototype to production seamlessly.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Join the Challenge?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your development workflow with cutting-edge AI assistance and cloud-native tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 border border-primary/20 text-center space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            Supported Languages & Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["Python", "JavaScript", "TypeScript", "Java", "Go", "React", "Vue", "Node.js", "Spring", "Django"].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 rounded-full bg-background/60 backdrop-blur-sm border border-border text-foreground font-medium hover:border-primary/50 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
