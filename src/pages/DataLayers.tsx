
import { useState } from "react";
import { Check, Layers, Map, Info, Eye, EyeOff } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import MainLayout from "@/components/layout/MainLayout";

interface DataLayer {
  id: string;
  name: string;
  description: string;
  type: "vector" | "raster" | "heatmap";
  enabled: boolean;
  source: string;
}

const DataLayers = () => {
  const [layers, setLayers] = useState<DataLayer[]>([
    {
      id: "population",
      name: "Population Density",
      description: "Shows population density across regions",
      type: "heatmap",
      enabled: true,
      source: "census-data",
    },
    {
      id: "roads",
      name: "Road Network",
      description: "Major roads and transportation routes",
      type: "vector",
      enabled: false,
      source: "transport-data",
    },
    {
      id: "satellite",
      name: "Satellite Imagery",
      description: "High-resolution satellite images",
      type: "raster",
      enabled: true,
      source: "satellite-data",
    },
    {
      id: "boundaries",
      name: "Administrative Boundaries",
      description: "Country, state and county boundaries",
      type: "vector",
      enabled: true,
      source: "admin-data",
    },
    {
      id: "points-of-interest",
      name: "Points of Interest",
      description: "Notable locations and landmarks",
      type: "vector",
      enabled: false,
      source: "poi-data",
    },
  ]);

  const toggleLayer = (id: string) => {
    setLayers(layers.map(layer => 
      layer.id === id ? { ...layer, enabled: !layer.enabled } : layer
    ));
  };

  const typeColors = {
    vector: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    raster: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    heatmap: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Data Layers</h1>
            <p className="text-muted-foreground mt-2">Manage map layers and data visualizations.</p>
          </div>
          <div className="flex gap-2">
            <Badge variant="outline" className="flex items-center gap-1">
              <Layers className="h-3 w-3" />
              <span>{layers.length} layers</span>
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Check className="h-3 w-3" />
              <span>{layers.filter(l => l.enabled).length} active</span>
            </Badge>
          </div>
        </div>
      
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Layers className="h-5 w-5" /> 
              Available Data Layers
            </CardTitle>
            <CardDescription>Toggle layers to show or hide them on the map</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {layers.map((layer, index) => (
                <div key={layer.id}>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{layer.name}</span>
                        <Badge variant="outline" className={typeColors[layer.type]}>
                          {layer.type}
                        </Badge>
                      </div>
                      <span className="text-xs text-muted-foreground">{layer.description}</span>
                    </div>
                    <div className="flex items-center">
                      <Switch 
                        checked={layer.enabled} 
                        onCheckedChange={() => toggleLayer(layer.id)}
                        aria-label={`Toggle ${layer.name}`}
                      />
                      <span className="ml-2 text-sm text-muted-foreground">
                        {layer.enabled ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                      </span>
                    </div>
                  </div>
                  {index < layers.length - 1 && <Separator />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
};

export default DataLayers;
