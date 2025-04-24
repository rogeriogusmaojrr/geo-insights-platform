
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', value: 400, visits: 240 },
  { name: 'Feb', value: 300, visits: 139 },
  { name: 'Mar', value: 200, visits: 980 },
  { name: 'Apr', value: 278, visits: 390 },
  { name: 'May', value: 189, visits: 480 },
  { name: 'Jun', value: 239, visits: 380 },
  { name: 'Jul', value: 349, visits: 430 },
];

interface DataChartProps {
  title: string;
  description?: string;
  type?: 'line' | 'bar';
}

const DataChart = ({ title, description, type = 'line' }: DataChartProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            {type === 'line' ? (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" name="Data Points" />
                <Line type="monotone" dataKey="visits" stroke="#82ca9d" name="Visits" />
              </LineChart>
            ) : (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#8884d8" name="Data Points" />
                <Bar dataKey="visits" fill="#82ca9d" name="Visits" />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DataChart;
