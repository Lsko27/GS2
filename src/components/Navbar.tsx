import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-border/50 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-gradient">NEXWORK</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-md text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-md text-muted-foreground hover:text-foreground transition-colors"
            >
              Projetos
            </Link>
            <Link
              to="/dashboard"
              className="text-md text-muted-foreground hover:text-foreground transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/profile"
              className="text-md text-muted-foreground hover:text-foreground transition-colors"
            >
              Perfil
            </Link>
            <Link
              to="/settings"
              className="text-md text-muted-foreground hover:text-foreground transition-colors"
            >
              Configurações
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Entrar
            </Button>
            <Button size="sm" className="gradient-primary">
              Comece Gratuitamente
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
