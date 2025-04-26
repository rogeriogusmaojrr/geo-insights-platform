
import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import MapView from "@/components/map/MapView";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Users, Store, Navigation, ChartBar, Layers } from "lucide-react";

const MapExplorer = () => {
  const [activeLayer, setActiveLayer] = useState<string>("demographics");
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  const handleLayerChange = (value: string) => {
    setActiveLayer(value);
  };
  
  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
  };
  
  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Geomarketing Explorer</h1>
            <p className="text-muted-foreground mt-2">Analyze market potential across different geographic regions.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <Select defaultValue="city" aria-label="Location scope">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select scope" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="neighborhood">Neighborhood</SelectItem>
                <SelectItem value="city">City</SelectItem>
                <SelectItem value="region">Region</SelectItem>
                <SelectItem value="country">Country</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline" className="gap-2">
              <Navigation className="h-4 w-4" />
              Current Location
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <MapView 
                activeLayer={activeLayer} 
                onRegionSelect={handleRegionSelect} 
              />
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Layers className="h-5 w-5" />
                  Market Analysis Layers
                </CardTitle>
                <CardDescription>Select different data layers to analyze market potential</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="demographics" onValueChange={handleLayerChange} className="w-full">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="demographics">Demographics</TabsTrigger>
                    <TabsTrigger value="competition">Competition</TabsTrigger>
                    <TabsTrigger value="potential">Potential</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="demographics" className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      <div className="font-medium">Population Density</div>
                    </div>
                    <p className="text-sm text-muted-foreground">View population demographics including age, income, and education levels.</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" variant="outline">Age Groups</Button>
                      <Button size="sm" variant="outline">Income Levels</Button>
                      <Button size="sm" variant="outline">Spending Habits</Button>
                      <Button size="sm" variant="outline">Education</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="competition" className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Store className="h-5 w-5 text-orange-500" />
                      <div className="font-medium">Competitor Analysis</div>
                    </div>
                    <p className="text-sm text-muted-foreground">Analyze competitor locations, market share, and business types.</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" variant="outline">Store Density</Button>
                      <Button size="sm" variant="outline">Market Share</Button>
                      <Button size="sm" variant="outline">Saturation</Button>
                      <Button size="sm" variant="outline">Performance</Button>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="potential" className="space-y-4">
                    <div className="flex items-center gap-2">
                      <ChartBar className="h-5 w-5 text-green-500" />
                      <div className="font-medium">Market Potential</div>
                    </div>
                    <p className="text-sm text-muted-foreground">Identify high-potential areas based on multiple factors.</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button size="sm" variant="outline">Growth Areas</Button>
                      <Button size="sm" variant="outline">Opportunity Index</Button>
                      <Button size="sm" variant="outline">ROI Estimate</Button>
                      <Button size="sm" variant="outline">Traffic Patterns</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
            
            {selectedRegion && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Region Insights
                  </CardTitle>
                  <CardDescription>{selectedRegion}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-medium mb-1">Market Score</div>
                      <div className="bg-muted rounded-full h-2">
                        <div className="bg-primary rounded-full h-2 w-4/5"></div>
                      </div>
                      <div className="flex justify-between text-xs mt-1">
                        <span>0</span>
                        <span className="text-primary font-medium">82/100</span>
                        <span>100</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div>
                        <div className="text-xs text-muted-foreground">Population</div>
                        <div className="font-medium">125,432</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Avg. Income</div>
                        <div className="font-medium">$68,500</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Competitors</div>
                        <div className="font-medium">23</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground">Potential ROI</div>
                        <div className="font-medium text-green-500">High</div>
                      </div>
                    </div>
                    
                    <Button className="w-full">Generate Detailed Report</Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default MapExplorer;
