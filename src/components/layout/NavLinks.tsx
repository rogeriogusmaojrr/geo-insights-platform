
import { Home, Map, BarChart2, Settings, Layers } from "lucide-react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Painel", to: "/", icon: Home },
  { name: "Explorador de Mapa", to: "/map", icon: Map },
  { name: "Análise de Dados", to: "/insights", icon: BarChart2 },
  { name: "Camadas de Dados", to: "/layers", icon: Layers },
  { name: "Configurações", to: "/settings", icon: Settings },
];

const NavLinks = () => {
  return (
    <nav className="py-2">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-2 my-1 text-sm transition-colors hover:bg-accent ${
              isActive ? "bg-accent text-accent-foreground font-medium" : "text-foreground"
            }`
          }
        >
          <link.icon className="h-4 w-4" />
          <span>{link.name}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default NavLinks;
