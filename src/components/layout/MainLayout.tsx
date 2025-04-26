
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import NavLinks from "./NavLinks";
import { useIsMobile } from "@/hooks/use-mobile";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isMobile = useIsMobile();
  
  const isCollapsed = isMobile ? false : !sidebarOpen;

  return (
    <div className="flex min-h-screen bg-background">
      <div className={`${isCollapsed ? 'hidden md:block' : 'block'} border-r border-border`}>
        <Sidebar className="h-screen w-64">
          <SidebarHeader className="p-4 border-b border-border">
            <h2 className="text-xl font-bold">GeoInsights</h2>
            <p className="text-sm text-muted-foreground">Plataforma de visualização de dados</p>
          </SidebarHeader>
          <SidebarContent className="p-0">
            <NavLinks />
          </SidebarContent>
          <SidebarFooter className="p-4 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              © {new Date().getFullYear()} GeoInsights
            </p>
          </SidebarFooter>
        </Sidebar>
      </div>

      <main className="flex-1 flex flex-col">
        <header className="border-b border-border p-4 flex items-center justify-between bg-card">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:flex"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Alternar Menu</span>
          </Button>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">Ajuda</Button>
            <Button size="sm">Começar</Button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
