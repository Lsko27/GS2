import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Users, Clock, Plus } from "lucide-react";

const Projects = () => {
  const categories = [
    "Todos",
    "Desenvolvimento Web",
    "Mobile",
    "IA/ML",
    "Design",
    "Blockchain",
  ];

  const projects = [
    {
      title: "Plataforma de Geração de Conteúdo com IA",
      description:
        "Crie uma plataforma que utiliza modelos GPT para gerar diversos tipos de conteúdo com recursos de edição colaborativa.",
      author: "Sarah Chen",
      participants: 8,
      needed: 3,
      skills: ["React", "Node.js", "OpenAI", "MongoDB"],
      timeCommitment: "10–15h/semana",
      difficulty: "Avançado",
    },
    {
      title: "Aplicativo de Vida Sustentável",
      description:
        "Acompanhe sua pegada de carbono e receba recomendações personalizadas para um estilo de vida mais sustentável.",
      author: "Mike Rivera",
      participants: 5,
      needed: 5,
      skills: ["React Native", "Firebase", "UI/UX"],
      timeCommitment: "5–10h/semana",
      difficulty: "Intermediário",
    },
    {
      title: "Sistema de Design Open Source",
      description:
        "Desenvolva um design system acessível e completo para aplicações web modernas.",
      author: "Jordan Lee",
      participants: 12,
      needed: 2,
      skills: ["TypeScript", "Storybook", "Figma", "Testing"],
      timeCommitment: "5–8h/semana",
      difficulty: "Intermediário",
    },
    {
      title: "Plataforma de Aprendizado Descentralizada",
      description:
        "Crie uma plataforma baseada em blockchain para verificação de credenciais e certificação de habilidades.",
      author: "Alex Kumar",
      participants: 6,
      needed: 4,
      skills: ["Solidity", "Web3.js", "React", "IPFS"],
      timeCommitment: "15–20h/semana",
      difficulty: "Avançado",
    },
    {
      title: "Ferramenta de Colaboração em Tempo Real",
      description:
        "Ferramenta baseada em WebRTC para colaboração remota fluida entre equipes.",
      author: "Emma Wilson",
      participants: 7,
      needed: 3,
      skills: ["WebRTC", "Socket.io", "Next.js"],
      timeCommitment: "10–12h/semana",
      difficulty: "Avançado",
    },
    {
      title: "Chatbot de Apoio à Saúde Mental",
      description:
        "Assistente virtual com IA que oferece recursos e conversas de apoio emocional.",
      author: "David Park",
      participants: 4,
      needed: 6,
      skills: ["Python", "NLP", "React", "Psicologia"],
      timeCommitment: "8–10h/semana",
      difficulty: "Intermediário",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Cabeçalho com botão à direita */}
          <div className="mb-8 animate-fade-in flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">Descubra Projetos</h1>
              <p className="text-muted-foreground">
                Participe de projetos reais e desenvolva suas habilidades
              </p>
            </div>
            <Button className="gradient-primary flex items-center gap-2 bg-gradient-to-r from-blue-900 to-blue-600">
              <Plus className="w-4 h-4" />
              Criar novo projeto
            </Button>
          </div>

          {/* Filtros */}
          <Card className="p-6 glass mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Buscar projetos..." className="pl-10" />
              </div>
              <div className="flex gap-2 overflow-x-auto">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "Todos" ? "default" : "outline"}
                    size="sm"
                    className={category === "Todos" ? "gradient-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </Card>

          {/* Grid de Projetos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 hover-lift glass flex flex-col">
                <div className="mb-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg leading-tight">
                      {project.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className={
                        project.difficulty === "Avançado"
                          ? "bg-blue-950 text-white border-0"
                          : "bg-blue-600 text-white border-0"
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
                      <span>
                        {project.participants}/
                        {project.participants + project.needed}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{project.timeCommitment}</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-900">
                    <Users />
                    Participar do Projeto
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
