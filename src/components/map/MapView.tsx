
import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Map as MapIcon, Layers, Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const MapView = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className="w-full h-full overflow-hidden relative">
      <div className="absolute top-4 left-4 right-4 z-10 flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Input placeholder="Search locations..." className="pl-10 pr-4" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Layers className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MapIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-0 h-[calc(100vh-13rem)]">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center bg-muted/20">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-sm text-muted-foreground">Loading map...</p>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full bg-[url('https://images.unsplash.com/photo-1618677366787-9727d6335d95?auto=format&fit=crop&q=80')]">
            {/* Map placeholder */}
            <div 
              ref={mapContainerRef} 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundColor: "#EAEAEB" }}
            ></div>
            
            {/* Sample map pins */}
            <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Badge className="bg-primary animate-pulse">New York</Badge>
            </div>
            <div className="absolute top-2/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <Badge variant="secondary">Chicago</Badge>
            </div>
            <div className="absolute bottom-1/4 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <Badge variant="outline">San Francisco</Badge>
            </div>
          </div>
        )}
      </CardContent>

      <div className="absolute bottom-6 right-6 flex flex-col gap-2">
        <Button variant="secondary" size="icon">
          <Plus className="h-4 w-4" />
        </Button>
        <Button variant="secondary" size="icon">
          <Minus className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
};

export default MapView;
