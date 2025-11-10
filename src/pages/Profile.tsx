import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Briefcase, MapPin, Calendar, Github, Linkedin, Globe, Star } from "lucide-react";

const Profile = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX", level: 70 },
    { name: "GraphQL", level: 65 },
  ];

  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "Smart task prioritization using ML",
      tech: ["React", "Python", "TensorFlow"],
      stars: 234,
    },
    {
      title: "Design System Library",
      description: "Component library for modern web apps",
      tech: ["React", "TypeScript", "Storybook"],
      stars: 156,
    },
    {
      title: "Real-time Collaboration Tool",
      description: "WebRTC-based collaboration platform",
      tech: ["Next.js", "WebRTC", "Socket.io"],
      stars: 89,
    },
  ];

  const achievements = [
    { icon: Award, title: "Early Adopter", description: "Joined in the first 100 users" },
    { icon: Star, title: "Top Contributor", description: "Made 50+ meaningful connections" },
    { icon: Briefcase, title: "Project Leader", description: "Led 5 successful projects" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Profile Header */}
          <Card className="p-8 glass mb-6 animate-fade-in">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-32 h-32 rounded-2xl bg-gradient-primary flex-shrink-0" />
              
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Alex Johnson</h1>
                    <p className="text-xl text-muted-foreground mb-3">Senior Full Stack Developer</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        San Francisco, CA
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Joined March 2024
                      </div>
                    </div>
                  </div>
                  <Button className="gradient-primary">Edit Profile</Button>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Passionate about building beautiful, user-centric applications. Always learning and sharing knowledge with the community.
                </p>
                
                <div className="flex gap-3">
                  <Button size="sm" variant="outline">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </Button>
                  <Button size="sm" variant="outline">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                  <Button size="sm" variant="outline">
                    <Globe className="w-4 h-4 mr-2" />
                    Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 glass">
                <h2 className="text-2xl font-semibold mb-4">Skills</h2>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full gradient-primary rounded-full transition-all"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass">
                <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <Card key={index} className="p-4 hover-lift border border-border/50">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{project.title}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Star className="w-4 h-4" />
                          <span className="text-sm">{project.stars}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="p-6 glass">
                <h2 className="text-xl font-semibold mb-4">Achievements</h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">{achievement.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass">
                <h2 className="text-xl font-semibold mb-4">Career Goals</h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">Master System Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">Lead a team of 10+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">Speak at tech conference</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-muted" />
                    <span className="text-sm text-muted-foreground">Build an open-source tool</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
