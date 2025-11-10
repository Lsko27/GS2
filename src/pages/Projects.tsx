import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Users, Clock, Star, TrendingUp } from "lucide-react";

const Projects = () => {
  const categories = ["All", "Web Development", "Mobile", "AI/ML", "Design", "Blockchain"];
  
  const projects = [
    {
      title: "AI Content Generator Platform",
      description: "Build a platform that uses GPT models to generate various types of content with collaborative editing features",
      author: "Sarah Chen",
      participants: 8,
      needed: 3,
      skills: ["React", "Node.js", "OpenAI", "MongoDB"],
      timeCommitment: "10-15 hrs/week",
      difficulty: "Advanced",
    },
    {
      title: "Sustainable Living Mobile App",
      description: "Track carbon footprint and get personalized sustainability recommendations",
      author: "Mike Rivera",
      participants: 5,
      needed: 5,
      skills: ["React Native", "Firebase", "UI/UX"],
      timeCommitment: "5-10 hrs/week",
      difficulty: "Intermediate",
    },
    {
      title: "Open Source Design System",
      description: "Create a comprehensive, accessible design system for modern web applications",
      author: "Jordan Lee",
      participants: 12,
      needed: 2,
      skills: ["TypeScript", "Storybook", "Figma", "Testing"],
      timeCommitment: "5-8 hrs/week",
      difficulty: "Intermediate",
    },
    {
      title: "Decentralized Learning Platform",
      description: "Blockchain-based platform for credential verification and skill certification",
      author: "Alex Kumar",
      participants: 6,
      needed: 4,
      skills: ["Solidity", "Web3.js", "React", "IPFS"],
      timeCommitment: "15-20 hrs/week",
      difficulty: "Advanced",
    },
    {
      title: "Real-time Collaboration Tool",
      description: "WebRTC-powered tool for seamless remote team collaboration",
      author: "Emma Wilson",
      participants: 7,
      needed: 3,
      skills: ["WebRTC", "Socket.io", "Next.js"],
      timeCommitment: "10-12 hrs/week",
      difficulty: "Advanced",
    },
    {
      title: "Mental Health Support Bot",
      description: "AI chatbot providing mental health resources and supportive conversations",
      author: "David Park",
      participants: 4,
      needed: 6,
      skills: ["Python", "NLP", "React", "Psychology"],
      timeCommitment: "8-10 hrs/week",
      difficulty: "Intermediate",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Discover Projects</h1>
            <p className="text-muted-foreground">Join real-world projects and grow your skills</p>
          </div>

          {/* Filters */}
          <Card className="p-6 glass mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search projects..." 
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "All" ? "default" : "outline"}
                    size="sm"
                    className={category === "All" ? "gradient-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover-lift glass flex flex-col">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                    <Badge 
                      variant="outline" 
                      className={
                        project.difficulty === "Advanced" 
                          ? "bg-primary/10 text-primary border-0" 
                          : "bg-secondary/10 text-secondary border-0"
                      }
                    >
                      {project.difficulty}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-primary" />
                    <span>{project.author}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {project.skills.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{project.participants}/{project.participants + project.needed}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{project.timeCommitment}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full gradient-primary">
                    Join Project
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Create Project CTA */}
          <Card className="p-8 text-center gradient-glow mt-8">
            <h2 className="text-2xl font-bold mb-2">Have a Project Idea?</h2>
            <p className="text-muted-foreground mb-4">
              Share your vision and find collaborators to bring it to life
            </p>
            <Button size="lg" className="gradient-primary">
              Create Project
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
