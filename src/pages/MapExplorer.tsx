
import MainLayout from "@/components/layout/MainLayout";
import MapView from "@/components/map/MapView";

const MapExplorer = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Map Explorer</h1>
          <p className="text-muted-foreground mt-2">Explore geographic data on the interactive map.</p>
        </div>
        
        <MapView />
      </div>
    </MainLayout>
  );
};

export default MapExplorer;
