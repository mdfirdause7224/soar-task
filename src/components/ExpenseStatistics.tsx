import React from 'react';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

interface DataItem {
  name: string;
  value: number;
}

interface ExpenseStatisticsProps {
  data: DataItem[]; // Accepting data as a prop
}

const COLORS: string[] = ['#FC7900', '#343C6A', '#396AFF', '#232323'];

const RADIAN = Math.PI / 180;

interface LabelProps {
  cx: number;
  cy: number;
  midAngle: number;
  innerRadius: number;
  outerRadius: number;
  percent: number;
  index: number;
  data: DataItem[]; // Pass data to the LabelProps interface
}

// Pass data as a prop to the label rendering function
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  data // receive data here
}: LabelProps) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      textAnchor="middle"
      dominantBaseline="central"
      fontSize={10}
      fontWeight="bold"
    >
      <tspan x={x} dy="-6" fill="white">{`${(percent * 100).toFixed(0)}%`}</tspan>
      <tspan x={x} dy="12" fill="white">
        {data[index].name}
      </tspan>
    </text>
  );
};

const ExpenseStatistics: React.FC<ExpenseStatisticsProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={(props) => renderCustomizedLabel({ ...props, data })} // Pass data to the label function
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ExpenseStatistics;
