import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import mentalIcon from "@/assets/mental-icon.png";
import psychIcon from "@/assets/psych-icon.png";
import physicalIcon from "@/assets/physical-icon.png";

const features = [
  {
    icon: mentalIcon,
    title: "Mental Ring",
    color: "wellness-mental",
    description: "Track your intellectual growth and cognitive challenges. Are you learning new things? Engaging in meaningful coursework? Pushing your boundaries?",
    metrics: ["Course engagement", "Workshop attendance", "Skill development", "Academic projects"]
  },
  {
    icon: psychIcon,
    title: "Psychological Ring",
    color: "wellness-psychological",
    description: "Monitor your emotional wellness and stress levels. Find balance between study, social life, and self-care. Stay in the healthy zone.",
    metrics: ["Stress management", "Social connections", "Mindfulness activities", "Support resources"]
  },
  {
    icon: physicalIcon,
    title: "Physical Ring",
    color: "wellness-physical",
    description: "Maintain an active, healthy, and well-managed lifestyle. Track movement, sleep, physical activities, and how you manage your time. Balance productivity with wellbeing.",
    metrics: ["Time management", "Activity levels", "Sleep patterns", "Sports & fitness"]
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Close Your Wellness Rings
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Just like fitness trackers monitor your physical activity, A-Stars tracks your holistic university wellness 
            across three essential dimensions of student life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
            >
              {/* Colored accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-${feature.color}`} />
              
              <CardHeader className="space-y-4 pt-6">
                <div className={`w-20 h-20 mx-auto rounded-2xl bg-${feature.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
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
                <div className="pt-4 border-t border-border/50">
                  <p className="text-xs font-semibold text-muted-foreground mb-3 uppercase tracking-wide">Tracked Metrics</p>
                  <div className="space-y-2">
                    {feature.metrics.map((metric, idx) => (
                      <div key={idx} className={`flex items-center gap-2 text-sm text-foreground`}>
                        <div className={`w-1.5 h-1.5 rounded-full bg-${feature.color}`} />
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* How It Works */}
        <div className="mt-20 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-border/50">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
              How A-Stars Tracks Your Wellness
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Smart Discovery</p>
                    <p className="text-muted-foreground">Web scraper finds opportunities: courses, events, clubs, workshops.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">AI Analysis</p>
                    <p className="text-muted-foreground">MCP Assistant analyzes your activity patterns and wellness across all three rings.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Personalized Insights</p>
                    <p className="text-muted-foreground">Get tailored recommendations based on your unique patterns and goals.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">4</div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Actionable Support</p>
                    <p className="text-muted-foreground">"Take a break," "Join this event," "Try this meditation" - real-time guidance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
