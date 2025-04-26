
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Map as MapIcon, Layers, Plus, Minus, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface MapViewProps {
  activeLayer?: string;
  onRegionSelect?: (region: string) => void;
}

const MapView = ({ activeLayer = "demographics", onRegionSelect }: MapViewProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();
  
  // Mock data for demonstration
  const mockRegions = [
    { name: "Downtown", position: { top: "1/3", left: "1/2" }, type: "primary" },
    { name: "East Side", position: { top: "2/3", left: "1/4" }, type: "secondary" },
    { name: "Tech District", position: { bottom: "1/4", right: "1/3" }, type: "outline" },
    { name: "Shopping Center", position: { top: "45%", left: "65%" }, type: "secondary" },
    { name: "Residential Area", position: { top: "70%", left: "30%" }, type: "outline" },
  ];

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (!loading) {
      // Simulate layer change
      toast({
        title: "Layer Changed",
        description: `Displaying ${activeLayer} data on the map`,
      });
    }
  }, [activeLayer, loading, toast]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Location Search",
        description: `Searching for "${searchQuery}"...`,
      });
    }
  };

  const handleRegionClick = (regionName: string) => {
    if (onRegionSelect) {
      onRegionSelect(regionName);
      toast({
        title: "Region Selected",
        description: `Analyzing ${regionName} market data`,
      });
    }
  };
  
  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "primary": return "bg-primary";
      case "secondary": return "secondary";
      case "outline": return "outline";
      default: return "secondary";
    }
  };

  const getLayerBackground = () => {
    switch (activeLayer) {
      case "demographics": 
        return "bg-[url('https://images.unsplash.com/photo-1618677366787-9727d6335d95?auto=format&fit=crop&q=80')] opacity-90 after:absolute after:inset-0 after:bg-blue-500/20";
      case "competition": 
        return "bg-[url('https://images.unsplash.com/photo-1618677366787-9727d6335d95?auto=format&fit=crop&q=80')] opacity-90 after:absolute after:inset-0 after:bg-orange-500/20";
      case "potential": 
        return "bg-[url('https://images.unsplash.com/photo-1618677366787-9727d6335d95?auto=format&fit=crop&q=80')] opacity-90 after:absolute after:inset-0 after:bg-green-500/20";
      default: 
        return "bg-[url('https://images.unsplash.com/photo-1618677366787-9727d6335d95?auto=format&fit=crop&q=80')]";
    }
  };

  return (
    <CardContent className="p-0 h-[calc(100vh-13rem)] relative">
      <div className="absolute top-4 left-4 right-4 z-10 flex gap-4">
        <form onSubmit={handleSearch} className="relative flex-1 max-w-md">
          <Input 
            placeholder="Search locations..." 
            className="pl-10 pr-4" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </form>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" title="Toggle Layers">
            <Layers className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" title="Toggle Map Type">
            <MapIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="w-full h-full flex items-center justify-center bg-muted/20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-sm text-muted-foreground">Loading map...</p>
          </div>
        </div>
      ) : (
        <div className={`relative w-full h-full ${getLayerBackground()}`}>
          <div 
            ref={mapContainerRef} 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundColor: "#EAEAEB" }}
          ></div>
          
          {/* Map pins representing regions */}
          {mockRegions.map((region) => (
            <div 
              key={region.name}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={{ 
                top: region.position.top || "auto", 
                left: region.position.left || "auto",
                bottom: region.position.bottom || "auto",
                right: region.position.right || "auto"
              }}
              onClick={() => handleRegionClick(region.name)}
            >
              <Badge className={`group hover:scale-110 transition-transform ${getBadgeVariant(region.type)}`}>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  <span>{region.name}</span>
                </div>
              </Badge>
            </div>
          ))}
          
          {/* Heat map overlay based on selected layer */}
          <div className="absolute inset-0 pointer-events-none">
            {activeLayer === "demographics" && (
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/0 via-blue-500/20 to-transparent" style={{ left: "30%", top: "40%", width: "40%", height: "40%" }}></div>
            )}
            {activeLayer === "competition" && (
              <div className="absolute inset-0 bg-gradient-radial from-orange-500/0 via-orange-500/20 to-transparent" style={{ left: "60%", top: "30%", width: "30%", height: "40%" }}></div>
            )}
            {activeLayer === "potential" && (
              <div className="absolute inset-0 bg-gradient-radial from-green-500/0 via-green-500/30 to-transparent" style={{ left: "40%", top: "60%", width: "35%", height: "30%" }}></div>
            )}
          </div>
        </div>
      )}

      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <Button variant="secondary" size="icon" title="Zoom In">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon" title="Zoom Out">
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      {!loading && (
        <div className="absolute bottom-6 left-6 bg-background/80 backdrop-blur-sm rounded-md p-2 text-xs">
          <div className="font-medium mb-1">Layer: {activeLayer.charAt(0).toUpperCase() + activeLayer.slice(1)}</div>
          <div className="flex gap-2">
            {activeLayer === "demographics" && (
              <>
                <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-blue-600"></span>High Density</span>
                <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-blue-300"></span>Medium Density</span>
              </>
            )}
            {activeLayer === "competition" && (
              <>
                <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-orange-600"></span>High Competition</span>
                <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-orange-300"></span>Low Competition</span>
              </>
            )}
            {activeLayer === "potential" && (
              <>
                <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-green-600"></span>High Potential</span>
                <span className="flex items-center gap-1"><span className="h-3 w-3 rounded-full bg-green-300"></span>Moderate Potential</span>
              </>
            )}
          </div>
        </div>
      )}
    </CardContent>
  );
};

export default MapView;
