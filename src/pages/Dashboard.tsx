import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  TrendingUp,
  Users,
  Briefcase,
  Award,
  Target,
} from "lucide-react";

const Dashboard = () => {
  const aiRecommendations = [
    {
      type: "opportunity",
      title: "Desenvolvedor Frontend Sênior",
      company: "TechCorp",
      match: 95,
      tags: ["React", "TypeScript", "Remoto"],
    },
    {
      type: "project",
      title: "Design System Open Source",
      contributors: 12,
      match: 88,
      tags: ["UI/UX", "React", "Figma"],
    },
    {
      type: "mentor",
      title: "Sarah Chen",
      role: "Líder de Design de Produto",
      match: 92,
      tags: ["UI/UX", "Liderança"],
    },
  ];

  const connections = [
    { name: "Alex Rivera", role: "Desenvolvedor Full Stack", mutual: 5 },
    { name: "Jordan Lee", role: "Gerente de Produto", mutual: 8 },
    { name: "Sam Taylor", role: "Designer UX", mutual: 3 },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-4xl font-bold mb-2">Bem-vindo de volta!</h1>
            <p className="text-muted-foreground">
              Veja o que está acontecendo na sua rede
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Feed principal */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="p-6 glass">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                  <h2 className="text-xl font-semibold">Recomendações da IA</h2>
                </div>

                <div className="space-y-4">
                  {aiRecommendations.map((item, index) => (
                    <Card
                      key={index}
                      className="p-4 hover-lift border border-border/50"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {"company" in item
                              ? item.company
                              : "contributors" in item
                              ? `${item.contributors} colaboradores`
                              : item.role}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 text-primary border-0"
                        >
                          {item.match}% de compatibilidade
                        </Badge>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {item.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button size="sm" className="w-full bg-blue-900">
                        Ver detalhes
                      </Button>
                    </Card>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <h2 className="text-xl font-semibold">
                    Insights de Habilidades
                  </h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">
                        Desenvolvimento React
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Especialista
                      </span>
                    </div>
                    <div className="h-3 bg-black/20 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-black rounded-full transition-all duration-700 ease-in-out"
                        style={{ width: "90%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">TypeScript</span>
                      <span className="text-sm text-muted-foreground">
                        Avançado
                      </span>
                    </div>
                    <div className="h-3 bg-black/20 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-black rounded-full transition-all duration-700 ease-in-out"
                        style={{ width: "75%" }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Design UI/UX</span>
                      <span className="text-sm text-muted-foreground">
                        Intermediário
                      </span>
                    </div>
                    <div className="h-3 bg-black/20 rounded-full overflow-hidden relative">
                      <div
                        className="h-full bg-black rounded-full transition-all duration-700 ease-in-out"
                        style={{ width: "60%" }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Barra lateral */}
            <div className="space-y-6">
              <Card className="p-6 glass">
                <h2 className="text-xl font-semibold mb-4">
                  Estatísticas Rápidas
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">156</div>
                        <div className="text-xs text-muted-foreground">
                          Conexões
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">12</div>
                        <div className="text-xs text-muted-foreground">
                          Projetos Ativos
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold">8</div>
                        <div className="text-xs text-muted-foreground">
                          Conquistas
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass">
                <h2 className="text-xl font-semibold mb-4">
                  Conexões Sugeridas
                </h2>
                <div className="space-y-4">
                  {connections.map((person, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                        <div>
                          <div className="font-medium text-sm">
                            {person.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {person.role}
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Conectar
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
