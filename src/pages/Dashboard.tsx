
import { MapPin, BarChart2, Users, Database } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DataChart from "@/components/insights/DataChart";
import StatsCard from "@/components/insights/StatsCard";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Painel</h1>
          <p className="text-muted-foreground mt-2">Bem-vindo ao seu painel GeoInsights.</p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard 
            title="Total de Locais" 
            value="2.853" 
            change={12}
            icon={<MapPin className="h-4 w-4" />} 
          />
          <StatsCard 
            title="Pontos de Dados" 
            value="1,2M" 
            change={-2.5}
            icon={<Database className="h-4 w-4" />} 
          />
          <StatsCard 
            title="Usuários Ativos" 
            value="11.023" 
            change={8.2}
            icon={<Users className="h-4 w-4" />} 
          />
          <StatsCard 
            title="Insights Gerados" 
            value="452" 
            change={24}
            icon={<BarChart2 className="h-4 w-4" />} 
          />
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <DataChart 
            title="Tendências de Dados" 
            description="Visualização dos pontos de dados ao longo do tempo" 
            type="line"
          />
          <DataChart 
            title="Distribuição Regional" 
            description="Distribuição de pontos de dados por região" 
            type="bar"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
