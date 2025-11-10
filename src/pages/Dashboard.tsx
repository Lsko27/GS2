import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Users, Briefcase, Award, Target } from "lucide-react";

const Dashboard = () => {
  const aiRecommendations = [
    {
      type: "opportunity",
      title: "Senior Frontend Developer",
      company: "TechCorp",
      match: 95,
      tags: ["React", "TypeScript", "Remote"],
    },
    {
      type: "project",
      title: "Open Source Design System",
      contributors: 12,
      match: 88,
      tags: ["UI/UX", "React", "Figma"],
    },
    {
      type: "mentor",
      title: "Sarah Chen",
      role: "Product Design Lead",
      match: 92,
      tags: ["UI/UX", "Leadership"],
    },
  ];

  const connections = [
    { name: "Alex Rivera", role: "Full Stack Developer", mutual: 5 },
    { name: "Jordan Lee", role: "Product Manager", mutual: 8 },
    { name: "Sam Taylor", role: "UX Designer", mutual: 3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Welcome back! 👋</h1>
            <p className="text-muted-foreground">Here's what's happening in your network</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 glass">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">AI Recommendations</h2>
                </div>
                
                <div className="space-y-4">
                  {aiRecommendations.map((item, index) => (
                    <Card key={index} className="p-4 hover-lift border border-border/50">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {"company" in item ? item.company : "contributors" in item ? `${item.contributors} contributors` : item.role}
                          </p>
                        </div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                          {item.match}% Match
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" variant="ghost" className="w-full">
                        View Details
                      </Button>
                    </Card>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <h2 className="text-xl font-semibold">Skill Insights</h2>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">React Development</span>
                      <span className="text-sm text-muted-foreground">Expert</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[90%] gradient-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">TypeScript</span>
                      <span className="text-sm text-muted-foreground">Advanced</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[75%] gradient-primary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">UI/UX Design</span>
                      <span className="text-sm text-muted-foreground">Intermediate</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full w-[60%] gradient-primary rounded-full" />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 glass">
                <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">156</div>
                        <div className="text-xs text-muted-foreground">Connections</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-semibold">12</div>
                        <div className="text-xs text-muted-foreground">Active Projects</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <div className="font-semibold">8</div>
                        <div className="text-xs text-muted-foreground">Achievements</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass">
                <h2 className="text-xl font-semibold mb-4">Suggested Connections</h2>
                <div className="space-y-4">
                  {connections.map((person, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                        <div>
                          <div className="font-medium text-sm">{person.name}</div>
                          <div className="text-xs text-muted-foreground">{person.role}</div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Connect
                      </Button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
