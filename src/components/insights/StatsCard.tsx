
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  change?: number;
  icon?: React.ReactNode;
}

const StatsCard = ({ title, value, description, change, icon }: StatsCardProps) => {
  const isPositive = typeof change === 'number' ? change >= 0 : undefined;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="opacity-70">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {(description || typeof change === 'number') && (
          <div className="flex items-center gap-1 mt-1">
            {typeof change === 'number' && (
              <span className={`flex items-center text-xs ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                {Math.abs(change)}%
              </span>
            )}
            {description && <p className="text-xs text-muted-foreground">{description}</p>}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
