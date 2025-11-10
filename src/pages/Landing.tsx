import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import {
  Sparkles,
  Users,
  Target,
  TrendingUp,
  Award,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Seção Hero */}
      <section className="gradient-hero pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 bg-gradient-to-r from-blue-800 to-cyan-500">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-white">
                Rede Profissional com Inteligência Artificial
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight ">
              Sua Carreira,
              <span className="text-gradient text-blue-500"> Reimaginada</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Conecte-se com profissionais que compartilham seus objetivos.
              Deixe a IA guiar seu crescimento. Construa projetos relevantes.
              Transforme sua jornada profissional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="text-lg px-8 bg-gradient-to-r from-blue-900 to-blue-600 text-white"
                >
                  Comece Gratuitamente
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Assistir Demo
              </Button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-secondary border-2 border-background" />
                  <div className="w-8 h-8 rounded-full bg-accent border-2 border-background" />
                </div>
                <span>10.000+ profissionais</span>
              </div>
              <div>★★★★★ 4,9/5</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Recursos */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Impulsionado por Inteligência
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              O NEXWORK utiliza IA para entender seus objetivos e conectá-lo às
              oportunidades certas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 hover-lift glass">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-800 to-cyan-400 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                Conexões Inteligentes
              </h3>
              <p className="text-muted-foreground">
                A IA conecta você com mentores, colaboradores e oportunidades
                alinhadas aos seus objetivos profissionais.
              </p>
            </Card>

            <Card className="p-8 hover-lift glass">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-800 to-cyan-400 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Insights de Carreira
              </h3>
              <p className="text-muted-foreground">
                Receba trilhas de aprendizado e recomendações de habilidades
                personalizadas, baseadas nas tendências do mercado.
              </p>
            </Card>

            <Card className="p-8 hover-lift glass">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-800 to-cyan-400 flex items-center justify-center mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Colaboração em Projetos
              </h3>
              <p className="text-muted-foreground">
                Participe de projetos reais que combinem com suas habilidades e
                impulsionem seu desenvolvimento profissional.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section className="py-20 px-4 gradient-glow">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">10K+</div>
              <div className="text-muted-foreground">Profissionais Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">5K+</div>
              <div className="text-muted-foreground">Projetos Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">50K+</div>
              <div className="text-muted-foreground">Conexões Realizadas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-900 mb-2">98%</div>
              <div className="text-muted-foreground">Taxa de Satisfação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Chamada (CTA) */}
      <section className="py-20 px-4">
        <div className="mx-auto">
          <Card className="p-12 text-center gradient-primary max-w-4xl mx-auto bg-gradient-to-r from-blue-900 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-shadow">
            <h2 className="text-4xl font-bold text-primary-foreground mb-4">
              Pronto para Transformar Sua Carreira?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de profissionais que estão evoluindo com a
              ajuda da IA.
            </p>
            <Link to="/dashboard">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Comece Agora
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-bold text-gradient">NEXWORK</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2025 NEXWORK. Reimaginando o networking profissional.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
