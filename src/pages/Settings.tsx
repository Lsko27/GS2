import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Save } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const [fontSize, setFontSize] = useState(1); // 0: small, 1: medium, 2: large
  const [highContrast, setHighContrast] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const fontSizeValues = ["text-sm", "text-base", "text-lg"];
  const fontSizeLabels = ["Pequeno", "Médio", "Grande"];

  const handleSavePreferences = () => {
    toast.success("Preferências salvas com sucesso!");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 pt-24 pb-16">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <SettingsIcon className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-gradient">Acessibilidade</h1>
          </div>
          <p className="text-muted-foreground ml-12">
            Personalize a interface para melhorar sua experiência de navegação
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Settings Controls */}
          <div className="space-y-6 animate-slide-up">
            {/* Font Size */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle>Tamanho da Fonte</CardTitle>
                <CardDescription>
                  Ajuste o tamanho do texto para melhor legibilidade
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    {fontSizeLabels.map((label, idx) => (
                      <span
                        key={idx}
                        className={
                          fontSize === idx ? "text-primary font-medium" : ""
                        }
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                  <Slider
                    value={[fontSize]}
                    onValueChange={(value) => setFontSize(value[0])}
                    min={0}
                    max={2}
                    step={1}
                    className="w-full"
                    aria-label="Tamanho da fonte"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Contrast */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle>Contraste de Cores</CardTitle>
                <CardDescription>
                  Aumente o contraste para melhor visualização
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="contrast" className="cursor-pointer">
                    {highContrast ? "Alto Contraste Ativo" : "Contraste Normal"}
                  </Label>
                  <Switch
                    id="contrast"
                    checked={highContrast}
                    onCheckedChange={setHighContrast}
                    aria-label="Alternar contraste de cores"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Animations */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle>Animações</CardTitle>
                <CardDescription>
                  Controle os efeitos visuais e transições
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="animations" className="cursor-pointer">
                    {animationsEnabled
                      ? "Animações Ativas"
                      : "Animações Desativadas"}
                  </Label>
                  <Switch
                    id="animations"
                    checked={animationsEnabled}
                    onCheckedChange={setAnimationsEnabled}
                    aria-label="Alternar animações"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Dark Mode */}
            <Card className="glass border-border/50">
              <CardHeader>
                <CardTitle>Tema</CardTitle>
                <CardDescription>
                  Escolha entre modo claro ou escuro
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <Label htmlFor="theme" className="cursor-pointer">
                    {darkMode ? "Modo Escuro" : "Modo Claro"}
                  </Label>
                  <Switch
                    id="theme"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                    aria-label="Alternar tema claro/escuro"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Save Button */}
            <Button
              onClick={handleSavePreferences}
              className="w-full bg-gradient-to-r from-blue-900 to-blue-600 text-white"
              size="lg"
            >
              <Save className="w-4 h-4 mr-2" />
              Salvar Preferências
            </Button>
          </div>

          {/* Preview Area */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <Card
              className={`glass border-border/50 sticky top-24 ${
                highContrast ? "border-2 border-foreground" : ""
              } ${!animationsEnabled ? "" : "transition-all duration-300"}`}
            >
              <CardHeader>
                <CardTitle>Pré-visualização</CardTitle>
                <CardDescription>
                  Veja como suas configurações afetam a interface
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Sample Content */}
                <div className="space-y-4">
                  <div>
                    <h3
                      className={`font-semibold mb-2 ${
                        fontSizeValues[fontSize]
                      } ${highContrast ? "text-foreground" : ""}`}
                    >
                      Exemplo de Título
                    </h3>
                    <p
                      className={`${fontSizeValues[fontSize]} ${
                        highContrast
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      Este é um parágrafo de exemplo mostrando como o texto será
                      exibido com suas configurações atuais de acessibilidade.
                    </p>
                  </div>

                  {/* Sample Card */}
                  <div
                    className={`p-4 rounded-lg ${
                      highContrast
                        ? "bg-foreground/10 border-2 border-foreground"
                        : "bg-muted"
                    } ${
                      !animationsEnabled
                        ? ""
                        : "hover:scale-105 transition-transform duration-200"
                    }`}
                  >
                    <h4
                      className={`font-medium mb-1 ${
                        fontSizeValues[fontSize]
                      } ${highContrast ? "text-foreground" : ""}`}
                    >
                      Card de Exemplo
                    </h4>
                    <p
                      className={`${fontSizeValues[fontSize]} ${
                        highContrast
                          ? "text-foreground"
                          : "text-muted-foreground"
                      }`}
                    >
                      Conteúdo do card com texto de amostra
                    </p>
                  </div>

                  {/* Sample Button */}
                  <Button
                    className={`w-full gradient-primary ${
                      !animationsEnabled ? "transition-none" : ""
                    }`}
                    size={
                      fontSize === 0 ? "sm" : fontSize === 2 ? "lg" : "default"
                    }
                  >
                    Botão de Exemplo
                  </Button>

                  {/* Accessibility Info */}
                  <div
                    className={`p-3 rounded-lg bg-primary/10 border border-primary/20`}
                  >
                    <p
                      className={`${fontSizeValues[fontSize]} ${
                        highContrast ? "text-foreground" : "text-foreground/80"
                      }`}
                    >
                      <strong>Configurações Atuais:</strong>
                      <br />
                      Fonte: {fontSizeLabels[fontSize]}
                      <br />
                      Contraste: {highContrast ? "Alto" : "Normal"}
                      <br />
                      Animações: {animationsEnabled ? "Sim" : "Não"}
                      <br />
                      Tema: {darkMode ? "Escuro" : "Claro"}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
