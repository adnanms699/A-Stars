import { Brain, Heart, Dumbbell, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Brain,
    title: "Never Miss Growth Opportunities",
    description: "Automatically discover courses, workshops, and academic events that match your interests and career goals. Stay ahead of opportunities.",
    color: "wellness-mental"
  },
  {
    icon: Heart,
    title: "Maintain Mental Balance",
    description: "Get alerts when you're overworking. Receive suggestions for meditation, social events, or breaks. Keep stress in a healthy zone.",
    color: "wellness-psychological"
  },
  {
    icon: Dumbbell,
    title: "Stay Active & Manage Your Time",
    description: "Track how you spend your time, find sports clubs, gym classes, and outdoor activities. Get insights on time management and reminders to stay physically active and balanced.",
    color: "wellness-physical"
  },
  {
    icon: TrendingUp,
    title: "Holistic Development",
    description: "See your complete wellness picture at a glance. Track progress over time. Celebrate achievements. Grow in all dimensions of university life.",
    color: "primary"
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Your Personal Development Companion
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stop juggling multiple apps and missing opportunities. A-Stars brings everything together in one intelligent platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-${benefit.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-6 h-6 text-${benefit.color}`} />
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
            );
          })}
        </div>

        {/* Real-World Example */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-wellness border-2 border-primary/20 text-center space-y-4 shadow-xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/90 mb-4">
            <span className="text-3xl">💡</span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            Real-Time Wellness Notifications
          </h3>
          <div className="max-w-3xl mx-auto space-y-3 text-white/90">
            <p className="text-lg">
              <strong>"You've been studying for 10 hours straight."</strong>
            </p>
            <p className="text-base">
              Here's a guided meditation to help you reset. Take a 15-minute break to recharge.
            </p>
            <div className="pt-4 border-t border-white/20">
              <p className="text-lg">
                <strong>"You've shown interest in sustainability."</strong>
              </p>
              <p className="text-base">
                There's a beach cleanup this weekend with the Environmental Club. Connect with like-minded people!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
