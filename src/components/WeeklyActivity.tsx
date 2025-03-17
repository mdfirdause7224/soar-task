import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

const data = [
  {
    name: 'Sat',
    Withdraw: 450,
    Deposit: 200
  },
  {
    name: 'Sun',
    Withdraw: 350,
    Deposit: 120
  },
  {
    name: 'Mon',
    Withdraw: 320,
    Deposit: 260
  },
  {
    name: 'Tue',
    Withdraw: 450,
    Deposit: 350
  },
  {
    name: 'Wed',
    Withdraw: 150,
    Deposit: 240
  },
  {
    name: 'Thu',
    Withdraw: 380,
    Deposit: 230
  },
  {
    name: 'Fri',
    Withdraw: 380,
    Deposit: 340
  }
];

export default function WeeklyActivity() {
  return (
    <ResponsiveContainer width={600} height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3" horizontal={true} vertical={false} />
        <XAxis dataKey="name" />
        <YAxis ticks={[0, 100, 200, 300, 400, 500]} />
        <Tooltip
          contentStyle={{
            borderRadius: '8px',
            backgroundColor: '#f0f0f0', // Change background color of the tooltip
            color: 'lightblue', // Change text color
            border: '1px solid #ccc' // Optional: Add border color
          }}
        />
        <Legend verticalAlign="top" align="right" iconType="circle" />
        <Bar dataKey="Withdraw" fill="#343C6A" radius={10} barSize={10} activeBar={<Rectangle />} />
        <Bar dataKey="Deposit" fill="#396AFF" radius={10} barSize={10} activeBar={<Rectangle />} />
      </BarChart>
    </ResponsiveContainer>
  );
}
