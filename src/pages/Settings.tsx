
import { useState } from "react";
import { Save } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import MainLayout from "@/components/layout/MainLayout";

const Settings = () => {
  const [settings, setSettings] = useState({
    apiKey: "sk_test_4eC39HqLyjWDarjtT1zdp7dc",
    projectName: "GeoInsights Project",
    description: "A comprehensive platform for geographical data analysis and visualization.",
    notifications: true,
    dataSharing: false,
    autoSave: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name: string, checked: boolean) => {
    setSettings(prev => ({ ...prev, [name]: checked }));
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your account and application settings.</p>
        </div>
        
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Configure your project settings and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="projectName">Project Name</Label>
                <Input 
                  id="projectName" 
                  name="projectName"
                  value={settings.projectName} 
                  onChange={handleInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  name="description"
                  value={settings.description} 
                  onChange={handleInputChange}
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apiKey">API Key</Label>
                <Input 
                  id="apiKey" 
                  name="apiKey"
                  value={settings.apiKey} 
                  onChange={handleInputChange}
                  type="password"
                />
                <p className="text-sm text-muted-foreground">Used to authenticate API requests to external services.</p>
              </div>
              <Separator />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="notifications">Notifications</Label>
                    <p className="text-sm text-muted-foreground">Receive notifications about updates and alerts.</p>
                  </div>
                  <Switch 
                    id="notifications"
                    checked={settings.notifications}
                    onCheckedChange={(checked) => handleSwitchChange("notifications", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="dataSharing">Data Sharing</Label>
                    <p className="text-sm text-muted-foreground">Share anonymized usage data to help improve the product.</p>
                  </div>
                  <Switch 
                    id="dataSharing"
                    checked={settings.dataSharing}
                    onCheckedChange={(checked) => handleSwitchChange("dataSharing", checked)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="autoSave">Auto Save</Label>
                    <p className="text-sm text-muted-foreground">Automatically save changes to maps and visualizations.</p>
                  </div>
                  <Switch 
                    id="autoSave"
                    checked={settings.autoSave}
                    onCheckedChange={(checked) => handleSwitchChange("autoSave", checked)}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="flex items-center gap-2">
                <Save className="h-4 w-4" />
                Save Settings
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Settings;
