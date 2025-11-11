import { Users } from "lucide-react";

const teamMembers = [
  {
    name: "Adrian",
    description: "I have built a strong technical foundation through self-driven learning this summer by enhancing my existing Python skills with experiences like file handling(Python) and expanding my stack to include Bash(CLI), Git, GitHub, Tableau, and Excel. To bring my ideas to life, I have participated in a Generative AI hackathon for SDGs and an AlphaSights case competition. Further, I have hands-on experience in web development, having built and deployed personal websites using platforms like Squarespace and Bolt.new."
  },
  {
    name: "Adrian",
    description: "I co-founded a student-led STEM organization and revitalized a school club, demonstrating early initiative. I have since built a robust technical foundation, gaining proficiency in Python, web development, and AI through projects like a custom Speech-to-Text application and qualifications like the Inspirit AI program. I have applied these skills in diverse professional environments, from a full-stack junior developer role at a fintech startup to IT support."
  },
  {
    name: "Akshay",
    description: "Over the course of the past four years, I've been involved in 2 hackathons, and have extensive experience in AI/ML using Sci-Kit Learn, NumPy, Pandas, Matplotlib, Seaborn, Langchain, NLTK, and fair experience in TensorFlow and PyTorch. To ensure my skills are up to date, I'll be further reinforcing my programming in PyTorch and TensorFlow using online courses and tutorials."
  }
];

const Team = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 opacity-50" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Team Experience</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            Meet The <span className="text-gradient">Team</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate innovators combining technical expertise with real-world experience
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Futuristic card with cut corners */}
              <div className="relative bg-gradient-to-br from-background via-card to-background border border-border/50 p-8 h-full
                clip-corners hover:border-primary/50 transition-all duration-300
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-primary/5 before:via-secondary/5 before:to-accent/5 before:opacity-0 before:hover:opacity-100 before:transition-opacity before:duration-300 before:clip-corners">
                
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/30" />
                <div className="absolute top-0 right-0 w-12 h-12 border-r-2 border-t-2 border-secondary/30" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-l-2 border-b-2 border-accent/30" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 border-primary/30" />

                <div className="relative z-10 space-y-4">
                  <div className="inline-block">
                    <h3 className="text-2xl font-bold text-gradient mb-2">{member.name}</h3>
                    <div className="h-1 w-20 bg-gradient-wellness rounded-full" />
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Animated gradient border on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none clip-corners">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-20 animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .clip-corners {
          clip-path: polygon(
            0 12px, 12px 0,
            calc(100% - 12px) 0, 100% 12px,
            100% calc(100% - 12px), calc(100% - 12px) 100%,
            12px 100%, 0 calc(100% - 12px)
          );
        }
      `}</style>
    </section>
  );
};

export default Team;
