
import { MapPin, BarChart2, Users, Database } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";
import DataChart from "@/components/insights/DataChart";
import StatsCard from "@/components/insights/StatsCard";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome to your GeoInsights dashboard.</p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <StatsCard 
            title="Total Locations" 
            value="2,853" 
            change={12}
            icon={<MapPin className="h-4 w-4" />} 
          />
          <StatsCard 
            title="Data Points" 
            value="1.2M" 
            change={-2.5}
            icon={<Database className="h-4 w-4" />} 
          />
          <StatsCard 
            title="Active Users" 
            value="11,023" 
            change={8.2}
            icon={<Users className="h-4 w-4" />} 
          />
          <StatsCard 
            title="Insights Generated" 
            value="452" 
            change={24}
            icon={<BarChart2 className="h-4 w-4" />} 
          />
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <DataChart 
            title="Data Trends" 
            description="Visualization of collected data points over time" 
            type="line"
          />
          <DataChart 
            title="Regional Distribution" 
            description="Data points distribution by region" 
            type="bar"
          />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
