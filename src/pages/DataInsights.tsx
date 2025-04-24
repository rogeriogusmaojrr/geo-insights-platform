
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import MainLayout from "@/components/layout/MainLayout";
import DataChart from "@/components/insights/DataChart";

const DataInsights = () => {
  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Data Insights</h1>
          <p className="text-muted-foreground mt-2">Analyze and visualize your geographical data.</p>
        </div>

        <Tabs defaultValue="trends">
          <TabsList>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="comparisons">Comparisons</TabsTrigger>
            <TabsTrigger value="forecasts">Forecasts</TabsTrigger>
          </TabsList>
          <TabsContent value="trends" className="space-y-4 mt-4">
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              <DataChart title="Population Trends" description="Population changes over time" />
              <DataChart title="Economic Indicators" description="Key economic metrics by region" />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Trend Analysis</CardTitle>
                <CardDescription>Key findings from trend analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Urban population has increased 15% over the last decade</li>
                  <li>Economic activity is shifting toward coastal regions</li>
                  <li>Transportation patterns show increased regional connectivity</li>
                  <li>Development zones expanding along major transportation corridors</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="comparisons" className="space-y-4 mt-4">
            <DataChart title="Regional Comparisons" type="bar" />
          </TabsContent>
          <TabsContent value="forecasts" className="space-y-4 mt-4">
            <DataChart title="Growth Forecasts" />
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

export default DataInsights;
