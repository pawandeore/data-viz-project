import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ChartData = {
  month: string;
  value: number;
};

const metricData: { [key: string]: ChartData[] } = {
  'Unsatisfied Demand %': [
    { month: 'Apr', value: 12 },
    { month: 'May', value: 8 },
    { month: 'Jun', value: 15 },
    { month: 'Jul', value: 10 },
    { month: 'Aug', value: 20 },
    { month: 'Sep', value: 14 },
    { month: 'Oct', value: 9 },
    { month: 'Nov', value: 13 },
  ],
  Revenue: [
    { month: 'Apr', value: 40000 },
    { month: 'May', value: 20000 },
    { month: 'Jun', value: 50000 },
    { month: 'Jul', value: 40000 },
    { month: 'Aug', value: 100000 },
    { month: 'Sep', value: 60000 },
    { month: 'Oct', value: 35000 },
    { month: 'Nov', value: 60000 },
  ],
  Utilization: [
    { month: 'Apr', value: 75 },
    { month: 'May', value: 60 },
    { month: 'Jun', value: 80 },
    { month: 'Jul', value: 78 },
    { month: 'Aug', value: 85 },
    { month: 'Sep', value: 70 },
    { month: 'Oct', value: 65 },
    { month: 'Nov', value: 72 },
  ],
};

const ChartSection: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<string>('Unsatisfied Demand %');

  const chartData = metricData[selectedMetric];

  const formatYAxis = (value: number) => {
    if (selectedMetric === 'Revenue') {
      return value.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      });
    } else if (selectedMetric === 'Unsatisfied Demand %' || selectedMetric === 'Utilization') {
      return `${value}%`;
    }
    return value;
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-neutral-800 border border-neutral-700 p-3 rounded-lg shadow-lg">
          <p className="text-white font-medium">
            {formatYAxis(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className='space-y-6 mb-8'>
      <h2 className='text-2xl font-semibold'>Graphs</h2>
      <div className="bg-card rounded-lg p-6 h-[27rem] border border-neutral-700">
        <div className="flex justify-between items-center mb-4">
          <div className='flex ml-auto mb-5'>
            <select 
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="bg-neutral-900 border border-neutral-700 rounded-md py-1.5 px-3 text-neutral-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Unsatisfied Demand %</option>
              <option>Revenue</option>
              <option>Utilization</option>
            </select>
          </div>
        </div>
        <div className="h-[calc(100%-3rem)]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis 
                dataKey="month" 
                stroke="#aaa"
                tick={{ fill: '#aaa', fontSize: 12 }}
              />
              <YAxis 
                stroke="#aaa"
                tick={{ fill: '#aaa', fontSize: 12 }}
                tickFormatter={formatYAxis}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#aaff33"
                strokeWidth={2}
                dot={{
                  fill: '#aaff33',
                  stroke: '#111',
                  strokeWidth: 2,
                  r: 4,
                }}
                activeDot={{
                  fill: '#aaff33',
                  stroke: '#111',
                  strokeWidth: 2,
                  r: 6,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;