import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import aiIcon from "@/assets/ai-icon.png";
import cloudIcon from "@/assets/cloud-icon.png";
import collabIcon from "@/assets/collab-icon.png";

const features = [
  {
    icon: aiIcon,
    title: "AI-Powered Development",
    description: "Leverage Tongyi Lingma's advanced AI to generate code from natural language, autocomplete with context awareness, and debug in real-time.",
    highlights: ["Natural language to code", "Intelligent autocomplete", "Real-time debugging"]
  },
  {
    icon: cloudIcon,
    title: "Cloud-Native Integration",
    description: "Seamlessly integrate with Alibaba Cloud services. Deploy directly from your IDE with zero configuration required.",
    highlights: ["One-click deployment", "Native cloud services", "Scalable infrastructure"]
  },
  {
    icon: collabIcon,
    title: "Collaborative Coding",
    description: "Work together with AI as your pair programmer. Get instant code explanations, suggestions, and optimizations.",
    highlights: ["Pair programming with AI", "Code explanations", "Team collaboration"]
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What is Vibe Coding?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Vibe coding is an AI-assisted development approach that transforms how you create software. 
            It's fast, intuitive, and collaborative—where you and AI work together like experienced pair programmers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
            >
              <CardHeader className="space-y-4">
                <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={feature.icon} 
                    alt={feature.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <CardTitle className="text-2xl text-center">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-center text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                <ul className="space-y-2">
                  {feature.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
