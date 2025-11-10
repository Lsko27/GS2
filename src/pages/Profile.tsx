import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Briefcase,
  MapPin,
  Calendar,
  Github,
  Linkedin,
  Globe,
  Star,
  Pencil,
} from "lucide-react";

const Profile = () => {
  const user = {
    name: "Caio Oliveira",
    role: "Desenvolvedor Full Stack Pleno",
    location: "Barueri, SP",
    joinDate: "Novembro de 2025",
  };

  const skills = [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX", level: 70 },
    { name: "GraphQL", level: 65 },
  ];

  const projects = [
    {
      title: "Gerenciador de Tarefas com IA",
      description:
        "Priorização inteligente de tarefas usando aprendizado de máquina",
      tech: ["React", "Python", "TensorFlow"],
      stars: 234,
    },
    {
      title: "Biblioteca de Design System",
      description: "Biblioteca de componentes para aplicações web modernas",
      tech: ["React", "TypeScript", "Storybook"],
      stars: 156,
    },
    {
      title: "Ferramenta de Colaboração em Tempo Real",
      description: "Plataforma de colaboração baseada em WebRTC",
      tech: ["Next.js", "WebRTC", "Socket.io"],
      stars: 89,
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Primeiro Usuário",
      description: "Entrou entre os 100 primeiros da plataforma",
    },
    {
      icon: Star,
      title: "Top Contribuidor",
      description: "Fez mais de 50 conexões relevantes",
    },
    {
      icon: Briefcase,
      title: "Líder de Projeto",
      description: "Liderou 5 projetos bem-sucedidos",
    },
  ];

  // Função para gerar iniciais do nome
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Cabeçalho do Perfil */}
          <Card className="p-8 glass mb-6 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex items-center gap-4">
                {/* Avatar com iniciais */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-900 to-blue-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {getInitials(user.name)}
                </div>

                <div>
                  <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
                  <p className="text-xl text-muted-foreground mb-3">
                    {user.role}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {user.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Entrou em {user.joinDate}
                    </div>
                  </div>
                </div>
              </div>

              <Button className="bg-gradient-to-r from-blue-900 to-blue-600 flex items-center gap-2">
                <Pencil />
                Editar Perfil
              </Button>
            </div>

            <p className="text-muted-foreground mb-4">
              Apaixonado por criar aplicações bonitas e centradas no usuário.
              Sempre aprendendo e compartilhando conhecimento com a comunidade.
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
                Portfólio
              </Button>
            </div>
          </Card>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Conteúdo Principal */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 glass">
                <h2 className="text-2xl font-semibold mb-4">Habilidades</h2>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Barra de progresso preta */}
                      <div className="h-3 bg-black/40 rounded-full overflow-hidden relative">
                        <div
                          className="h-full bg-black rounded-full transition-all duration-700 ease-in-out"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass">
                <h2 className="text-2xl font-semibold mb-4">
                  Projetos em Destaque
                </h2>
                <div className="space-y-4">
                  {projects.map((project, index) => (
                    <Card
                      key={index}
                      className="p-4 hover-lift border border-border/50"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold">{project.title}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Star className="w-4 h-4" />
                          <span className="text-sm">{project.stars}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </div>

            {/* Barra Lateral */}
            <div className="space-y-6">
              <Card className="p-6 glass">
                <h2 className="text-xl font-semibold mb-4">Conquistas</h2>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <achievement.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          {achievement.title}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {achievement.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass">
                <h2 className="text-xl font-semibold mb-4">
                  Metas de Carreira
                </h2>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">Dominar System Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">Liderar uma equipe de 10+</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-sm">
                      Palestrar em uma conferência tech
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-muted" />
                    <span className="text-sm text-muted-foreground">
                      Criar uma ferramenta open-source
                    </span>
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
